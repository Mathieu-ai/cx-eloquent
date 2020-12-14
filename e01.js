function reverse (x) {
    x = x+"";
    return x.split("").reverse().join("");
}
console.log(reverse(12345))