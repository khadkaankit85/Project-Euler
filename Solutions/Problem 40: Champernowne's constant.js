
function generateIrrationalNumber(n) {
    let IrrationalNumber = ""
    for (let i = 1; IrrationalNumber.length - 1 <= n; i++) {
        let numberToString = i.toString()
        IrrationalNumber += numberToString
    }
    return IrrationalNumber
}

function champernownesConstant(n) {

    // let arrayOfIndex = [1, 10, 100, 1000, 10000, 100000, 1000000]
    let value = 1
    let IrrationalNumber = generateIrrationalNumber(n)

    for (let i = n; i >= 1; i /= 10) {
        // nth digit
        let number = parseInt(IrrationalNumber[i - 1])
        value *= number
    }
    // generateIrrationalNumber(n)
    console.log(value)
    return value;
}

champernownesConstant(100);