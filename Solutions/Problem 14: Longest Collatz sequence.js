//lets make a function to check if the number is integer or float
function isFloat(number) {
    if (number % 1 === 0) {
        return false
    }
    return true
}
//function to check if number is even or odd
function isEven(number) {
    if (isFloat(number / 2)) {
        return false

    }
    return true
}
// function to find the count of Collatz numbers for each number
function getCollatzCount(number) {
    let count = 0
    if (number <= 0) {
        return 0
    }
    while (number !== 1) {
        if (!isEven(number)) {
            number = number * 3 + 1
        }
        else if (isEven(number)) {
            number /= 2
        }
        count++
    }
    return count
}

//now this is our main function 
function longestCollatzSequence(limit) {
    let maxCount = 0
    let numberAsked = 0
    for (let i = 0; i <= limit; i++) {
        console.log("Checking the count for ", i)
        let count = getCollatzCount(i)
        if (count >= maxCount) {
            maxCount = count
            numberAsked = i
        }

    }

    return numberAsked;
}

console.log(longestCollatzSequence(14));

// The time complexity of the longestCollatzSequence function is 
// O(limit×loglimit). This reflects the fact that we are iterating over each number up to limit and for each number, performing a logarithmic number of operations on average to compute the Collatz sequence length.

