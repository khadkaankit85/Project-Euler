// For a number to be divisible by 1 to n, it should be the lcm of those numbers
// so what we are gonna find is the lcm of 1 to n
// I just got to know about this Euclidean algorithm, according to which
// the last non zero remainder is the HCF of two numbers 

function findHCF(a, b) {
    while (b != 0) {
        // a/b= quotient * a number + remainder
        // 29/2=2  *  14 +   1
        let temproaryStorageOfb = b
        b = a % b
        a = temproaryStorageOfb
    }
    return a
}

function getLCM(a, b) {
    return (a * b) / (findHCF(a, b))
}

function smallestMult(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result = getLCM(result, i)
    }
    return result
}
console.log(smallestMult(20))


// lets leave the remaining for later