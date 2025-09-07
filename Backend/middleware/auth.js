const User = require('../models/User');
const { verifyAccessToken } = require('../utils/jwt');

/**
 * Authentication middleware
 * @param {boolean} required - Whether authentication is required
 */
const auth = (required = true) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.header('Authorization');
      const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;

      if (!token) {
        if (required) {
          return res.status(401).json({ message: 'Access token required' });
        }
        return next();
      }

      try {
        const payload = verifyAccessToken(token);
        const user = await User.findById(payload.id).select('-password');

        if (!user) {
          return res.status(401).json({ message: 'User not found' });
        }

        req.user = { id: user._id, role: user.role, ...user.toObject() };
        next();
      } catch (tokenError) {
        if (required) {
          return res.status(401).json({ message: 'Invalid or expired token' });
        }
        next();
      }

    } catch (error) {
      console.error('Auth middleware error:', error);
      if (required) {
        res.status(500).json({ message: 'Authentication error' });
      } else {
        next();
      }
    }
  };
};

module.exports = auth;
