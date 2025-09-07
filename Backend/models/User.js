const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  // Basic Information
  personalInfo: {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    phone: {
      type: String,
      required: true,
      match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
    },
    profileImage: {
      filename: String,
      path: String,
      mimetype: String,
      size: Number
    }
  },
  
  // Authentication
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false // Don't include password in queries by default
  },
  role: {
    type: String,
    required: true,
    enum: ['donor', 'ngo', 'admin', 'volunteer'],
    default: 'donor'
  },
  
  // Account Status
  isVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  verificationToken: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  
  // Organization Information (for NGOs and businesses)
  organizationInfo: {
    name: {
      type: String,
      trim: true,
      maxlength: 200
    },
    type: {
      type: String,
      enum: ['ngo', 'restaurant', 'hotel', 'catering', 'corporate', 'community_kitchen', 'other']
    },
    registrationNumber: {
      type: String,
      trim: true,
      maxlength: 50
    },
    website: {
      type: String,
      trim: true,
      maxlength: 200
    },
    description: {
      type: String,
      maxlength: 1000
    },
    establishedYear: {
      type: Number,
      min: 1800,
      max: new Date().getFullYear()
    },
    employeeCount: {
      type: String,
      enum: ['1-10', '11-50', '51-200', '201-500', '500+']
    }
  },
  
  // Location Information
  address: {
    street: {
      type: String,
      maxlength: 200
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
    }
  },
  
  // Subscription and Plan
  subscription: {
    plan: {
      type: String,
      enum: ['basic', 'pro', 'corporate'],
      default: 'basic'
    },
    startDate: {
      type: Date,
      default: Date.now
    },
    endDate: Date,
    isActive: {
      type: Boolean,
      default: true
    },
    features: [{
      name: String,
      enabled: Boolean
    }]
  },
  
  // Verification Documents
  verificationDocuments: [{
    type: {
      type: String,
      enum: ['government_id', 'organization_registration', 'tax_exemption', 'food_license', 'other']
    },
    filename: String,
    path: String,
    mimetype: String,
    size: Number,
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    },
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  
  // Activity and Statistics
  stats: {
    totalDonations: {
      type: Number,
      default: 0
    },
    totalRequests: {
      type: Number,
      default: 0
    },
    mealsContributed: {
      type: Number,
      default: 0
    },
    impactScore: {
      type: Number,
      default: 0
    },
    lastActiveAt: {
      type: Date,
      default: Date.now
    }
  },
  
  // Preferences and Settings
  preferences: {
    notifications: {
      email: {
        type: Boolean,
        default: true
      },
      sms: {
        type: Boolean,
        default: false
      },
      push: {
        type: Boolean,
        default: true
      }
    },
    privacy: {
      showProfile: {
        type: Boolean,
        default: true
      },
      showStats: {
        type: Boolean,
        default: true
      }
    },
    matching: {
      maxDistance: {
        type: Number,
        default: 10, // km
        min: 1,
        max: 100
      },
      autoAccept: {
        type: Boolean,
        default: false
      }
    }
  },
  
  // Social and Reviews
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  reviews: [{
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      maxlength: 500
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true,
  toJSON: { 
    virtuals: true,
    transform: function(doc, ret) {
      delete ret.password;
      delete ret.verificationToken;
      delete ret.passwordResetToken;
      return ret;
    }
  },
  toObject: { virtuals: true }
});

// Indexes
UserSchema.index({ 'personalInfo.email': 1 }, { unique: true });
UserSchema.index({ role: 1, isVerified: 1 });
UserSchema.index({ 'address.coordinates': '2dsphere' });
UserSchema.index({ 'organizationInfo.type': 1 });

// Virtual for full name
UserSchema.virtual('fullName').get(function() {
  return `${this.personalInfo.firstName} ${this.personalInfo.lastName}`;
});

// Virtual for organization display name
UserSchema.virtual('displayName').get(function() {
  if (this.organizationInfo?.name) {
    return this.organizationInfo.name;
  }
  return this.fullName;
});

// Pre-save middleware to hash password
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to generate JWT token
UserSchema.methods.generateAuthToken = function() {
  return jwt.sign(
    { 
      id: this._id, 
      email: this.personalInfo.email, 
      role: this.role 
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '7d' }
  );
};

// Method to generate verification token
UserSchema.methods.generateVerificationToken = function() {
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  this.verificationToken = token;
  return token;
};

// Static method to find verified users by role
UserSchema.statics.findVerifiedByRole = function(role) {
  return this.find({ role, isVerified: true, isActive: true });
};

module.exports = mongoose.model('User', UserSchema);
