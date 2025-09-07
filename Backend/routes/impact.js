const router = require('express').Router();
const ImpactLog = require('../models/ImpactLog');
const Donation = require('../models/Donation');
const Request = require('../models/Request');
const User = require('../models/User');
const { handleValidationErrors } = require('../middleware/validators');

/**
 * @route   GET /api/impact/summary
 * @desc    Get high-level impact summary
 * @access  Public
 */
router.get('/summary', async (req, res) => {
  try {
    // Get aggregated impact from logs
    const impactStats = await ImpactLog.aggregate([
      {
        $group: {
          _id: null,
          totalMeals: { $sum: '$meals' },
          totalKgSaved: { $sum: '$kgSaved' },
          totalCO2Saved: { $sum: '$co2SavedKg' },
          totalDonations: {
            $sum: {
              $cond: [{ $eq: ['$entity', 'donation'] }, 1, 0]
            }
          },
          totalRequests: {
            $sum: {
              $cond: [{ $eq: ['$entity', 'request'] }, 1, 0]
            }
          }
        }
      }
    ]);

    // Get user counts
    const [totalUsers, verifiedNGOs, activeDonors] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ role: 'ngo', verified: true }),
      User.countDocuments({ role: 'donor' })
    ]);

    const stats = impactStats[0] || {};

    res.json({
      totalMealsRedistributed: stats.totalMeals || 0,
      totalDonations: stats.totalDonations || 0,
      totalRequests: stats.totalRequests || 0,
      totalUsers,
      verifiedNGOs,
      activeDonors,
      co2SavedKg: stats.totalCO2Saved || 0,
      waterSavedLiters: Math.round((stats.totalKgSaved || 0) * 1000), // Approximate
      successRate: stats.totalDonations > 0 ?
        Math.round((stats.totalRequests / stats.totalDonations) * 100) : 0
    });

  } catch (error) {
    console.error('Get impact summary error:', error);
    res.status(500).json({ message: 'Server error while fetching impact summary' });
  }
});

/**
 * @route   GET /api/impact/charts
 * @desc    Get data formatted for charts
 * @access  Public
 */
router.get('/charts', async (req, res) => {
  try {
    const { type = 'monthly', metric = 'meals' } = req.query;

    // Get last 12 periods of data
    const periods = 12;
    const now = new Date();
    const chartData = [];

    for (let i = periods - 1; i >= 0; i--) {
      let startDate, endDate, label;

      if (type === 'monthly') {
        startDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
        endDate = new Date(now.getFullYear(), now.getMonth() - i + 1, 0);
        label = startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      } else if (type === 'weekly') {
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - (i * 7));
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());

        startDate = new Date(weekStart);
        endDate = new Date(weekStart);
        endDate.setDate(endDate.getDate() + 6);
        label = `Week ${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
      } else {
        // daily
        startDate = new Date(now);
        startDate.setDate(now.getDate() - i);
        startDate.setHours(0, 0, 0, 0);

        endDate = new Date(startDate);
        endDate.setHours(23, 59, 59, 999);
        label = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      }

      // Get impact data for this period
      const periodData = await ImpactLog.aggregate([
        {
          $match: {
            timestamp: { $gte: startDate, $lte: endDate }
          }
        },
        {
          $group: {
            _id: null,
            meals: { $sum: '$meals' },
            donations: {
              $sum: {
                $cond: [{ $eq: ['$entity', 'donation'] }, 1, 0]
              }
            },
            requests: {
              $sum: {
                $cond: [{ $eq: ['$entity', 'request'] }, 1, 0]
              }
            },
            co2: { $sum: '$co2SavedKg' },
            kgSaved: { $sum: '$kgSaved' }
          }
        }
      ]);

      const data = periodData[0] || {};
      chartData.push({
        period: label,
        meals: data.meals || 0,
        donations: data.donations || 0,
        requests: data.requests || 0,
        co2: data.co2 || 0,
        water: Math.round((data.kgSaved || 0) * 1000) // Approximate water saved
      });
    }

    res.json({ chartData });

  } catch (error) {
    console.error('Get chart data error:', error);
    res.status(500).json({ message: 'Server error while fetching chart data' });
  }
});



/**
 * @route   GET /api/impact/city-wise
 * @desc    Get impact data by city
 * @access  Public
 */
router.get('/city-wise', async (req, res) => {
  try {
    const cityData = await ImpactLog.aggregate([
      {
        $match: {
          city: { $exists: true, $ne: null, $ne: '' }
        }
      },
      {
        $group: {
          _id: '$city',
          totalMeals: { $sum: '$meals' },
          totalKgSaved: { $sum: '$kgSaved' },
          totalCO2Saved: { $sum: '$co2SavedKg' },
          donationCount: {
            $sum: {
              $cond: [{ $eq: ['$entity', 'donation'] }, 1, 0]
            }
          },
          requestCount: {
            $sum: {
              $cond: [{ $eq: ['$entity', 'request'] }, 1, 0]
            }
          }
        }
      },
      {
        $sort: { totalMeals: -1 }
      },
      {
        $limit: 20
      },
      {
        $project: {
          city: '$_id',
          totalMeals: 1,
          totalKgSaved: 1,
          totalCO2Saved: 1,
          donationCount: 1,
          requestCount: 1,
          waterSavedLiters: { $multiply: ['$totalKgSaved', 1000] },
          _id: 0
        }
      }
    ]);

    res.json({ cityData });

  } catch (error) {
    console.error('Get city-wise impact error:', error);
    res.status(500).json({ message: 'Server error while fetching city-wise impact data' });
  }
});

module.exports = router;
