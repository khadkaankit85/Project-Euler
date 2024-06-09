function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function getRotations(number) {
    let arrayOfRotationsInString = [];
    let arrayofInput = number.toString().split("");

    for (let i = 0; i < arrayofInput.length; i++) {
        let currentFirst = arrayofInput[0];
        let currentWithoutFirst = arrayofInput.slice(1);
        let newArray = [...currentWithoutFirst, currentFirst];
        arrayOfRotationsInString.push(newArray.join(""));
        arrayofInput = newArray;
    }
    return arrayOfRotationsInString;
}

function circularPrimes(n) {
    let count = 0;

    for (let i = 2; i <= n; i++) {
        let rotationsInStringArray = getRotations(i);
        let allRotationsPrime = true;

        for (let rotation of rotationsInStringArray) {
            if (!isPrime(parseInt(rotation))) {
                allRotationsPrime = false;
                break;
            }
        }

        if (allRotationsPrime) {
            count++;
        }
    }

    console.log(count);
    return count;
}

// Example usage
circularPrimes(1000000); // Expected output: count of circular primes up to 1000000
