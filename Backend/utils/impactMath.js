/**
 * Calculate environmental impact metrics from food data
 */

/**
 * Calculate CO2 saved based on food type and quantity
 * @param {string} foodType - Type of food
 * @param {number} kgAmount - Amount in kg
 * @returns {number} CO2 saved in kg
 */
function calculateCO2Saved(foodType, kgAmount) {
  // CO2 emission factors per kg of food waste (approximate values)
  const co2Factors = {
    'rice': 2.7,
    'wheat': 1.4,
    'vegetables': 0.5,
    'fruits': 0.9,
    'meat': 6.0,
    'dairy': 3.2,
    'bread': 1.3,
    'cooked': 2.0, // average for cooked meals
    'default': 1.5
  };

  const factor = co2Factors[foodType.toLowerCase()] || co2Factors.default;
  return Math.round(kgAmount * factor * 100) / 100; // Round to 2 decimal places
}

/**
 * Convert meals to approximate kg
 * @param {number} meals - Number of meals
 * @param {string} foodType - Type of food
 * @returns {number} Approximate kg
 */
function mealsToKg(meals, foodType = 'cooked') {
  // Average meal weights in kg
  const mealWeights = {
    'rice': 0.3,
    'bread': 0.2,
    'vegetables': 0.25,
    'fruits': 0.2,
    'meat': 0.15,
    'cooked': 0.4, // average cooked meal
    'default': 0.35
  };

  const weight = mealWeights[foodType.toLowerCase()] || mealWeights.default;
  return Math.round(meals * weight * 100) / 100;
}

/**
 * Calculate water saved based on food type and quantity
 * @param {string} foodType - Type of food
 * @param {number} kgAmount - Amount in kg
 * @returns {number} Water saved in liters
 */
function calculateWaterSaved(foodType, kgAmount) {
  // Water footprint per kg of food (liters)
  const waterFactors = {
    'rice': 2500,
    'wheat': 1800,
    'vegetables': 300,
    'fruits': 900,
    'meat': 15400,
    'dairy': 1000,
    'bread': 1600,
    'cooked': 1200,
    'default': 1000
  };

  const factor = waterFactors[foodType.toLowerCase()] || waterFactors.default;
  return Math.round(kgAmount * factor);
}

/**
 * Calculate comprehensive impact metrics
 * @param {Object} params - { foodType, quantity: { amount, unit } }
 * @returns {Object} Impact metrics
 */
function calculateImpactMetrics({ foodType, quantity }) {
  const { amount, unit } = quantity;
  
  // Convert to kg if needed
  let kgAmount = amount;
  let meals = amount;
  
  if (unit === 'meals') {
    kgAmount = mealsToKg(amount, foodType);
    meals = amount;
  } else if (unit === 'kg') {
    kgAmount = amount;
    meals = Math.round(amount / mealsToKg(1, foodType));
  }

  return {
    meals,
    kgSaved: kgAmount,
    co2SavedKg: calculateCO2Saved(foodType, kgAmount),
    waterSavedLiters: calculateWaterSaved(foodType, kgAmount)
  };
}

/**
 * Extract city from address string (simple implementation)
 * @param {string} address - Full address
 * @returns {string} Extracted city name
 */
function extractCityFromAddress(address) {
  if (!address) return 'Unknown';
  
  // Simple regex to extract city (assumes format: "..., City, State, ...")
  const cityMatch = address.match(/,\s*([^,]+),\s*[^,]+$/);
  if (cityMatch) {
    return cityMatch[1].trim();
  }
  
  // Fallback: take the second-to-last part after splitting by comma
  const parts = address.split(',').map(p => p.trim());
  if (parts.length >= 2) {
    return parts[parts.length - 2];
  }
  
  return 'Unknown';
}

module.exports = {
  calculateCO2Saved,
  mealsToKg,
  calculateWaterSaved,
  calculateImpactMetrics,
  extractCityFromAddress
};
