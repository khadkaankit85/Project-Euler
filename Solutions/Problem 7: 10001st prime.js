// if root n cannot be divide by a number then n cannot be divided as well

function isPrime(n) {
    if (n <= 1) return false //0 an d 1 are not prime
    if (n <= 3) return true // 2 and three are prime
    if (n % 2 == 0) return false // even number
    if (n % 3 == 0) return false //should cover any divisible by three

    // expressions above should cover any even number, and any number divisible by three
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false

    }
    return true
}

function nthPrime(n) {
    let primeNumbers = []
    for (let i = 0; n > primeNumbers.length; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i)
            // console.log(primeNumbers.length, "th prime number is, ", i)
        }

    }
    console.log(primeNumbers.length)
    return primeNumbers[primeNumbers.length - 1];
}

console.log(nthPrime(100))