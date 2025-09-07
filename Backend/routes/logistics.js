const express = require('express');
const { body, query, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const router = express.Router();

// Logistics pricing configuration
const LOGISTICS_PRICING = {
  standard: {
    basePrice: 249,
    pricePerKm: 15,
    maxDistance: 10,
    estimatedTime: 240, // 4 hours in minutes
    features: ['Same-day pickup', 'Up to 10km distance', 'Temperature-maintained vehicles']
  },
  express: {
    basePrice: 399,
    pricePerKm: 25,
    maxDistance: 15,
    estimatedTime: 60, // 1 hour in minutes
    features: ['Urgent pickup (within 1 hour)', 'Up to 15km distance', 'Temperature-maintained vehicles', 'Priority handling']
  },
  bulk: {
    basePrice: 0, // Custom pricing
    pricePerKm: 0,
    maxDistance: 100,
    estimatedTime: 0,
    features: ['Large quantity food transport', 'Multiple destinations', 'Refrigerated transport available', 'Dedicated logistics coordinator']
  }
};

// @route   GET /api/logistics/options
// @desc    Get available logistics options
// @access  Public
router.get('/options', async (req, res) => {
  try {
    const options = Object.keys(LOGISTICS_PRICING).map(key => ({
      type: key,
      name: key.charAt(0).toUpperCase() + key.slice(1),
      ...LOGISTICS_PRICING[key]
    }));

    res.json({ options });

  } catch (error) {
    console.error('Get logistics options error:', error);
    res.status(500).json({ message: 'Server error while fetching logistics options' });
  }
});

// @route   POST /api/logistics/quote
// @desc    Get logistics pricing quote
// @access  Public
router.post('/quote', [
  body('pickupLocation').notEmpty().withMessage('Pickup location is required'),
  body('deliveryLocation').notEmpty().withMessage('Delivery location is required'),
  body('logisticType').isIn(['standard', 'express', 'bulk']).withMessage('Invalid logistic type'),
  body('quantity').optional().isInt({ min: 1 }).withMessage('Quantity must be a positive integer'),
  body('weight').optional().isFloat({ min: 0.1 }).withMessage('Weight must be a positive number'),
  body('urgency').optional().isIn(['high', 'medium', 'low']).withMessage('Invalid urgency level')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const { 
      pickupLocation, 
      deliveryLocation, 
      logisticType, 
      quantity = 1, 
      weight = 1,
      urgency = 'medium'
    } = req.body;

    // Calculate distance (mock calculation - in real app, use Google Maps API)
    const distance = calculateDistance(pickupLocation, deliveryLocation);
    
    const pricing = LOGISTICS_PRICING[logisticType];
    
    if (!pricing) {
      return res.status(400).json({ message: 'Invalid logistic type' });
    }

    let quote = {};

    if (logisticType === 'bulk') {
      // Custom pricing for bulk orders
      quote = {
        type: logisticType,
        distance,
        estimatedPrice: 'Custom pricing - Contact for quote',
        estimatedTime: 'Varies based on requirements',
        features: pricing.features,
        contactRequired: true
      };
    } else {
      // Calculate price for standard and express
      const basePrice = pricing.basePrice;
      const distancePrice = Math.max(0, distance - 5) * pricing.pricePerKm; // First 5km included
      const quantityMultiplier = Math.ceil(quantity / 20); // Additional charge for large quantities
      const urgencyMultiplier = urgency === 'high' ? 1.2 : urgency === 'low' ? 0.9 : 1;
      
      const totalPrice = Math.round((basePrice + distancePrice) * quantityMultiplier * urgencyMultiplier);
      
      quote = {
        type: logisticType,
        distance,
        basePrice,
        distancePrice,
        quantityMultiplier,
        urgencyMultiplier,
        totalPrice,
        estimatedTime: pricing.estimatedTime,
        features: pricing.features,
        breakdown: {
          basePrice: `₹${basePrice}`,
          distanceCharge: `₹${distancePrice} (${Math.max(0, distance - 5)}km × ₹${pricing.pricePerKm})`,
          quantityMultiplier: `×${quantityMultiplier} (for ${quantity} servings)`,
          urgencyMultiplier: `×${urgencyMultiplier} (${urgency} priority)`
        }
      };
    }

    res.json({ quote });

  } catch (error) {
    console.error('Get logistics quote error:', error);
    res.status(500).json({ message: 'Server error while calculating quote' });
  }
});

// @route   POST /api/logistics/book
// @desc    Book logistics service
// @access  Private
router.post('/book', auth(true), [
  body('donationId').isMongoId().withMessage('Valid donation ID is required'),
  body('logisticType').isIn(['standard', 'express', 'bulk']).withMessage('Invalid logistic type'),
  body('pickupTime').isISO8601().withMessage('Valid pickup time is required'),
  body('specialInstructions').optional().isLength({ max: 500 }).withMessage('Special instructions too long')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const { 
      donationId, 
      logisticType, 
      pickupTime, 
      specialInstructions,
      contactPhone 
    } = req.body;

    // In a real application, this would:
    // 1. Verify the donation exists and belongs to the user
    // 2. Create a logistics booking record
    // 3. Integrate with actual logistics partners
    // 4. Send notifications to relevant parties

    const booking = {
      id: generateBookingId(),
      donationId,
      userId: req.user.id,
      logisticType,
      pickupTime: new Date(pickupTime),
      specialInstructions,
      contactPhone: contactPhone || req.user.phone,
      status: 'confirmed',
      estimatedPickupTime: new Date(pickupTime),
      trackingNumber: generateTrackingNumber(),
      createdAt: new Date()
    };

    // Mock response - in real app, save to database
    res.status(201).json({
      message: 'Logistics booking confirmed',
      booking,
      nextSteps: [
        'You will receive a confirmation SMS shortly',
        'Our logistics partner will contact you 30 minutes before pickup',
        'Please keep the food ready at the specified pickup time',
        'You can track the pickup status using the tracking number'
      ]
    });

  } catch (error) {
    console.error('Book logistics error:', error);
    res.status(500).json({ message: 'Server error while booking logistics' });
  }
});

// @route   GET /api/logistics/track/:trackingNumber
// @desc    Track logistics booking
// @access  Public
router.get('/track/:trackingNumber', async (req, res) => {
  try {
    const { trackingNumber } = req.params;

    // Mock tracking data - in real app, fetch from database/logistics partner API
    const trackingData = {
      trackingNumber,
      status: 'in_transit',
      currentLocation: 'En route to pickup location',
      estimatedArrival: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes from now
      timeline: [
        {
          status: 'booking_confirmed',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          description: 'Booking confirmed and assigned to logistics partner'
        },
        {
          status: 'driver_assigned',
          timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
          description: 'Driver assigned and notified'
        },
        {
          status: 'en_route_pickup',
          timestamp: new Date(Date.now() - 30 * 60 * 1000),
          description: 'Driver en route to pickup location'
        }
      ],
      driver: {
        name: 'Rajesh Kumar',
        phone: '+91 98765 43210',
        vehicle: 'Temperature-controlled van (MH 01 AB 1234)'
      }
    };

    res.json({ tracking: trackingData });

  } catch (error) {
    console.error('Track logistics error:', error);
    res.status(500).json({ message: 'Server error while tracking logistics' });
  }
});

// @route   GET /api/logistics/user/bookings
// @desc    Get user's logistics bookings
// @access  Private
router.get('/user/bookings', auth(true), async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // Mock user bookings - in real app, fetch from database
    const bookings = [
      {
        id: 'LB001',
        donationId: '507f1f77bcf86cd799439011',
        logisticType: 'express',
        status: 'completed',
        pickupTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
        completedAt: new Date(Date.now() - 22 * 60 * 60 * 1000),
        trackingNumber: 'TRK001',
        price: 399
      },
      {
        id: 'LB002',
        donationId: '507f1f77bcf86cd799439012',
        logisticType: 'standard',
        status: 'in_progress',
        pickupTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
        trackingNumber: 'TRK002',
        price: 249
      }
    ];

    res.json({
      bookings,
      pagination: {
        current: page,
        pages: 1,
        total: bookings.length,
        hasNext: false,
        hasPrev: false
      }
    });

  } catch (error) {
    console.error('Get user bookings error:', error);
    res.status(500).json({ message: 'Server error while fetching bookings' });
  }
});

// @route   POST /api/logistics/feedback
// @desc    Submit feedback for logistics service
// @access  Private
router.post('/feedback', auth(true), [
  body('bookingId').notEmpty().withMessage('Booking ID is required'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  body('comment').optional().isLength({ max: 1000 }).withMessage('Comment too long')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const { bookingId, rating, comment } = req.body;

    // Mock feedback submission - in real app, save to database
    const feedback = {
      bookingId,
      userId: req.user.id,
      rating,
      comment,
      submittedAt: new Date()
    };

    res.json({
      message: 'Feedback submitted successfully',
      feedback
    });

  } catch (error) {
    console.error('Submit feedback error:', error);
    res.status(500).json({ message: 'Server error while submitting feedback' });
  }
});

// Helper functions
function calculateDistance(pickup, delivery) {
  // Mock distance calculation - in real app, use Google Maps Distance Matrix API
  return Math.floor(Math.random() * 15) + 5; // Random distance between 5-20 km
}

function generateBookingId() {
  return 'LB' + Date.now().toString().slice(-6);
}

function generateTrackingNumber() {
  return 'TRK' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

module.exports = router;
