function palindrome () {
    const array = string.split('');
    const reverseArray = array.reverse();
    const reverseAgain = reverseArray.join('');

    if (string == reverseAgain) {
        console.log('this is a palindrome ヾ(｡^ω^｡)ノ');

    } else {console.log("this isn't a palindrome ヾ【*≧д≦】ノ")}

}

const string = process.argv[2]
palindrome();