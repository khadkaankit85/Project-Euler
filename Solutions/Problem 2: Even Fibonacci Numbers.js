function fiboEvenSum(n) {
    //lets find fibonacci numbers first
    let series = []
    function findFibonacci(n) {
        if (n <= 0) {
            return 0
        }
        else if (n == 1) {
            return 1
        }
        else {
            return findFibonacci(n - 1) + findFibonacci(n - 2)
        }
    }
    let i = 2

    while (i <= n) {
        let myFibonacciNumber = findFibonacci(i)
        if (myFibonacciNumber > n) {
            break
        }
        console.log("appending ", findFibonacci(i))
        series.push(myFibonacciNumber)
        i++



    }
    let sum = (series.filter(number => number % 2 == 0)).reduce((p, c) => p + c, 0)


    console.log(series)
    console.log(sum)

    return sum;
}
fiboEvenSum(1000)