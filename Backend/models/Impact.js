const mongoose = require('mongoose');

const ImpactSchema = new mongoose.Schema({
  // Time Period
  period: {
    type: {
      type: String,
      required: true,
      enum: ['daily', 'weekly', 'monthly', 'yearly']
    },
    date: {
      type: Date,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      min: 1,
      max: 12
    },
    week: {
      type: Number,
      min: 1,
      max: 53
    },
    day: {
      type: Number,
      min: 1,
      max: 31
    }
  },
  
  // Geographic Scope
  geography: {
    level: {
      type: String,
      enum: ['national', 'state', 'city', 'pincode'],
      default: 'national'
    },
    state: String,
    city: String,
    pincode: String
  },
  
  // Food Impact Metrics
  foodMetrics: {
    totalDonations: {
      type: Number,
      default: 0
    },
    totalRequests: {
      type: Number,
      default: 0
    },
    successfulMatches: {
      type: Number,
      default: 0
    },
    mealsRedistributed: {
      type: Number,
      default: 0
    },
    foodWeightKg: {
      type: Number,
      default: 0
    },
    foodTypes: {
      cooked: { type: Number, default: 0 },
      raw: { type: Number, default: 0 },
      packaged: { type: Number, default: 0 },
      fruits: { type: Number, default: 0 },
      bakery: { type: Number, default: 0 }
    },
    dietTypes: {
      vegetarian: { type: Number, default: 0 },
      nonVegetarian: { type: Number, default: 0 },
      vegan: { type: Number, default: 0 }
    }
  },
  
  // Environmental Impact
  environmentalMetrics: {
    co2SavedKg: {
      type: Number,
      default: 0
    },
    waterSavedLiters: {
      type: Number,
      default: 0
    },
    landSavedSqm: {
      type: Number,
      default: 0
    },
    wasteReducedKg: {
      type: Number,
      default: 0
    }
  },
  
  // Social Impact
  socialMetrics: {
    peopleServed: {
      type: Number,
      default: 0
    },
    ngosParticipated: {
      type: Number,
      default: 0
    },
    donorsParticipated: {
      type: Number,
      default: 0
    },
    newRegistrations: {
      donors: { type: Number, default: 0 },
      ngos: { type: Number, default: 0 },
      volunteers: { type: Number, default: 0 }
    },
    demographics: {
      children: { type: Number, default: 0 },
      adults: { type: Number, default: 0 },
      elderly: { type: Number, default: 0 }
    },
    beneficiaryCategories: {
      homeless: { type: Number, default: 0 },
      lowIncome: { type: Number, default: 0 },
      disasterRelief: { type: Number, default: 0 },
      educational: { type: Number, default: 0 },
      healthcare: { type: Number, default: 0 },
      other: { type: Number, default: 0 }
    }
  },
  
  // Economic Impact
  economicMetrics: {
    totalValueSaved: {
      type: Number,
      default: 0
    },
    logisticsCostSaved: {
      type: Number,
      default: 0
    },
    subscriptionRevenue: {
      type: Number,
      default: 0
    },
    averageDonationValue: {
      type: Number,
      default: 0
    }
  },
  
  // Operational Metrics
  operationalMetrics: {
    averageMatchTime: {
      type: Number,
      default: 0 // in minutes
    },
    averagePickupTime: {
      type: Number,
      default: 0 // in minutes
    },
    successRate: {
      type: Number,
      default: 0 // percentage
    },
    userSatisfactionScore: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    platformUsage: {
      totalSessions: { type: Number, default: 0 },
      averageSessionDuration: { type: Number, default: 0 },
      mobileUsage: { type: Number, default: 0 },
      webUsage: { type: Number, default: 0 }
    }
  },
  
  // Donor Breakdown
  donorMetrics: {
    byType: {
      individual: { type: Number, default: 0 },
      restaurant: { type: Number, default: 0 },
      hotel: { type: Number, default: 0 },
      corporate: { type: Number, default: 0 },
      event: { type: Number, default: 0 },
      other: { type: Number, default: 0 }
    },
    bySubscription: {
      basic: { type: Number, default: 0 },
      pro: { type: Number, default: 0 },
      corporate: { type: Number, default: 0 }
    },
    recurringDonors: {
      type: Number,
      default: 0
    }
  },
  
  // Calculated Fields
  calculatedMetrics: {
    impactScore: {
      type: Number,
      default: 0
    },
    growthRate: {
      type: Number,
      default: 0
    },
    efficiency: {
      type: Number,
      default: 0
    }
  },
  
  // Metadata
  metadata: {
    calculatedAt: {
      type: Date,
      default: Date.now
    },
    version: {
      type: String,
      default: '1.0'
    },
    dataSource: {
      type: String,
      enum: ['automated', 'manual', 'imported'],
      default: 'automated'
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for efficient querying
ImpactSchema.index({ 'period.type': 1, 'period.date': -1 });
ImpactSchema.index({ 'geography.level': 1, 'geography.state': 1, 'geography.city': 1 });
ImpactSchema.index({ 'period.year': 1, 'period.month': 1 });

// Virtual for total impact score
ImpactSchema.virtual('totalImpactScore').get(function() {
  const foodScore = this.foodMetrics.mealsRedistributed * 0.4;
  const envScore = this.environmentalMetrics.co2SavedKg * 0.3;
  const socialScore = this.socialMetrics.peopleServed * 0.3;
  return Math.round(foodScore + envScore + socialScore);
});

// Static method to get aggregated impact for a period
ImpactSchema.statics.getAggregatedImpact = function(startDate, endDate, geography = {}) {
  const matchConditions = {
    'period.date': {
      $gte: startDate,
      $lte: endDate
    }
  };
  
  if (geography.state) matchConditions['geography.state'] = geography.state;
  if (geography.city) matchConditions['geography.city'] = geography.city;
  
  return this.aggregate([
    { $match: matchConditions },
    {
      $group: {
        _id: null,
        totalMeals: { $sum: '$foodMetrics.mealsRedistributed' },
        totalCO2Saved: { $sum: '$environmentalMetrics.co2SavedKg' },
        totalWaterSaved: { $sum: '$environmentalMetrics.waterSavedLiters' },
        totalPeopleServed: { $sum: '$socialMetrics.peopleServed' },
        totalDonations: { $sum: '$foodMetrics.totalDonations' },
        totalRequests: { $sum: '$foodMetrics.totalRequests' },
        avgSuccessRate: { $avg: '$operationalMetrics.successRate' }
      }
    }
  ]);
};

// Static method to get trends over time
ImpactSchema.statics.getTrends = function(period, count = 12) {
  return this.find({ 'period.type': period })
    .sort({ 'period.date': -1 })
    .limit(count)
    .select('period foodMetrics environmentalMetrics socialMetrics');
};

module.exports = mongoose.model('Impact', ImpactSchema);
