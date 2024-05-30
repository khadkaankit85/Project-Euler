
function countingSundays(firstYear, lastYear) {
    let sundayCount = 0
    for (let i = firstYear; i <= lastYear; i++) {
        for (let j = 1; j <= 12; j++) {
            let firstDayOfTheMonth = new Date(`${i}-${j}-01`)
            if (firstDayOfTheMonth.getDay() == 0) {
                sundayCount += 1
                console.log(firstDayOfTheMonth, " was sunday")
            }
        }

    }
    console.log(sundayCount)
    return (sundayCount)

}
countingSundays(1901, 2000);
//  yahh!!! so happy 
