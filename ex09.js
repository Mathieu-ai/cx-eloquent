let whatType = (arg) => {
    return typeof arg;
}
function g () {

}
console.log(whatType(666))
console.log(whatType('hello'))
console.log(whatType(true))
console.log(whatType({}))
console.log(whatType((g)))