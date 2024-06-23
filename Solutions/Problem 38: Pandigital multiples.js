function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function getPermutations(string) {
    if (string.length <= 1) return [string];
    let permutations = [];
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let remainingChars = string.slice(0, i) + string.slice(i + 1);
        for (let permutation of getPermutations(remainingChars)) {
            permutations.push(char + permutation);
        }
    }
    return permutations;
}

function pandigitalPrime(n) {
    let digits = '';
    for (let i = 1; i <= n; i++) {
        digits += i;
    }

    let permutations = getPermutations(digits);
    permutations.sort((a, b) => b - a); // Sort in descending order

    for (let perm of permutations) {
        let num = parseInt(perm);
        if (isPrime(num)) {
            return num;
        }
    }

    return -1; // Return -1 if no pandigital prime is found
}

console.log(pandigitalPrime(4)); // Should return 4231
console.log(pandigitalPrime(7)); // Should return 7652413
