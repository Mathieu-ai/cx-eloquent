function primeTest (n) {
    if (n === 1)
    {return false;}

    else if (n === 2)
    {return true;} 
    else {

        for (var i = 0; i < n; i++)
        { if (n % i === 0)
            {return false;}
        }

        return true;
    }
}

console.log('2 is a prime number ? : ' + primeTest(2));
console.log('37 is a prime number ? : ' +primeTest(37));


