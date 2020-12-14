function palindrome () {
    const array = string.split('');
    const reverseArray = array.reverse();
    const reverseAgain = reverseArray.join('');

    if (string == reverseAgain) {
        console.log('this is a palindrome');

    } else {console.log("this isn't a palindrome")}

}

const string = process.argv[2]
palindrome();