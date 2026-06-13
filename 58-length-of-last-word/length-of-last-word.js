/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Basic approach (language agnostic)
    let count =0
    let length = s.length-1
    while(length>=0){
        if(s[length] !== " ")count++
        else if(count>0)break
        length--
    }
    return count


    
};