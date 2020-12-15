function getMax(array) {
    return Math.max.apply(null, array);
}
function getMin(array) {
    return Math.min.apply(null, array);
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(getMax(number))
console.log(getMin(number))