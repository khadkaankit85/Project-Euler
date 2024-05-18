
function smallestMult(n) {

    function checkNumber(checking) {
        for (let i = 1; i <= n; i++) {
            if (checking % i == 0 && i == n) {
                // console.log("The number you are looking for is ", checking)
                return checking
            }
            else if (checking % i !== 0) {
                return checkNumber(checking + 1)

            }

        }
    }
    return checkNumber(1)



}

smallestMult(20);

// Note:
// The time complexity of the given code is quite high due to its brute-force nature of checking each successive number to see if it is divisible by all integers from 1 to `n`. Let's analyze it in detail.

// ### Analysis

// 1. **Inner Loop (for loop):**
//     - The function `checkNumber` checks divisibility from 1 to `n` for each number `checking`.
//     - The loop runs `n` times for each number `checking`.

// 2. **Recursive Call:**
//     - If `checking` is not divisible by any number in the range, it makes a recursive call to `checkNumber(checking + 1)`.

// ### Time Complexity

// To determine the time complexity, we need to consider:
// - How many times the outer function (`checkNumber`) needs to be called.
// - How many operations are performed in each call.

// The function essentially increments the `checking` value by 1 each time until it finds a number that is divisible by all numbers from 1 to `n`.

// For each number `checking`, the function performs up to `n` divisibility checks.

// ### Worst-Case Scenario
// In the worst case, the function might need to check many numbers until it finds the smallest multiple. The smallest number that is divisible by all numbers from 1 to `n` is the least common multiple (LCM) of the numbers from 1 to `n`.

// - The value of the LCM of numbers from 1 to `n` grows very quickly.
// - For large `n`, the LCM can be extremely large, leading to a high number of recursive calls.

// Given the exponential growth of the LCM, we can estimate the complexity to be worse than polynomial time.

// ### Approximation
// - The number of recursive calls is proportional to the value of the LCM.
// - Each recursive call involves a loop that checks `n` numbers.

// Thus, the time complexity can be approximated as `O(k * n)`, where `k` is the number of calls made until the LCM is found. Since `k` can be very large (related to the LCM of numbers 1 to `n`), this complexity is effectively exponential in terms of `n`.

// ### Practical Implications
// For small values of `n`, the function may work within a reasonable time. However, as `n` increases, the time taken by this function grows extremely quickly, making it impractical for large values of `n` (like 20 or higher).

// ### Conclusion
// The time complexity of the given code is exponential in nature, primarily because of the brute-force approach to finding the smallest multiple that is divisible by all numbers from 1 to `n`. This makes the function inefficient for large values of `n`.