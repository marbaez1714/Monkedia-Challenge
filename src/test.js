/* Problem Name is &&& Second Smallest &&& PLEASE DO NOT REMOVE THIS LINE. */

/**
 * Instructions to candidate.
 * 1) Run this code in the REPL to observe its behaviour. The
 *    execution entry point is main().
 * 2) Consider adding some additional tests in doTestsPass().
 * 3) Implement secondSmallest() correctly.
 * 4) If time permits, some possible follow-ups.
 */


/**
 * Returns the second smallest element in the array x.
 * Returns 0 if the array has fewer than 2 elements.
 */
function secondSmallest(x) {
    // todo: implement this function
    if (x.length < 2) {
        return 0
    } else {
        let smallest,
            secondSmallest;
        if (x[0] < x[1]) {
            smallest = x[0];
        } else {
            smallest = x[1]
        }

        for (let i = 0; i < x.length; i++) {
            if (x[i] < smallest) {
                smallest = x[i]
            }
        }


        for (let i = 0; i < x.length; i++) {
            if (x[i] > smallest) {
                secondSmallest = x[i];
                for (let j = 0; j < x.length; j++) {
                    if (x[i] < x[j] && secondSmallest < x[j]) {
                        secondSmallest = x[i];
                        console.log(secondSmallest)
                    } else {
                        secondSmallest = x[j]
                    }
                }


            }
        }





        //   if(x[0] < x[1]){
        //     secondSmallest = x[0];
        //  }else{
        //     secondSmallest = x[1]
        //  }
        // for(let i =0 ; i < x.length ; i++){
        //   console.log(x)
        //    x[i] < secondSmallest ? secondSmallest= x[i] : ''
        //  }  



    }

}



/**
 * Returns true if all tests pass; otherwise, returns false.
 */
function doTestsPass() {
    // todo: add more test cases
    var testArrays = [[0], [0, 1, 2, 3, 4, 5, 6]];
    var testResults = [0, 1];

    // Run through the tests and make assertions
    for (var i = 0; i < testArrays.length; i++) {
        if (secondSmallest(testArrays[i]) != testResults[i]) {
            return false;
        }
    }
    return true;
}


/**
 * Main execution entry.
 */
if (doTestsPass()) {
    console.log("All tests pass!");
}
else {
    console.log("There are test failures.");
}
