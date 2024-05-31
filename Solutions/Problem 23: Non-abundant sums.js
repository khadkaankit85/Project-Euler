function findSumOfProperDivisors(n) {
    let sum = 0
    for (let i = 1; i <= n / 2; i++) {
        if (Number.isInteger(n / i)) {
            sum += i
        }
    }
    return sum

}
function isAbundant(n) {
    if (findSumOfProperDivisors(n) <= n) return false
    return true

}

function sumOfNonAbundantNumbers(limit) {
    //  to find abundant numbers
    let AbundantNumberList = []
    for (let i = 1; i <= limit; i++) {
        if (isAbundant(i)) AbundantNumberList.push(i)
    }

    //to check if a number can be written as the sum of two abundant numbers

    let canBeWrittenAsTwoSum = new Array(limit + 1).fill(false)
    for (let i = 0; i <= limit; i++) {

        for (let j = i; j <= AbundantNumberList.length; j++) {
            const sum = AbundantNumberList[i] + AbundantNumberList[j]
            if (sum <= limit) {
                canBeWrittenAsTwoSum[sum] = true
            }
            else {
                break
            }
        }
    }

    let sumOfNonAbundantSums = 0;
    for (let i = 1; i <= limit; i++) {
        if (!canBeWrittenAsTwoSum[i]) {
            sumOfNonAbundantSums += i;
        }
    }

    return sumOfNonAbundantSums;


}

console.log(sumOfNonAbundantNumbers(28123));