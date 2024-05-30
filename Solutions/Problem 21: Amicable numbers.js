function sumAmicableNum(n) {
    let arrayToKeepTrackOfVisits = Array(n).fill(false)
    let sum = 0
    for (let a = 0; a <= n; a++) {
        if (arrayToKeepTrackOfVisits[a]) {
            continue
        }


        let b = d(a)
        if (b != a && d(b) == a && b <= n) {
            sum += b + a
            arrayToKeepTrackOfVisits[a] = true
            arrayToKeepTrackOfVisits[b] = true
        }

    }

    console.log(sum)
    return sum;
}

sumAmicableNum(10000);


function isNotFloat(n) {
    return Number.isInteger(n)
}

function d(n) {
    let sum = 0
    //sum of proper divisors of n(numbes less than n that divides evenly into n)
    for (let i = 1; i <= n / 2; i++) {

        if (isNotFloat(n / i)) {
            sum += i
        }
    }
    return sum
}