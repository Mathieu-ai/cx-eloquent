function reverse (x) {
    x = x + "";
    return x.split("").reverse().join("");
}
console.log(reverse('webmaster'))