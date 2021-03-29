const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = [];

  options.addition === undefined ? options.addition = "";
  options.additionSeparator === undefined ? options.additionSeparator == "";
  options.repeatTimes === undefined ? options.repeatTimes = 1;
  options.additionRepeatTimes === undefined ? options.additionRepeatTimes = 1;
  options.addition === null ? options.addition = "null";
  options.separator === undefined ? options.separator = "+";
  for (let i = 0; i < options.repeatTimes; i++) {
    let trialString = [];
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      trialString.push(options.addition);
    }
    result.push(str + trialString.join(options.additionSeparator));
  }

  return result.join(options.separator);
};
  
