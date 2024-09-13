function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            let c = Math.sqrt(a * a + b * b);
            if (c % 1 === 0 && c <= n && a + b + c === sumOfabc) {
                return a * b * c;
            }
        }
    }
    return false;
}

console.log(specialPythagoreanTriplet(1000));
