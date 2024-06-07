function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function simplifyFraction(num, den) {
    let divisor = gcd(num, den);
    return [num / divisor, den / divisor];
}

function digitCancellingFractions() {
    let fractions = [];

    for (let num = 10; num < 100; num++) {
        for (let den = num + 1; den < 100; den++) {
            let numStr = num.toString();
            let denStr = den.toString();

            if (numStr[1] === '0' && denStr[1] === '0') continue;

            let commonDigit = numStr[1] === denStr[0] ? numStr[1] : null;
            if (commonDigit && commonDigit !== '0') {
                let newNum = parseInt(numStr[0]);
                let newDen = parseInt(denStr[1]);

                if (newDen !== 0 && (num * newDen === den * newNum)) {
                    fractions.push([num, den]);
                }
            }
        }
    }

    let productNum = 1;
    let productDen = 1;

    for (let [num, den] of fractions) {
        productNum *= num;
        productDen *= den;
    }

    let [simplifiedNum, simplifiedDen] = simplifyFraction(productNum, productDen);

    return simplifiedDen;
}

console.log(digitCancellingFractions());
