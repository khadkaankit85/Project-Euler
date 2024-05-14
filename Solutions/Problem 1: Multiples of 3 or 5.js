function multiplesOf3Or5(number) {
    let array = Array.from(Array(number).keys())
    let filteredArray = array.filter((myNum) => {
        return ((myNum % 3 === 0) || (myNum % 5 === 0)) & (myNum != 0);
    })

    // console.log("filterred array is ", filteredArray);
    let sum = filteredArray.reduce((sum, myNumber) => {
        return sum + myNumber

    }, 0)
    console.log("and the sum is ", sum)

    return number;
}

multiplesOf3Or5(19564);