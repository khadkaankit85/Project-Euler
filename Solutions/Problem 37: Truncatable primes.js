function isaPrimeNumber(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;

    for (let i = 5; i * i <= n; i += 6) { // Fixing the step in the loop
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

function isTrunctablePrime(n) {
    if (!isaPrimeNumber(n)) return false;

    let number = n.toString();

    // Truncate from right to left
    for (let i = 1; i < number.length; i++) {
        if (!isaPrimeNumber(parseInt(number.slice(i)))) return false;
    }

    // Truncate from left to right
    for (let i = number.length - 1; i > 0; i--) {
        if (!isaPrimeNumber(parseInt(number.slice(0, i)))) return false;
    }

    return true;
}

function truncatablePrimes(n) {
    let sum = 0;
    let count = 0;

    if (n <= 0) return sum; // If n is 0 or less, return sum which is 0

    for (let i = 10; count < n; i++) { // Start from 10 since single digit primes are not considered truncatable primes
        if (isTrunctablePrime(i)) {
            sum += i;
            count++;
        }
    }

    return sum;
}

console.log(truncatablePrimes(11)); // This will sum the first 11 truncatable primes
