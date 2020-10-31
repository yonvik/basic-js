const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr, counter, maxCount) {
    if (counter === undefined) counter = 1;
    if (maxCount === undefined) maxCount = 1;
     arr.filter(item => Array.isArray(item));

    arr.forEach(item => {
      if (Array.isArray(item)) {
        
        counter++;
        maxCount = this.calculateDepth(item, counter, maxCount);
        
        maxCount = Math.max(counter, maxCount);
        if (arr[arr.indexOf(item) + 1]) counter--;
       
         return maxCount;
        } 
       
    })
    return maxCount;
  } 
};