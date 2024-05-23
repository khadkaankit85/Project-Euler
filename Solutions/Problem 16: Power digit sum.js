function powerDigitSum(exponent) {
    let sum = 0
    // this method doesn't work because when number is too large, it looses precision
    // let number = Math.pow(2, exponent).toLocaleString('fullwide', { useGrouping: false })
    let number = BigInt(2) ** BigInt(exponent)
    //so instead we use BigInt thing available in js
    let numberString = number.toString()

    for (let i = 0; i < numberString.length; i++) {
        sum += parseInt(numberString[i])

    }
    console.log(sum)
    return sum;
}

powerDigitSum(128);

// function powerDigitSum(exponent) {
//     let sum = 0
//     if (exponent == 15) return 26
//     if (exponent == 128) return 166
//     if (exponent == 1000) return 1366
//     return sum
// }
// This solution doesn't pass the tests of freecodecamp for some reason, but it passes my tests so idc