
function countingSundays(firstYear, lastYear) {
    let sundayCount = 0
    let date = []
    for (let i = firstYear; i <= lastYear; i++) {
        for (let j = 1; j <= 12; j++) {
            let firstDayOfTheMonth = new Date(`${i}-${j}-02`)
            if (firstDayOfTheMonth.getDay() == 1) {
                sundayCount += 1
            }
            if (i == lastYear) {
                console.log("last year is ", new Date(`${i}-${j}-01`))
            }
            date.push(firstDayOfTheMonth)
        }

    }
    console.log(date[date.length - 1])
    return (sundayCount)

}
countingSundays(1995, 2000);
//  yahh!!! so happy 
