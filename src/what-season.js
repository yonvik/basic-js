module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('not a date');
  }
  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  const month = date.getMonth();

  if (month >= 2 && month <= 4) {
    return seasons[1];
  } else if (month >= 5 && month <= 7) {
    return seasons[2];
  } else if (month >= 8 && month <= 10) {
    return seasons[3];
  }
  return seasons[0];
};