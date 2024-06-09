function getFactorialOf(n) {
    let factorial = 1
    if (n < 0) throw new Error("factorial of 0 is 1 ok")
    if (n == 1 || n === 0) return 1
    while (n != 1) {
        factorial *= n
        n--

    }
    return factorial
}

function isCuriousNumber(n) {
    let numsIntoPieces = n.toString().split("")
    let sum = 0
    for (let i = 0; i < numsIntoPieces.length; i++) {
        sum += getFactorialOf(parseInt((numsIntoPieces[i])))
    }
    if (sum === n) {
        return true
    }
    return false
}


function digitFactorial() {

    var sum = 0;
    var numbers = [];

    for (let i = 3; i <= 500000; i++) {
        if (isCuriousNumber(i)) {
            sum += i
            numbers.push(i)
        }
    }
    return { sum, numbers };
}

console.log(digitFactorial());