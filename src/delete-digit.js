const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n ) {
  let nToString = n.toString().split('');
  let res = [];

  for (let nToStringItem = 0; nToStringItem<=nToString.length-1; nToStringItem++){
    let row = [];
    for (let i = 0; i <= nToString.length-1; i++){
      if (nToStringItem != i) row.push(nToString[i]);
    }
    res.push(row.join(''));
  }
  return Math.max(...res);
}

module.exports = {
  deleteDigit
};
