function reverse (x) {
    x = x + "";
    return x.split("").reverse().join("");
}
console.log(reverse(123456789))