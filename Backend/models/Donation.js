const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  // Donor Information
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // Allow anonymous donations
  },
  donorInfo: {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    phone: {
      type: String,
      required: true,
      match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
    },
    businessName: {
      type: String,
      trim: true,
      maxlength: 200
    },
    businessType: {
      type: String,
      enum: ['restaurant', 'hotel', 'catering', 'corporate', 'event', 'individual', 'other'],
      default: 'individual'
    }
  },

  // Food Details
  foodDetails: {
    type: {
      type: String,
      required: true,
      enum: ['cooked', 'raw', 'packaged', 'fruits', 'bakery']
    },
    dietType: {
      type: String,
      required: true,
      enum: ['vegetarian', 'non-vegetarian', 'vegan']
    },
    items: [{
      name: {
        type: String,
        required: true,
        trim: true
      },
      quantity: {
        type: String,
        required: true
      }
    }],
    totalQuantity: {
      type: Number,
      required: true,
      min: 1
    },
    unit: {
      type: String,
      enum: ['people', 'kg', 'portions', 'plates'],
      default: 'people'
    },
    expiryTime: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      maxlength: 1000
    },
    images: [{
      filename: String,
      path: String,
      mimetype: String,
      size: Number
    }],
    foodSafetyCert: {
      filename: String,
      path: String,
      mimetype: String,
      size: Number
    }
  },

  // Location Details
  location: {
    address: {
      type: String,
      required: true,
      maxlength: 500
    },
    coordinates: {
      latitude: {
        type: Number,
        min: -90,
        max: 90
      },
      longitude: {
        type: Number,
        min: -180,
        max: 180
      }
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true
    },
    pincode: {
      type: String,
      required: true,
      match: [/^[1-9][0-9]{5}$/, 'Please enter a valid pincode']
    }
  },

  // Pickup Details
  pickup: {
    preferredTime: {
      type: Date,
      required: true
    },
    timeWindow: {
      start: Date,
      end: Date
    },
    logisticOption: {
      type: String,
      enum: ['self', 'standard', 'express', 'bulk'],
      default: 'self'
    },
    specialInstructions: {
      type: String,
      maxlength: 500
    }
  },

  // Status and Matching
  status: {
    type: String,
    enum: ['pending', 'matched', 'picked_up', 'delivered', 'completed', 'cancelled', 'expired'],
    default: 'pending'
  },
  matchedRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Request'
  },
  assignedNGO: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  // Subscription and Frequency
  isRecurring: {
    type: Boolean,
    default: false
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly'],
    required: function() { return this.isRecurring; }
  },

  // Tracking and Analytics
  impactMetrics: {
    mealsServed: {
      type: Number,
      default: 0
    },
    co2Saved: {
      type: Number,
      default: 0
    },
    waterSaved: {
      type: Number,
      default: 0
    }
  },

  // Timestamps
  timestamps: {
    created: {
      type: Date,
      default: Date.now
    },
    matched: Date,
    pickedUp: Date,
    delivered: Date,
    completed: Date
  },

  // Additional metadata
  metadata: {
    source: {
      type: String,
      enum: ['web', 'mobile', 'api'],
      default: 'web'
    },
    version: {
      type: String,
      default: '1.0'
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
DonationSchema.index({ 'location.coordinates': '2dsphere' });
DonationSchema.index({ status: 1, 'timestamps.created': -1 });
DonationSchema.index({ 'donorInfo.email': 1 });
DonationSchema.index({ 'foodDetails.expiryTime': 1 });
DonationSchema.index({ donor: 1, 'timestamps.created': -1 });

// Virtual for time remaining until expiry
DonationSchema.virtual('timeUntilExpiry').get(function() {
  if (!this.foodDetails.expiryTime) return null;
  const now = new Date();
  const expiry = new Date(this.foodDetails.expiryTime);
  return Math.max(0, expiry - now);
});

// Virtual for donation age
DonationSchema.virtual('age').get(function() {
  const now = new Date();
  const created = new Date(this.timestamps.created);
  return now - created;
});

// Pre-save middleware to calculate impact metrics
DonationSchema.pre('save', function(next) {
  if (this.isModified('foodDetails.totalQuantity') || this.isNew) {
    // Rough calculations - can be refined based on research
    this.impactMetrics.mealsServed = this.foodDetails.totalQuantity;
    this.impactMetrics.co2Saved = this.foodDetails.totalQuantity * 2.5; // kg CO2 per meal
    this.impactMetrics.waterSaved = this.foodDetails.totalQuantity * 150; // liters per meal
  }
  next();
});

// Static method to find donations near a location
DonationSchema.statics.findNearby = function(latitude, longitude, maxDistance = 10000) {
  return this.find({
    'location.coordinates': {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [longitude, latitude]
        },
        $maxDistance: maxDistance
      }
    },
    status: { $in: ['pending', 'matched'] }
  });
};

module.exports = mongoose.model('Donation', DonationSchema);