const router = require('express').Router();
const Request = require('../models/Request');
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const { requestValidators, commonValidators, handleValidationErrors } = require('../middleware/validators');
const { calculateImpactMetrics, extractCityFromAddress } = require('../utils/impactMath');
const ImpactLog = require('../models/ImpactLog');

/**
 * @route   POST /api/requests
 * @desc    Create a new food request
 * @access  Private
 */
router.post('/',
  auth(true),
  requestValidators.create,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { needType, quantity, deliveryAddress, location, urgency } = req.body;

      const requestData = {
        user: req.user.id,
        needType,
        quantity,
        deliveryAddress,
        location,
        urgency: urgency || 'medium'
      };

      const request = new Request(requestData);
      await request.save();

      // Create impact log entry
      const city = extractCityFromAddress(deliveryAddress);
      const impact = calculateImpactMetrics({ foodType: needType, quantity });

      await ImpactLog.create({
        entity: 'request',
        entityId: request._id,
        city,
        meals: impact.meals,
        kgSaved: impact.kgSaved,
        co2SavedKg: impact.co2SavedKg
      });

      res.status(201).json({
        message: 'Food request created successfully',
        request
      });

    } catch (error) {
      console.error('Create request error:', error);
      res.status(500).json({ message: 'Server error while creating request' });
    }
  }
);

/**
 * @route   GET /api/requests
 * @desc    Get all requests with filtering and pagination
 * @access  Public
 */
router.get('/',
  commonValidators.pagination,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { status, needType, urgency, limit = 50, skip = 0 } = req.query;

      const filter = {};
      if (status) filter.status = status;
      if (needType) filter.needType = needType;
      if (urgency) filter.urgency = urgency;

      const requests = await Request.find(filter)
        .populate('user', 'name email role')
        .sort({ urgency: 1, createdAt: -1 }) // high urgency first
        .skip(Number(skip))
        .limit(Number(limit));

      const total = await Request.countDocuments(filter);

      res.json({
        requests,
        pagination: {
          total,
          limit: Number(limit),
          skip: Number(skip),
          hasMore: total > Number(skip) + Number(limit)
        }
      });

    } catch (error) {
      console.error('Get requests error:', error);
      res.status(500).json({ message: 'Server error while fetching requests' });
    }
  }
);

/**
 * @route   GET /api/requests/urgent
 * @desc    Get urgent requests
 * @access  Public
 */
router.get('/urgent', async (req, res) => {
  try {
    const requests = await Request.find({
      urgency: 'high',
      status: 'open'
    })
    .populate('user', 'name email role')
    .sort({ createdAt: -1 })
    .limit(20);

    res.json({ requests });

  } catch (error) {
    console.error('Get urgent requests error:', error);
    res.status(500).json({ message: 'Server error while fetching urgent requests' });
  }
});

/**
 * @route   GET /api/requests/:id
 * @desc    Get a specific request
 * @access  Public
 */
router.get('/:id',
  commonValidators.mongoId,
  handleValidationErrors,
  async (req, res) => {
    try {
      const request = await Request.findById(req.params.id)
        .populate('user', 'name email role');

      if (!request) {
        return res.status(404).json({ message: 'Request not found' });
      }

      res.json({ request });

    } catch (error) {
      console.error('Get request error:', error);
      res.status(500).json({ message: 'Server error while fetching request' });
    }
  }
);

/**
 * @route   PATCH /api/requests/:id
 * @desc    Update a request (only by owner or admin)
 * @access  Private
 */
router.patch('/:id',
  auth(true),
  requestValidators.update,
  handleValidationErrors,
  async (req, res) => {
    try {
      const request = await Request.findById(req.params.id);

      if (!request) {
        return res.status(404).json({ message: 'Request not found' });
      }

      // Check ownership or admin role
      if (String(request.user) !== req.user.id && req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Forbidden' });
      }

      Object.assign(request, req.body);
      await request.save();

      res.json({
        message: 'Request updated successfully',
        request
      });

    } catch (error) {
      console.error('Update request error:', error);
      res.status(500).json({ message: 'Server error while updating request' });
    }
  }
);

module.exports = router;
