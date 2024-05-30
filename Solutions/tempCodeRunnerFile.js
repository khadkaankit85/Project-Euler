function countingSundays(startYear, endYear) {
    let sundayCount = 0;

    for (let year = startYear; year <= endYear; year++) {
        for (let month = 1; month <= 12; month++) {
            const firstDayOfMonth = new Date(year, month, 1);
            console.log(firstDayOfMonth)
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
