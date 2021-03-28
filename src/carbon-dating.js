const CustomError = require("../extensions/custom-error");
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = dateSample = (sampleActivity) => {
  if (typeof sampleActivity !== 'string' || !Number(sampleActivity) || sampleActivity > 15 || sampleActivity < 0) return false;
  let Activity = parseFloat(sampleActivity);
  k = 0.693 / HALF_LIFE_PERIOD;
  t = Math.log2(MODERN_ACTIVITY / sampleActivity) / k;
};
