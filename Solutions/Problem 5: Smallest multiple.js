
function smallestMult(n) {

    function checkNumber(checking) {
        for (let i = 1; i <= n; i++) {
            if (checking % i == 0 && i == n) {
                // console.log("The number you are looking for is ", checking)
                return checking
            }
            else if (checking % i !== 0) {
                return checkNumber(checking + 1)

            }

        }
    }
    return checkNumber(1)



}

smallestMult(20);