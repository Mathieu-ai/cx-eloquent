function getMinMax(array) {
    console.log(Math.max.apply(null, array));
    console.log(Math.min.apply(null, array));
}
const number = [1, 2, 3, 4, 5, 6, 7, 8,]

return getMinMax(number)
