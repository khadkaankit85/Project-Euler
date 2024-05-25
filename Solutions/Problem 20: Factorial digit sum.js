function findFactorial(n) {
    if (n <= 1) return BigInt(1); // Ensure the factorial is a BigInt from the start
    else return BigInt(n) * findFactorial(n - 1);
}

function sumFactorialDigits(n) {
    let sum = 0;
    let factorialOfNumber = findFactorial(n).toString(); // Convert BigInt to string
    console.log(factorialOfNumber)
    for (let i = 0; i < factorialOfNumber.length; i++) {
        sum += parseInt(factorialOfNumber[i]);
    }
    console.log(sum);
    return sum;
}

sumFactorialDigits(100);
