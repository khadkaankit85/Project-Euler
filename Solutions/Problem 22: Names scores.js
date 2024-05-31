function findWorth(word, position) {
    // Dictionary for alphabetical values
    const dictionary = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };

    let worth = 0;
    // Calculate the worth of the word
    for (let letter of word) {
        worth += dictionary[letter];
    }

    // Multiply the worth by its position
    worth *= position;
    return worth;
}

function namesScores(arr) {
    arr.sort()
    let sumForArray = 0;
    // Calculate the total score for the array of words
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i].toLowerCase();
        sumForArray += findWorth(word, i + 1);
    }
    console.log(sumForArray);
    return sumForArray;
}

// Test cases
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

namesScores(test1);
namesScores(test2);
