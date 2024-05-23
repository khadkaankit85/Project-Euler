function numberToWords(num) {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const thousands = ['', 'Thousand', 'Million', 'Billion'];

    if (num === 0) {
        return 'Zero';
    }
    function helper(n) {
        if (n < 20) {
            return ones[n];
        } else if (n < 100) {
            return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + ones[n % 10] : '');
        } else {
            return ones[Math.floor(n / 100)] + ' Hundred and' + (n % 100 !== 0 ? ' ' + helper(n % 100) : '');
        }
    }

    let result = '';
    for (let i = 0; i < thousands.length && num > 0; i++) {
        let chunk = num % 1000;
        if (chunk !== 0) {
            result = helper(chunk) + (thousands[i] !== '' ? ' ' + thousands[i] : '') + (result !== '' ? ' ' + result : '');
        }
        num = Math.floor(num / 1000);
    }

    return result.trim();
}
function getLengthInWords(number) {
    if (number == 100) {
        return numberToWords(number).split(" ").join("").length - 3
    }
    else {
        return numberToWords(number).split(" ").join("").length

    }
}




function numberLetterCounts(limit) {
    let requiredLength = 0
    for (let i = 1; i <= limit; i++) {
        requiredLength += getLengthInWords(i)

    }
    console.log(requiredLength)
    return requiredLength;
}

numberLetterCounts(1000);