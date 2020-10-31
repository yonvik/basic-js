const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  if (!options.separator) options.separator = '+';
  if (options.addition !== undefined) {
    str += (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
  }
  
  result += (str + options.separator).repeat(options.repeatTimes - 1) + str;

  return result;
};