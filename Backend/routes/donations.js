const express = require('express');
const { body, validationResult, query } = require('express-validator');
const multer = require('multer');
const path = require('path');
const Donation = require('../models/Donation');
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const { donationValidators, handleValidationErrors } = require('../middleware/validators');
const { calculateImpactMetrics, extractCityFromAddress } = require('../utils/impactMath');
const ImpactLog = require('../models/ImpactLog');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

const uploadFields = upload.fields([
  { name: 'images', maxCount: 5 },
  { name: 'certificate', maxCount: 1 }
]);

const router = express.Router();

// Validation middleware
const validateDonation = [
  body('donorInfo.name').trim().isLength({ min: 2, max: 100 }).withMessage('Donor name is required'),
  body('donorInfo.email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('donorInfo.phone').matches(/^[\+]?[1-9][\d]{0,15}$/).withMessage('Valid phone number is required'),
  body('donorInfo.businessType').optional().isIn(['restaurant', 'hotel', 'catering', 'corporate', 'event', 'individual', 'other']),
  body('foodDetails.type').isIn(['cooked', 'raw', 'packaged', 'fruits', 'bakery']).withMessage('Invalid food type'),
  body('foodDetails.dietType').isIn(['vegetarian', 'non-vegetarian', 'vegan']).withMessage('Invalid diet type'),
  body('foodDetails.totalQuantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
  body('foodDetails.expiryTime').isISO8601().withMessage('Valid expiry time is required'),
  body('location.address').trim().isLength({ min: 10 }).withMessage('Complete address is required'),
  body('location.city').trim().isLength({ min: 2 }).withMessage('City is required'),
  body('location.state').trim().isLength({ min: 2 }).withMessage('State is required'),
  body('location.pincode').matches(/^[1-9][0-9]{5}$/).withMessage('Valid pincode is required'),
  body('pickup.preferredTime').isISO8601().withMessage('Valid pickup time is required'),
  body('pickup.logisticOption').optional().isIn(['self', 'standard', 'express', 'bulk'])
];

/**
 * @route   POST /api/donations
 * @desc    Create a new donation
 * @access  Private
 */
router.post('/',
  auth(true),
  uploadFields,
  donationValidators.create,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { title, foodType, quantity, pickupAddress, location } = req.body;

      const donationData = {
        user: req.user.id,
        title,
        foodType,
        quantity,
        pickupAddress,
        location
      };

      // Handle uploaded files
      if (req.files) {
        if (req.files.images) {
          donationData.images = req.files.images.map(file => `/uploads/${file.filename}`);
        }
        if (req.files.certificate) {
          donationData.certificate = `/uploads/${req.files.certificate[0].filename}`;
        }
      }

      const donation = new Donation(donationData);
      await donation.save();

      // Create impact log entry
      const city = extractCityFromAddress(pickupAddress);
      const impact = calculateImpactMetrics({ foodType, quantity });

      await ImpactLog.create({
        entity: 'donation',
        entityId: donation._id,
        city,
        meals: impact.meals,
        kgSaved: impact.kgSaved,
        co2SavedKg: impact.co2SavedKg
      });

      res.status(201).json({
        message: 'Donation created successfully',
        donation
      });

    } catch (error) {
      console.error('Create donation error:', error);
      res.status(500).json({ message: 'Server error while creating donation' });
    }
  }
);

/**
 * @route   GET /api/donations
 * @desc    Get all donations with filtering and pagination
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const { status, foodType, limit = 50, skip = 0 } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (foodType) filter.foodType = foodType;

    const donations = await Donation.find(filter)
      .populate('user', 'name email role')
      .sort({ createdAt: -1 })
      .skip(Number(skip))
      .limit(Number(limit));

    const total = await Donation.countDocuments(filter);

    res.json({
      donations,
      pagination: {
        total,
        limit: Number(limit),
        skip: Number(skip),
        hasMore: total > Number(skip) + Number(limit)
      }
    });

  } catch (error) {
    console.error('Get donations error:', error);
    res.status(500).json({ message: 'Server error while fetching donations' });
  }
});

/**
 * @route   GET /api/donations/nearby
 * @desc    Get donations near a location
 * @access  Public
 */
router.get('/nearby', async (req, res) => {
  try {
    const { lat, lng, maxDistance = 10000 } = req.query; // maxDistance in meters

    if (!lat || !lng) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    const donations = await Donation.aggregate([
      {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          distanceField: 'distance',
          maxDistance: parseInt(maxDistance),
          spherical: true,
          query: { status: 'open' }
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'user',
          pipeline: [{ $project: { name: 1, email: 1, role: 1 } }]
        }
      },
      {
        $unwind: '$user'
      },
      {
        $limit: 50
      }
    ]);

    res.json({ donations });

  } catch (error) {
    console.error('Get nearby donations error:', error);
    res.status(500).json({ message: 'Server error while fetching nearby donations' });
  }
});

/**
 * @route   GET /api/donations/:id
 * @desc    Get a specific donation
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id)
      .populate('user', 'name email role');

    if (!donation) {
      return res.status(404).json({ message: 'Donation not found' });
    }

    res.json({ donation });

  } catch (error) {
    console.error('Get donation error:', error);
    res.status(500).json({ message: 'Server error while fetching donation' });
  }
});

/**
 * @route   PATCH /api/donations/:id
 * @desc    Update a donation (only by owner or admin)
 * @access  Private
 */
router.patch('/:id',
  auth(true),
  async (req, res) => {
    try {
      const donation = await Donation.findById(req.params.id);

      if (!donation) {
        return res.status(404).json({ message: 'Donation not found' });
      }

      // Check ownership or admin role
      if (String(donation.user) !== req.user.id && req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Forbidden' });
      }

      Object.assign(donation, req.body);
      await donation.save();

      res.json({
        message: 'Donation updated successfully',
        donation
      });

    } catch (error) {
      console.error('Update donation error:', error);
      res.status(500).json({ message: 'Server error while updating donation' });
    }
  }
);

module.exports = router;