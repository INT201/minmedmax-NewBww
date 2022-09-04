const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    let numArray = [n1,n2,n3];
    if (numArray[0] > numArray[1]) {
        [numArray[0], numArray[1], numArray[2]] = [numArray[1], numArray[0], numArray[2]]
    }
    if (numArray[1] > numArray[2]) {
        [numArray[0], numArray[1], numArray[2]] = [numArray[0], numArray[2], numArray[1]]
    }
    if (numArray[0] > numArray[1]) {
        [numArray[0], numArray[1], numArray[2]] = [numArray[1], numArray[0], numArray[2]]
    }
    return {
        min: numArray[0],
        mid: numArray[0] === numArray[1] ? numArray[2] : numArray[1],
        max: numArray[2]
    };
}
module.exports = minMedMax
