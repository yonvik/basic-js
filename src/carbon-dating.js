const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity) {
  if (typeof(sampleActivity) === 'string' && +sampleActivity > 0 && +sampleActivity <= 15)
  return Math.ceil(Math.log( MODERN_ACTIVITY / +sampleActivity) * HALF_LIFE_PERIOD / Math.log(2)) || false;
  else return false;
};