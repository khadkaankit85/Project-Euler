  for (let i = n; i >= 1; i /= 10) {

        let number = parseInt(IrrationalNumber[i + 2])
        if (number >= 1) {
            console.log(number)
            value *= number
        }
        // console.log(number)
    }
    // generateIrrationalNumber(n)
    console.log(value)
    return value;