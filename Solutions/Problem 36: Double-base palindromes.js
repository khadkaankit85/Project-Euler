function isPalindrome(string) {
    if (string === string.split("").reverse().join("")) return true
    return false
}

function doubleBasePalindromes(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        let numberCurrent = i
        if (isPalindrome(numberCurrent.toString())) {
            let numberCurrentInBinary = numberCurrent.toString(2)
            if (isPalindrome(numberCurrentInBinary)) {
                sum += i
            }
        }
    }


    console.log(sum)

    return sum;

}
doubleBasePalindromes(500000);