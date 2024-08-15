/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // Brute Force approach
   const m = matrix.length
   const n = matrix[0].length
    let mp = [];
    for(let i=0; i<m; i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]===0){
                mp.push([i,j])   
            }
        }
    }
   
    for(let [key,value] of mp){
        for(let i=0;i<n;i++) {
            matrix[key][i]=0
        }
        for(let j=0; j<m; j++) {
            matrix[j][value] = 0
        }
    }

   return matrix;
    
};