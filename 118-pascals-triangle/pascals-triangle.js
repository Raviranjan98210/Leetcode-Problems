/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var genRow = function(row) {
    let res = 1
    const temp = []
    temp.push(res)
    for(let col=1; col<row; col++) {
        res = res *((row-col))
        res = res/col
        temp.push(res)
    }
    return temp;
 }
var generate = function(numRows) {
    const pascal = []
    for(let i=1; i<=numRows;i++) {
     const  row = genRow(i)
     console.log(row)
     pascal.push(row)
    }
    return pascal;
    
};