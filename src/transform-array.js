module.exports = function transform(arr) {
  let copyArr = [...arr];

  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] === '--discard-next' && i !== copyArr.length - 1) {
      copyArr.splice(i + 1, 1);
    }
    if (copyArr[i] === '--discard-prev' && i !== 0) {
      copyArr.splice(i - 1, 1);
      i -= 1;
    }
    if (copyArr[i] === '--double-next') {
      copyArr.splice(i + 1, 0, copyArr[i + 1]);
    }
    if (copyArr[i] === '--double-prev') {
      copyArr.splice(i, 0, copyArr[i - 1]);
      i += 1;
    }
  }

  return copyArr.filter(
    (item) =>
      item !== undefined &&
      item !== '--double-next' &&
      item !== '--discard-next' &&
      item !== '--discard-prev' &&
      item !== '--double-prev'
  );
};