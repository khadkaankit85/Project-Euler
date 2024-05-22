
//number of ways to rich n from 2n is coefficient of n or something
//we use count =(2n!)/(n!*n!) to find the solution so

//lets create a function to find factorial of n
function factorialOf(n) {
    if (n == 1) return 1
    else return n * factorialOf(n - 1)
    //time complexity of this function O(n!)

}
function latticePaths(gridSize) {
    let numberOfWays = factorialOf(2 * gridSize) / (factorialOf(gridSize) * factorialOf(gridSize))
    console.log(numberOfWays)
    return numberOfWays;
}

latticePaths(20);