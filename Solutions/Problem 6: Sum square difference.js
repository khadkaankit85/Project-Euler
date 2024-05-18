function sumSquareDifference(n) {
    let myArray = Array.from(Array(n + 1).keys())
    // let's remove 0, as its not a natural number
    let realArray = myArray.filter((i) => i != 0)
    let sumOfSquare = (realArray.map((i) => i * i)).reduce((p, c) => {
        return (p + c)
    }, 0)
    let squareOfSum = (realArray.reduce((p, c) => {
        return p + c
    }, 0)) ** 2


    return squareOfSum - sumOfSquare;
}

sumSquareDifference(100)