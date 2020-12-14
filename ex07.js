function vowelCount(str)
{
  var listVowel = 'The quick brown fox';
  var countVowel = 0;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (listVowel.indexOf(str[x]) !== -1)
    {
      countVowel += 1;
    }
  
  }
  return countVowel;
}
console.log(vowelCount("The quick brown fox"));