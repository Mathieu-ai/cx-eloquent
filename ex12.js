function perfect(number)
{
   let x = 0;

   for(var i = 1; i <= number/2; i++) {
         if(number % i === 0) {
            x += i;
         }
   }
   
     if ( x === number && x !== 0) {
       console.log("yes ( ´ ▽ ` )ﾉ ");
      } else console.log("no ⸜(ّᶿധّᶿ)⸝ ");  
} 
 
console.log("is 6 a perfect number ? : ") + perfect(6);
console.log("is 999 a perfect number ? : ") + perfect(999);
