function maximumPathSumI(triangle) {
    // the key is to start from the second last line of the triangle and iterate to the top

    for (let i = triangle.length - 2; i >= 0; i--) {

        for (let j = 0; j <= i; j++) {
            // if that element is not 0, we get the max sum here
            triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1])
        }
    }
    console.log(triangle[0][0])
    return triangle[0][0];
}
let triangle =
    [[3, 0, 0, 0],
    [7, 4, 0, 0],
    [2, 4, 6, 0],
    [8, 5, 9, 3]]


maximumPathSumI([[3, 0, 0, 0], [7, 4, 0, 0], [2, 4, 6, 0], [8, 5, 9, 3]])
// 