const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
  let newStr = '';
  let counter = 1;
  str.split('').forEach((item, index) => {
    if (item === str[index + 1]) {
      counter++;
    } else {
      if (counter > 1) {
        newStr += counter + item;
        counter = 1;
      } else {
        newStr += item;
      }
    }
  })
  return newStr;
}

module.exports = {
  encodeLine
};
