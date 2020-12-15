function matrix(n) {
    let x;
    let y;

    for (x=0; x < n; x++)
    {
      for (y=0; y < n; y++)
      {
           if (x === y)
           {         
             console.log(' 0 ');
           } else 
            {
             console.log(' 1 ');}
            }
       }
   }
   
matrix(3);