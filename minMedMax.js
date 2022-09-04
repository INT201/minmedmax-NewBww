const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    let numArray = [n1,n2,n3];
    for (i = 0; i < 2; i++) {
        if (numArray[0] > numArray[1]) {
            [numArray[0], numArray[1], numArray[2]] = [numArray[1], numArray[0], numArray[2]]
        }
        for (j = 0; j < 1; j++) {
            if (numArray[1] > numArray[2]) {
                [numArray[0], numArray[1], numArray[2]] = [numArray[0], numArray[2], numArray[1]]
            }
        }
    }

    return {
        min: numArray[0],
        mid: numArray[0] === numArray[1] ? numArray[2] : numArray[1],
        max: numArray[2]
    };
}
module.exports = minMedMax
