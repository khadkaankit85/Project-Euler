function largestPrimeFactor(number) {
    function getPrimeFactor(number) {
        let largestPrimeFactor = -1;
        while (number % 2 === 0) {
            console.log("the number right now is ", number)
            largestPrimeFactor = 2
            number /= 2
        }
        // then we divide by odd numbers greater than three until that is divisible and so on because we already divided it by two
        for (let i = 3; i < Math.sqrt(number); i += 2) {
            while (number % i == 0) {
                largestPrimeFactor = i
                number /= i
            }
        }
        // if number is not two then largest prime factor is that number
        // otherwise two is the prime factor

        if (number > 2) {
            largestPrimeFactor = number;
        }
        console.log(largestPrimeFactor)


    }
    getPrimeFactor(number)





    return true;
}

largestPrimeFactor(600851475143
);