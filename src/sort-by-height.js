const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrWithout = [];
  for (let i = 0; i <= arr.length; i++){
    if ( arr[i] !== -1){
      arrWithout.push(arr[i]);
    }
    arrWithout.sort((a, b) => (a - b));
  }
  let i = 0;
  return arr.map(item => {
    return item === -1? item : arrWithout[i++]
  })
}

module.exports = {
  sortByHeight
};
