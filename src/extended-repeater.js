const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
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
}

module.exports = {
  repeater
};
