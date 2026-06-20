/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(s) {
    // Take first word, iterate over each character till it is common to all words
    let fw = s[0]
    let cp = ""
    for(let i = 0 ; i < fw.length ; i++){
        let ch = fw[i]
        for(let j=1; j<s.length; j++){
            if(!s[j][i] || ch !== s[j][i]){
                return cp
            }
        }
        cp += ch
    }
    return cp
};