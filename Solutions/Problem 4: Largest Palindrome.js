function largestPalindromeProduct(n) {
    let maxPalindromeNumber = -1

    // lets create a function to check if a number is palindrome or not
    function isPalindrome(number) {

        // first is converted to string then splitted to make an array then reversed using an array method and joinded later
        let reversedNumber = number.toString().split("").reverse().join("")
        if (number.toString() === reversedNumber) {
            console.log("that was a palindrome")
            return true
        }
        else {
            console.log("That was not a palindrome")
            return false
        }
    }
    let largestNumber = Math.pow(10, n) - 1
    const smallestNumber = Math.pow(10, n - 1)
    console.log(largestNumber, smallestNumber)

    // let's calculate each number to check if thats a palindrome
    for (let i = largestNumber; i >= smallestNumber; i--) {
        for (let j = largestNumber; j >= smallestNumber; j--) {
            // console.log("Multiplying ", i, " and", j)
            let product = i * j
            console.log("checking.................. ", product)
            if (isPalindrome(product) && maxPalindromeNumber <= product) {
                console.log(product, " is a palindrom number")
                maxPalindromeNumber = product
            }
        }
    }
    console.log("Max palindrom number is ", maxPalindromeNumber)


    return maxPalindromeNumber;
}

largestPalindromeProduct(3);