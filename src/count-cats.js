const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sum = 0;
  for (let cat of matrix){
    for(let item of cat){
     if(item === "^^"){
      sum++;
      }
    }
  }
  return sum;
};
