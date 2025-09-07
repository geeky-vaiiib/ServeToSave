const { body, query, param, validationResult } = require('express-validator');

/**
 * Middleware to handle validation errors
 */
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation failed',
      errors: errors.array().map(err => ({
        param: err.param || err.path,
        msg: err.msg,
        value: err.value
      }))
    });
  }
  next();
};

/**
 * Auth validation rules
 */
const authValidators = {
  signup: [
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
      .withMessage('Password must contain uppercase, lowercase, number and special character'),
    body('name')
      .trim()
      .isLength({ min: 2, max: 100 })
      .withMessage('Name must be 2-100 characters'),
    body('role')
      .optional()
      .isIn(['donor', 'ngo', 'admin'])
      .withMessage('Invalid role'),
    body('organization.name')
      .optional()
      .trim()
      .isLength({ min: 2, max: 200 })
      .withMessage('Organization name must be 2-200 characters'),
    body('location.coordinates')
      .optional()
      .isArray({ min: 2, max: 2 })
      .withMessage('Coordinates must be [lng, lat] array'),
    body('location.coordinates.*')
      .optional()
      .isFloat({ min: -180, max: 180 })
      .withMessage('Invalid coordinates')
  ],

  login: [
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('password')
      .notEmpty()
      .withMessage('Password is required')
  ],

  updateProfile: [
    body('name')
      .optional()
      .trim()
      .isLength({ min: 2, max: 100 })
      .withMessage('Name must be 2-100 characters'),
    body('organization.name')
      .optional()
      .trim()
      .isLength({ min: 2, max: 200 })
      .withMessage('Organization name must be 2-200 characters'),
    body('location.coordinates')
      .optional()
      .isArray({ min: 2, max: 2 })
      .withMessage('Coordinates must be [lng, lat] array'),
    body('location.coordinates.*')
      .optional()
      .isFloat({ min: -180, max: 180 })
      .withMessage('Invalid coordinates')
  ]
};

/**
 * Donation validation rules
 */
const donationValidators = {
  create: [
    body('title')
      .optional()
      .trim()
      .isLength({ min: 3, max: 200 })
      .withMessage('Title must be 3-200 characters'),
    body('foodType')
      .trim()
      .notEmpty()
      .withMessage('Food type is required'),
    body('quantity.amount')
      .isFloat({ gt: 0 })
      .withMessage('Quantity amount must be greater than 0'),
    body('quantity.unit')
      .isIn(['kg', 'meals'])
      .withMessage('Unit must be kg or meals'),
    body('pickupAddress')
      .trim()
      .notEmpty()
      .withMessage('Pickup address is required'),
    body('location.coordinates')
      .isArray({ min: 2, max: 2 })
      .withMessage('Location coordinates required as [lng, lat]'),
    body('location.coordinates.*')
      .isFloat({ min: -180, max: 180 })
      .withMessage('Invalid coordinates'),
    body('readyBy')
      .optional()
      .isISO8601()
      .withMessage('Ready by must be valid date'),
    body('expiryAt')
      .optional()
      .isISO8601()
      .withMessage('Expiry must be valid date'),
    body('logistics')
      .optional()
      .isIn(['standard', 'express', 'bulk'])
      .withMessage('Invalid logistics option'),
    body('notes')
      .optional()
      .trim()
      .isLength({ max: 1000 })
      .withMessage('Notes must be less than 1000 characters')
  ],

  update: [
    param('id').isMongoId().withMessage('Invalid donation ID'),
    body('status')
      .optional()
      .isIn(['open', 'matched', 'picked', 'completed', 'cancelled'])
      .withMessage('Invalid status'),
    body('notes')
      .optional()
      .trim()
      .isLength({ max: 1000 })
      .withMessage('Notes must be less than 1000 characters')
  ],

  nearby: [
    query('lng')
      .isFloat({ min: -180, max: 180 })
      .withMessage('Valid longitude required'),
    query('lat')
      .isFloat({ min: -90, max: 90 })
      .withMessage('Valid latitude required'),
    query('km')
      .optional()
      .isFloat({ gt: 0, max: 100 })
      .withMessage('Distance must be 0-100 km')
  ]
};

/**
 * Request validation rules
 */
const requestValidators = {
  create: [
    body('needType')
      .trim()
      .notEmpty()
      .withMessage('Need type is required'),
    body('quantity.amount')
      .isFloat({ gt: 0 })
      .withMessage('Quantity amount must be greater than 0'),
    body('quantity.unit')
      .isIn(['kg', 'meals'])
      .withMessage('Unit must be kg or meals'),
    body('deliveryAddress')
      .trim()
      .notEmpty()
      .withMessage('Delivery address is required'),
    body('location.coordinates')
      .isArray({ min: 2, max: 2 })
      .withMessage('Location coordinates required as [lng, lat]'),
    body('location.coordinates.*')
      .isFloat({ min: -180, max: 180 })
      .withMessage('Invalid coordinates'),
    body('urgency')
      .optional()
      .isIn(['low', 'medium', 'high'])
      .withMessage('Invalid urgency level')
  ],

  update: [
    param('id').isMongoId().withMessage('Invalid request ID'),
    body('status')
      .optional()
      .isIn(['open', 'matched', 'fulfilled', 'cancelled'])
      .withMessage('Invalid status'),
    body('urgency')
      .optional()
      .isIn(['low', 'medium', 'high'])
      .withMessage('Invalid urgency level')
  ]
};

/**
 * Common validation rules
 */
const commonValidators = {
  mongoId: [
    param('id').isMongoId().withMessage('Invalid ID format')
  ],

  pagination: [
    query('limit')
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage('Limit must be 1-100'),
    query('skip')
      .optional()
      .isInt({ min: 0 })
      .withMessage('Skip must be non-negative')
  ]
};

module.exports = {
  handleValidationErrors,
  authValidators,
  donationValidators,
  requestValidators,
  commonValidators
};
