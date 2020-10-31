const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let result = 0;
  arr.forEach(arr_item => result += arr_item.filter(item => item === "^^").length);
  return result;
};