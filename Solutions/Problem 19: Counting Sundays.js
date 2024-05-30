function countingSundays(startYear, endYear) {
    let sundayCount = 0;

    for (let year = startYear; year <= endYear; year++) {
        for (let month = 1; month <= 12; month++) {
            const firstDayOfMonth = new Date(year, month, 1);
            if (firstDayOfMonth.getDay() === 0) { // Sunday
                sundayCount++;
            }
        }
    }

    return sundayCount;
}

// Test cases
console.log(countingSundays(1943, 1946)); // should return 6
console.log(countingSundays(1995, 2000)); // should return 10
console.log(countingSundays(1901, 2000)); // should return 171


// function countingSundays(firstYear, lastYear) {
//     let sundayCount = 0;
//     for (let i = firstYear; i <= lastYear; i++) {
//         for (let j = 1; j <= 12; j++) {
//             let firstDayOfTheMonth = new Date(i, j, 1);
//             console.log(firstDayOfTheMonth)
//             if (firstDayOfTheMonth.getDay() === 0) {
//                 sundayCount++;
//             }
//         }
//     }
//     console.log(sundayCount);
//     return sundayCount;
// }

// countingSundays(1995, 2000);
