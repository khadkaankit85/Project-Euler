function intRightTriangles(n) {
    const perimeterCount = {};

    for (let a = 1; a <= n / 2; a++) {
        for (let b = a; b <= (n - a) / 2; b++) {
            const c = Math.sqrt(a * a + b * b);
            if (Number.isInteger(c)) {
                const p = a + b + c;
                if (p <= n) {
                    perimeterCount[p] = (perimeterCount[p] || 0) + 1;
                }
            }
        }
    }

    let maxCount = 0;
    let maxPerimeter = 0;

    for (const p in perimeterCount) {
        if (perimeterCount[p] > maxCount) {
            maxCount = perimeterCount[p];
            maxPerimeter = parseInt(p, 10);
        }
    }

    return maxPerimeter;
}

console.log(intRightTriangles(500));
console.log(intRightTriangles(800));  