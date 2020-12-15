/*
function longuestWord(str)
{
  let array1 = str.match(/\w[a-z]{0,}/gi);
  let result = array1[0];

  for(let x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(longuestWord(' a lung disease caused by inhaling very fine ash and sand dust is pneumonoultramicroscopicsilicovolcanoconiosis'));
*/
let longuestWord = (str) => {
    return str.split(' ').sort( (a, b) =>b.length - a.length)[0]
}

console.log(longuestWord('a lung disease caused by inhaling very fine ash and sand dust is pneumonoultramicroscopicsilicovolcanoconiosis !'))