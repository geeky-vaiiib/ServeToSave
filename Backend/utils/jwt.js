const jwt = require('jsonwebtoken');

const crypto = require('crypto');

// Generate secure secrets if not provided in environment
const generateSecret = () => crypto.randomBytes(64).toString('hex');

const ACCESS_SECRET = process.env.JWT_SECRET || generateSecret();
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || generateSecret();
const ACCESS_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '15m'; // Shorter expiry for access tokens
const REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

/**
 * Generate access token
 * @param {Object} payload - User payload { id, role }
 * @returns {string} JWT token
 */
function generateAccessToken(payload) {
  return jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: ACCESS_EXPIRES_IN
  });
}

/**
 * Generate refresh token
 * @param {Object} payload - User payload { id, role }
 * @returns {string} JWT refresh token
 */
function generateRefreshToken(payload) {
  return jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: REFRESH_EXPIRES_IN
  });
}

/**
 * Verify access token
 * @param {string} token - JWT token
 * @returns {Object} Decoded payload
 */
function verifyAccessToken(token) {
  return jwt.verify(token, ACCESS_SECRET);
}

/**
 * Verify refresh token
 * @param {string} token - JWT refresh token
 * @returns {Object} Decoded payload
 */
function verifyRefreshToken(token) {
  return jwt.verify(token, REFRESH_SECRET);
}

/**
 * Generate both access and refresh tokens
 * @param {Object} payload - User payload { id, role }
 * @returns {Object} { accessToken, refreshToken }
 */
function generateTokens(payload) {
  return {
    accessToken: generateAccessToken(payload),
    refreshToken: generateRefreshToken(payload)
  };
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  generateTokens
};
