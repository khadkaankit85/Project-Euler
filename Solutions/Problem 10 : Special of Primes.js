function isPrime(number) {
    if (number <= 1) return false
    if (number <= 3) return true
    if (number % 2 == 0) return false
    if (number % 3 == 0) return false

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i == 0 || number % (i + 2) == 0) return false

    }
    return true


}
function primeSummation(n) {
    const requiedPrimeNumbers = Array.from(Array(n).keys()).filter((number) => isPrime(number))
    // console.log(requiedPrimeNumbers)
    const sumOfNumbers = requiedPrimeNumbers.reduce((p, c) => p + c, 0)
    return sumOfNumbers;
}

console.log(primeSummation(2000000));