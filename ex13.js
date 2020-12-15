function factors (integer) {
    let array = [];
    number = 0;

    for (let i = 0; i < integer; i++) {
        number = integer/i;
        
        if (number === Math.floor(number)) {
            array.push(i);
        }
    }
    return array;
}

console.log(` The postive integers for the number 90 are ٩(˘◊˘)۶ : ${factors(90)} `);