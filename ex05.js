function capitalize(str) {
   var lowerSplitArr = str.toLowerCase().split(' ');
   for (var i = 0; i < lowerSplitArr.length; i++) {
      lowerSplitArr[i] = lowerSplitArr[i].charAt(0).toUpperCase() +
      lowerSplitArr[i].substring(1);
   }
   return lowerSplitArr.join(' ');
}
console.log(capitalize('hello world, my name is john snow'));