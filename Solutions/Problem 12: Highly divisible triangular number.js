function isInt(n) {
    return n % 1 === 0;
}

function countDivisors(num) {
    let count = 0;
    let sqrt = Math.sqrt(num);
    for (let i = 1; i <= sqrt; i++) {
        if (num % i === 0) {
            // i and num / i are both divisors
            count += 2;
        }
    }
    // Correct the count if num is a perfect square
    if (sqrt * sqrt === num) {
        count--;
    }
    return count;
}

function findNextTriangleNumber(n) {
    let i = 1;
    let triangleNumber = 0;

    while (true) {
        triangleNumber = (i * (i + 1)) / 2;
        if (countDivisors(triangleNumber) > n) {
            console.log("Triangle number: ", triangleNumber);
            return triangleNumber;
        }
        i++;
    }
}

function divisibleTriangleNumber(n) {
    return findNextTriangleNumber(n);
}

divisibleTriangleNumber(500);
