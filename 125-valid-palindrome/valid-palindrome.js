/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')

    // let start = 0;
    // let end = s.length-1
    // while(start<=end){
    //     if(s[start] !== s[end]){
    //         return false
    //     }
    //     start++
    //     end--
    // }
    // return true

    //Approach -2 

    s = s.toLowerCase()
    let start = 0
    let end = s.length - 1
    const reg = /[a-z0-9]/i
    while(start < end) {
        if(!s[start].match(reg)){
            ++start
        }else if(!s[end].match(reg)){
            --end
        }else if(s[start] === s[end]){
            ++start
            --end
        }else {
            return false
        }
    }
    return true
};