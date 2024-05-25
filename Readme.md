# [Project Euler](https://www.freecodecamp.org/learn/project-euler)

By the end of this poject, it will have the solution of all the problems from `project Euler` from [`freecodecamp.org`](www.freecodecamp.org) .

## Questions

### [Problem 1: Multiples of 3 or 5](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-1-multiples-of-3-or-5)

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

#### multiplesOf3Or5(10) should return a number.

#### multiplesOf3Or5(49) should return 543.

#### multiplesOf3Or5(1000) should return 233168.

#### multiplesOf3Or5(8456) should return 16687353.

#### multiplesOf3Or5(19564) should return 89301183.

### [Problem 2: Even Fibonacci Numbers](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-2-even-fibonacci-numbers)

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

#### fiboEvenSum(10) should return a number.

#### Your function should return an even value.

#### Your function should sum the even-valued Fibonacci numbers

##### fiboEvenSum(8) should return 10.

##### fiboEvenSum(10) should return 10.

##### fiboEvenSum(34) should return 44.

##### fiboEvenSum(60) should return 44.

##### fiboEvenSum(1000) should return 798.

##### fiboEvenSum(100000) should return 60696.

##### fiboEvenSum(4000000) should return 4613732.

### [Problem 3: Largest prime factor](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-3-largest-prime-factor)

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the given number?

#### largestPrimeFactor(2) should return a number.

#### largestPrimeFactor(2) should return 2.

#### largestPrimeFactor(3) should return 3.

##### largestPrimeFactor(5) should return 5.

##### largestPrimeFactor(7) should return 7.

##### largestPrimeFactor(8) should return 2.

##### largestPrimeFactor(13195) should return 29.

##### largestPrimeFactor(600851475143) should return 6857.

##### fiboEvenSum(100000) should return 60696.

##### fiboEvenSum(4000000) should return 4613732.

### [Problem 4: Largest palindrome product](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-4-largest-palindrome-product)

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.

#### largestPalindromeProduct(2) should return a number.

#### largestPalindromeProduct(2) should return 9009.

#### largestPalindromeProduct(3) should return 906609.

### [Problem 5: Smallest multiple](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-5-smallest-multiple)

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

#### smallestMult(5) should return a number.

#### smallestMult(5) should return 60.

#### smallestMult(7) should return 420.

#### smallestMult(10) should return 2520.

#### smallestMult(13) should return 360360.

#### smallestMult(20) should return 232792560.

### [Problem 6: Sum square difference](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-6-sum-square-difference)

The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

#### sumSquareDifference(10) should return a number.

#### sumSquareDifference(10) should return 2640.

#### sumSquareDifference(20) should return 41230.

#### sumSquareDifference(100) should return 25164150.

### [Problem 7: 10001st prime](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-7-10001st-prime)

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?

#### nthPrime(6) should return a number.

#### nthPrime(6) should return 13.

#### nthPrime(10) should return 29.

#### nthPrime(100) should return 541.

#### nthPrime(1000) should return 7919.

#### nthPrime(10001) should return 104743.

### [Problem 8: Largest Product in a series](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-8-largest-product-in-a-series)

The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450

`Find the n adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?`

#### largestProductinaSeries(4) should return a number.

#### largestProductinaSeries(4) should return 5832.

#### largestProductinaSeries(13) should return 23514624000.

### [Problem 9: Special Pythagorean triplet](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-9-special-pythagorean-triplet)

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

#### specialPythagoreanTriplet(24) should return a number.

#### specialPythagoreanTriplet(24) should return 480.

#### specialPythagoreanTriplet(120) should return 49920, 55080 or 60000.

### [Problem 10: Summation of primes](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-10-summation-of-primes)

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.

#### primeSummation(17) should return a number.

#### primeSummation(17) should return 41.

#### primeSummation(2001) should return 277050.

#### primeSummation(140759) should return 873608362.

#### primeSummation(2000000) should return 142913828922.

### [Problem 11: Largest product in a grid](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-11-largest-product-in-a-grid)

In the 20×20 grid below, four numbers along a diagonal line have been marked in red.

08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48
The product of these numbers is 26 × 63 × 78 × 14 = 1788696.

What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in a given arr grid?

#### largestGridProduct(testGrid) should return a number.

#### largestGridProduct(testGrid) should return 14169081.

#### largestGridProduct(grid) should return 70600674.

### [Problem 12: Highly divisible triangular number](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-12-highly-divisible-triangular-number)

The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

> 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

```
1: 1
3: 1, 3
6: 1, 2, 3, 6
10: 1, 2, 5, 10
15: 1, 3, 5, 15
21: 1, 3, 7, 21
28: 1, 2, 4, 7, 14, 28
```

> We can see that 28 is the first triangle number to have over five divisors.

> What is the value of the first triangle number to have over n divisors?

#### divisibleTriangleNumber(5) should return 28.

#### divisibleTriangleNumber(23) should return 630.

#### divisibleTriangleNumber(167) should return 1385280.

#### divisibleTriangleNumber(374) should return 17907120.

#### divisibleTriangleNumber(500) should return 76576500.

### [Problem 14: Longest Collatz sequence](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-14-longest-collatz-sequence)

The following iterative sequence is defined for the set of positive integers:

` n → n/2 (n is even)`
` n → 3n + 1 (n is odd)`

> Using the rule above and starting with 13, we generate the following sequence:

```
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
```

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above limit.

#### longestCollatzSequence(14) should return 9.

#### longestCollatzSequence(5847) should return 3711.

#### longestCollatzSequence(46500) should return 35655.

#### longestCollatzSequence(54512) should return 52527.

#### longestCollatzSequence(1000000) should return 837799.

### [Problem 15: Lattice paths](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-15-lattice-paths)

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner
How many such routes are there through a given gridSize?

#### latticePaths(4) should return 70.

#### latticePaths(9) should return 48620.

#### latticePaths(20) should return 137846528820.

### [Problem 16: Power digit sum](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-16-power-digit-sum)

215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2exponent?

#### powerDigitSum(15) should return 26.

#### powerDigitSum(128) should return 166.

#### powerDigitSum(1000) should return 1366.

### [Problem 17: Number letter counts](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-17-number-letter-counts)

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to given `limit` inclusive were written out in words, how many letters would be used?

Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

#### numberLetterCounts(5) should return 19.

#### numberLetterCounts(150) should return 1903.

#### numberLetterCounts(1000) should return 21124.

### [Problem 18: Maximum path sum I](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-18-maximum-path-sum-i)

By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

```
3
7 4
2 4 6
8 5 9 3
That is, 3 + 7 + 4 + 9 = 23.

```

Find the maximum total from top to bottom of the triangle below:

```

75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

```

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)

#### numberLetterCounts(5) should return 19.

#### numberLetterCounts(150) should return 1903.

#### numberLetterCounts(1000) should return 21124.

### [Problem 19: Counting Sundays](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-19-counting-sundays)

You are given the following information, but you may prefer to do some research for yourself.

```
1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
```

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

#### countingSundays(1943, 1946) should return 6.

#### countingSundays(1995, 2000) should return 10.

#### countingSundays(1901, 2000) should return 171.

### [Problem 20: Factorial digit sum](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-20-factorial-digit-sum)

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits n!

#### sumFactorialDigits(10) should return 27.

#### sumFactorialDigits(25) should return 72.

#### sumFactorialDigits(50) should return 216.

#### sumFactorialDigits(75) should return 432.

#### sumFactorialDigits(100) should return 648.

### [Problem 21: Amicable numbers](https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-21-amicable-numbers)

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under n.

#### sumAmicableNum(1000) should return 504.

#### sumAmicableNum(2000) should return 2898.

#### sumAmicableNum(5000) should return 8442.

#### sumAmicableNum(10000) should return 31626.
