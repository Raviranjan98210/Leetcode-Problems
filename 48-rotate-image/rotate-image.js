/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 var transpose = function(matrix,n) {
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n ; j++) {
            if(i !== j) {
                let temp =  matrix[j][i]
                matrix[j][i] = matrix[i][j]
                matrix[i][j] = temp;
            }
          
        }
    }
 }
var rotate = function(matrix) {
    // transpose each row
    // reverse each row

    let n = matrix.length;

    transpose(matrix,n)

    // reverse
    for(let i=0;i<n;i++) {
        matrix[i].reverse()
    }
    return matrix;
};