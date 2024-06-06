function canBeWrittenAsThePowerOfn(number, n) {
    let sumOfnPowerOfEach = number.toString().split("")
        .reduce((p, c) => {
            return p + c ** n
        }, 0)
    if (number == sumOfnPowerOfEach) return true
    else return false

}

function digitnPowers(n) {
    let sum = 0
    for (let i = 2; i <= 200000; i++) {
        if (canBeWrittenAsThePowerOfn(i, n)) {
            sum += i
        }
    }
    return sum;
}
console.log(digitnPowers(5));