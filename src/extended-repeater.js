const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let separatorStr = options.additionRepeatTimes ? '' : options.addition ? options.addition : '';
  let separator = options.separator ? options.separator : '+';
  let result = '';

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
    separatorStr += `${options.addition}${i < options.additionRepeatTimes - 1 ? additionSeparator : ''}`;
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    result += `${str}${separatorStr}${i < options.repeatTimes - 1 ? separator : ''}`;
  }

  return result ?  result : `${str}${options.addition}`;
};
