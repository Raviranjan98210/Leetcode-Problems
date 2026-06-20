/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(s) {
    // Take first word, iterate over each character till it is common to all words
    // let fw = s[0]
    // let cp = ""
    // for(let i = 0 ; i < fw.length ; i++){
    //     let ch = fw[i]
    //     for(let j=1; j<s.length; j++){
    //         if( ch !== s[j][i]){
    //             return cp
    //         }
    //     }
    //     cp += ch
    // }
    // return cp

    // Approach -2 

    let x = 0;
    while(x < s[0].length){
        let ch = s[0][x]
        for(let i = 1; i < s.length; i++){
            if(s[i][x] !== ch || x===s[i].length){
                return s[0].substring(0,x)
            }
        }
        ++x
    }
    return s[0]
};