/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // Todo: Check striver brute approach as well
    // Brute Force approach(this is by Me )
   const m = matrix.length
   const n = matrix[0].length
//     let mp = [];
//     for(let i=0; i<m; i++){
//         for(let j=0;j<n;j++){
//             if(matrix[i][j]===0){
//                 mp.push([i,j])   
//             }
//         }
//     }
   
//     for(let [key,value] of mp){
//         for(let i=0;i<n;i++) {
//             matrix[key][i]=0
//         }
//         for(let j=0; j<m; j++) {
//             matrix[j][value] = 0
//         }
//     }

//    return matrix;

    // Optimal approach 

    //Virtual rows and columns
    // columns = matrix[0][...]
    // rows = matrix[...][0]
    let col0=1;
    for(let i=0;i<m;i++){
        for(let j=0; j<n; j++) {
            if(matrix[i][j]===0){
                // mark row to zero
                    matrix[i][0]=0;
                // mark column to zero
                if(j !==0) {
                    matrix[0][j] = 0
                }else {
                    col0=0;
                }
            }
        }
    }

    // Mark 0 except for the first row and column as they are the deciding factor
    // for other elements

    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++) {
            if(matrix[i][j] !== 0) {
                if(matrix[i][0]===0 || matrix[0][j]===0) {
                    matrix[i][j]=0;
                }
            }
        }
    }

   if(matrix[0][0] === 0){
    for(let i=0;i<n;i++){
        matrix[0][i] = 0;
    }
   }
   if(col0 === 0){
    for(let i=0; i<m;i++) {
        matrix[i][0] = 0;
    }
   }

   return matrix;
};