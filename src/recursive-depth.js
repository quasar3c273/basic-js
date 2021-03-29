const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    return arr.filter(subArr => Array.isArray(subArr)).length ? this.calculateDepth(arr.filter(subArr => Array.isArray(subArr)).flat(), depth + 1) : depth;
 }
};
