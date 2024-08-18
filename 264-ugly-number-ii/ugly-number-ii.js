/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
 let uglyNumbers = [];
    uglyNumbers.push(1); // The first ugly number is 1
    let i2 = 0, i3 = 0, i5 = 0; // indices for multiples of 2, 3, and 5

    while (uglyNumbers.length < n) {
        // Calculate the next candidates for ugly numbers
        let next2 = uglyNumbers[i2] * 2;
        let next3 = uglyNumbers[i3] * 3;
        let next5 = uglyNumbers[i5] * 5;

        // Choose the smallest one to be the next ugly number
        let nextUgly = Math.min(next2, next3, next5);
        uglyNumbers.push(nextUgly);

        // Move the index forward for the factor that matched
        if (nextUgly === next2) i2++;
        if (nextUgly === next3) i3++;
        if (nextUgly === next5) i5++;
    }

    return uglyNumbers[n-1]; // Return the nth ugly number
};