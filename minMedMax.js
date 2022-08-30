const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    let numArray = [n1,n2,n3], temp;
    if (numArray[0] > numArray[1]) {
        temp = numArray[1];
        numArray[1] = numArray[0];
        numArray[0] = temp;
    }
    if (numArray[1] > numArray[2]) {
        temp = numArray[2];
        numArray[2] = numArray[1];
        numArray[1] = temp;
    }
    if (numArray[0] > numArray[1]) {
        temp = numArray[1];
        numArray[1] = numArray[0];
        numArray[0] = temp;
    }
    return {
        min: numArray[0],
        mid: numArray[0] === numArray[1] ? numArray[2] : numArray[1],
        max: numArray[2]
    };
}
module.exports = minMedMax
