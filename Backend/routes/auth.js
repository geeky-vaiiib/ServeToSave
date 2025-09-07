const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const auth = require('../middleware/auth');
const { generateTokens, verifyRefreshToken } = require('../utils/jwt');
const { authValidators, handleValidationErrors } = require('../middleware/validators');
const { authRateLimit, passwordResetRateLimit } = require('../middleware/rateLimit');

// Store refresh tokens in memory (in production, use Redis)
const refreshTokens = new Set();

/**
 * @route   POST /api/auth/signup
 * @desc    Register a new user
 * @access  Public
 */
router.post('/signup',
  authRateLimit,
  async (req, res) => {
    try {
      const { firstName, lastName, email, password, role } = req.body;

      // Basic validation
      if (!firstName || !lastName || !email || !password || !role) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists with this email' });
      }

      // Hash password
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create user
      const userData = {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role
      };

      const user = new User(userData);
      await user.save();

      // Generate tokens
      const payload = { id: user._id, role: user.role };
      const { accessToken, refreshToken } = generateTokens(payload);

      // Store refresh token
      refreshTokens.add(refreshToken);

      // Remove password from response
      const userResponse = user.toObject();
      delete userResponse.password;

      res.status(201).json({
        message: 'User created successfully',
        user: userResponse,
        token: accessToken,
        accessToken,
        refreshToken
      });

    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ message: 'Server error during signup' });
    }
  }
);

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 * @access  Public
 */
router.post('/login',
  authRateLimit,
  async (req, res) => {
    try {
      const { email, password } = req.body;

      // Basic validation
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      // Find user by email and include password field
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Check password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate tokens
      const payload = { id: user._id, role: user.role };
      const { accessToken, refreshToken } = generateTokens(payload);

      // Store refresh token
      refreshTokens.add(refreshToken);

      // Remove password from response
      const userResponse = user.toObject();
      delete userResponse.password;

      res.json({
        message: 'Login successful',
        user: userResponse,
        token: accessToken,
        accessToken,
        refreshToken
      });

    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error during login' });
    }
  }
);

/**
 * @route   GET /api/auth/me
 * @desc    Get current user
 * @access  Private
 */
router.get('/me', auth(true), async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });

  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Server error while fetching user' });
  }
});

/**
 * @route   PUT /api/auth/profile
 * @desc    Update user profile
 * @access  Private
 */
router.put('/profile',
  auth(true),
  authValidators.updateProfile,
  handleValidationErrors,
  async (req, res) => {
    try {
      const updates = req.body;
      const user = await User.findByIdAndUpdate(
        req.user.id,
        { $set: updates },
        { new: true, runValidators: true }
      ).select('-password');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({
        message: 'Profile updated successfully',
        user
      });

    } catch (error) {
      console.error('Update profile error:', error);
      res.status(500).json({ message: 'Server error while updating profile' });
    }
  }
);

/**
 * @route   POST /api/auth/refresh
 * @desc    Refresh access token
 * @access  Public
 */
router.post('/refresh', async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({ message: 'Refresh token required' });
    }

    if (!refreshTokens.has(refreshToken)) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }

    try {
      const payload = verifyRefreshToken(refreshToken);

      // Generate new tokens
      const newPayload = { id: payload.id, role: payload.role };
      const { accessToken, refreshToken: newRefreshToken } = generateTokens(newPayload);

      // Remove old refresh token and add new one
      refreshTokens.delete(refreshToken);
      refreshTokens.add(newRefreshToken);

      res.json({
        accessToken,
        refreshToken: newRefreshToken
      });

    } catch (error) {
      refreshTokens.delete(refreshToken);
      return res.status(403).json({ message: 'Invalid refresh token' });
    }

  } catch (error) {
    console.error('Refresh token error:', error);
    res.status(500).json({ message: 'Server error during token refresh' });
  }
});

/**
 * @route   POST /api/auth/logout
 * @desc    Logout user
 * @access  Private
 */
router.post('/logout', auth(true), async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (refreshToken) {
      refreshTokens.delete(refreshToken);
    }

    res.json({ message: 'Logged out successfully' });

  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ message: 'Server error during logout' });
  }
});

module.exports = router;
