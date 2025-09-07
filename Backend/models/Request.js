const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  // Requester Information
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // Allow anonymous requests
  },
  requesterInfo: {
    organizationName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200
    },
    organizationType: {
      type: String,
      required: true,
      enum: ['ngo', 'shelter', 'community_kitchen', 'school', 'religious', 'other']
    },
    registrationNumber: {
      type: String,
      trim: true,
      maxlength: 50
    },
    contactPerson: {
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
      }
    }
  },
  
  // Food Requirements
  foodRequirements: {
    type: {
      type: String,
      required: true,
      enum: ['cooked', 'raw', 'packaged', 'any']
    },
    dietType: {
      type: String,
      enum: ['vegetarian', 'non-vegetarian', 'vegan', 'any'],
      default: 'any'
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    unit: {
      type: String,
      enum: ['people', 'kg', 'portions', 'plates'],
      default: 'people'
    },
    urgency: {
      type: String,
      required: true,
      enum: ['high', 'medium', 'low']
    },
    neededBy: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      maxlength: 1000
    },
    specialRequirements: {
      type: String,
      maxlength: 500
    }
  },
  
  // Delivery Location
  deliveryLocation: {
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
  
  // Beneficiary Information
  beneficiaries: {
    totalCount: {
      type: Number,
      required: true,
      min: 1
    },
    demographics: {
      children: { type: Number, default: 0 },
      adults: { type: Number, default: 0 },
      elderly: { type: Number, default: 0 }
    },
    category: {
      type: String,
      enum: ['homeless', 'low_income', 'disaster_relief', 'educational', 'healthcare', 'other'],
      required: true
    },
    description: {
      type: String,
      maxlength: 500
    }
  },
  
  // Status and Matching
  status: {
    type: String,
    enum: ['pending', 'matched', 'in_transit', 'fulfilled', 'cancelled', 'expired'],
    default: 'pending'
  },
  matchedDonations: [{
    donation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Donation'
    },
    quantity: Number,
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'delivered'],
      default: 'pending'
    }
  }],
  
  // Recurring Requests
  isRecurring: {
    type: Boolean,
    default: false
  },
  frequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly'],
    required: function() { return this.isRecurring; }
  },
  nextRequestDate: {
    type: Date,
    required: function() { return this.isRecurring; }
  },
  
  // Verification and Trust
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationDocuments: [{
    filename: String,
    path: String,
    mimetype: String,
    size: Number,
    type: {
      type: String,
      enum: ['registration', 'tax_exemption', 'identity', 'other']
    }
  }],
  
  // Timestamps
  timestamps: {
    created: {
      type: Date,
      default: Date.now
    },
    matched: Date,
    fulfilled: Date
  },
  
  // Feedback and Rating
  feedback: {
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      maxlength: 1000
    },
    photos: [{
      filename: String,
      path: String,
      mimetype: String,
      size: Number
    }]
  },
  
  // Additional metadata
  metadata: {
    source: {
      type: String,
      enum: ['web', 'mobile', 'api'],
      default: 'web'
    },
    priority: {
      type: Number,
      default: 0,
      min: 0,
      max: 10
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
RequestSchema.index({ 'deliveryLocation.coordinates': '2dsphere' });
RequestSchema.index({ status: 1, 'foodRequirements.urgency': 1, 'timestamps.created': -1 });
RequestSchema.index({ 'requesterInfo.contactPerson.email': 1 });
RequestSchema.index({ 'foodRequirements.neededBy': 1 });
RequestSchema.index({ requester: 1, 'timestamps.created': -1 });
RequestSchema.index({ isVerified: 1, status: 1 });

// Virtual for time remaining until needed
RequestSchema.virtual('timeUntilNeeded').get(function() {
  if (!this.foodRequirements.neededBy) return null;
  const now = new Date();
  const needed = new Date(this.foodRequirements.neededBy);
  return Math.max(0, needed - now);
});

// Virtual for request age
RequestSchema.virtual('age').get(function() {
  const now = new Date();
  const created = new Date(this.timestamps.created);
  return now - created;
});

// Virtual for total matched quantity
RequestSchema.virtual('totalMatchedQuantity').get(function() {
  return this.matchedDonations.reduce((total, match) => {
    return total + (match.quantity || 0);
  }, 0);
});

// Virtual for remaining quantity needed
RequestSchema.virtual('remainingQuantity').get(function() {
  return Math.max(0, this.foodRequirements.quantity - this.totalMatchedQuantity);
});

// Static method to find requests near a location
RequestSchema.statics.findNearby = function(latitude, longitude, maxDistance = 10000) {
  return this.find({
    'deliveryLocation.coordinates': {
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

// Static method to find urgent requests
RequestSchema.statics.findUrgent = function() {
  const now = new Date();
  const urgentThreshold = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours
  
  return this.find({
    status: 'pending',
    $or: [
      { 'foodRequirements.urgency': 'high' },
      { 'foodRequirements.neededBy': { $lte: urgentThreshold } }
    ]
  }).sort({ 'foodRequirements.neededBy': 1 });
};

module.exports = mongoose.model('Request', RequestSchema);
