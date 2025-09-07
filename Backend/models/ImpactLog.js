const { Schema, model, Types } = require('mongoose');

const ImpactLogSchema = new Schema({
  entity: { 
    type: String, 
    enum: ['donation', 'request'], 
    required: true,
    index: true 
  },
  entityId: { 
    type: Types.ObjectId, 
    required: true,
    index: true 
  },
  city: { 
    type: String,
    index: true 
  },
  meals: { 
    type: Number, 
    required: true,
    min: 0 
  },
  kgSaved: { 
    type: Number,
    min: 0 
  },
  co2SavedKg: { 
    type: Number,
    min: 0 
  },
  timestamp: { 
    type: Date, 
    default: Date.now,
    index: true 
  }
}, { timestamps: true });

// Compound indexes for efficient queries
ImpactLogSchema.index({ entity: 1, timestamp: -1 });
ImpactLogSchema.index({ city: 1, timestamp: -1 });
ImpactLogSchema.index({ timestamp: -1, entity: 1 });

module.exports = model('ImpactLog', ImpactLogSchema);
