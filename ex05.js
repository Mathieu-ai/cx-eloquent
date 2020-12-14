function capitalize(str) {
   var SplitArr = str.toLowerCase().split(' ');
   for (var i = 0; i < SplitArr.length; i++) {
      SplitArr[i] = SplitArr[i].charAt(0).toUpperCase() +
      SplitArr[i].substring(1);
   }
   return SplitArr.join(' ');
}
console.log(capitalize('hello world, my name is john snow'));