// function findFibonacci(n) {
//     if (n <= 2) {
//         return 1
//     }
//     if (n == 3) {
//         return 2
//     }
//     else {
//         return findFibonacci(n - 1) + findFibonacci(n - 2)
//     }

// }
// this method of finding fibonacci has an exponential time complexity 
// O(2 to the power n) so we gotta find another way
function findFibonacci(index) {
    if (index <= 2) return 1
    let a = 1
    let b = 1
    let fibo = 1
    for (let i = 3; i <= index; i++) {
        fibo = a + b
        a = b
        b = fibo

    }
    return fibo
}


function digitFibonacci(n) {
    let i = 1
    while (true) {
        let fibo = findFibonacci(i)
        if (fibo.toString().length == n) {
            console.log(i)
            break
        }
        i += 1
    }
    return i

}
digitFibonacci(20);