const CustomError = require("../extensions/custom-error");
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = dateSample = (sampleActivity) => {
  if (typeof sampleActivity !== "str") return false;
  let Activity = parseFloat(sampleActivity);
  if (Activity <= 0 || isNaN(Activity) || Activity > MODERN_ACTIVITY) return false;
  k = 0.693 / HALF_LIFE_PERIOD;
  t = Math.log2(MODERN_ACTIVITY / sampleActivity) / k;
};
