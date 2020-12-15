let combinator = (str) => {
    stringArr =[];
    for (let i = 0; i < str.length; i++) {
        for (let y = i+1; y < str.length+1; y++) {
            stringArr.push(str.slice(i, y) );
            
        }
    }
    return stringArr;
}

console.log(combinator('gog'));