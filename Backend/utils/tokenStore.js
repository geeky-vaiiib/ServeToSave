const Redis = require('ioredis');
const { promisify } = require('util');

// Create Redis client
const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD,
  keyPrefix: 'auth:',
});

redis.on('error', (err) => console.error('Redis Client Error', err));
redis.on('connect', () => console.log('Connected to Redis'));

const REFRESH_TOKEN_TTL = 60 * 60 * 24 * 7; // 7 days in seconds

const tokenStore = {
  /**
   * Store refresh token with user ID
   * @param {string} token - Refresh token
   * @param {string} userId - User ID
   */
  async storeRefreshToken(token, userId) {
    await redis.setex(`refresh:${token}`, REFRESH_TOKEN_TTL, userId);
  },

  /**
   * Get user ID from refresh token
   * @param {string} token - Refresh token
   * @returns {Promise<string|null>} User ID if token exists
   */
  async getUserIdFromRefreshToken(token) {
    return await redis.get(`refresh:${token}`);
  },

  /**
   * Delete refresh token
   * @param {string} token - Refresh token
   */
  async deleteRefreshToken(token) {
    await redis.del(`refresh:${token}`);
  },

  /**
   * Delete all refresh tokens for a user
   * @param {string} userId - User ID
   */
  async deleteAllUserTokens(userId) {
    const keys = await redis.keys(`refresh:*`);
    const pipeline = redis.pipeline();
    
    for (const key of keys) {
      const storedUserId = await redis.get(key);
      if (storedUserId === userId) {
        pipeline.del(key);
      }
    }
    
    await pipeline.exec();
  },

  /**
   * Clean up expired tokens
   */
  async cleanupExpiredTokens() {
    // Redis handles TTL automatically
  }
};

module.exports = tokenStore;
