/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // right->bottom-> left->top
    let n = matrix.length;
    let m = matrix[0].length;
    let left =0;
    let top = 0;
    let right = m-1
    let bottom = n-1;
   let spiral=[]
   while(left <= right && top <= bottom) {
    // From left to right (i.e left constant here)
        for(let i=top; i<=right; i++) {
            spiral.push(matrix[left][i])
        }
        top++;
    // From top to bottom (i.e right constant here)
        for(let i=top; i<=bottom; i++) {
            spiral.push(matrix[i][right])
        }
        right--;
    // From Right to left (i.e bottom constant here)
    if(top<=bottom) {
        for(let i= right; i>=left; i--) {
            spiral.push(matrix[bottom][i]) //[2][1]
        }
        bottom--;
    }
    // From bottom to top
    if(left<=right) {
        for(let i=bottom; i>= top; i--) {
            spiral.push(matrix[i][left]) //1
        }
        left++;
    }
       
     }
    return spiral;
};