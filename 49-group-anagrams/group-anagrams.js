/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(s) {

    let m = new Map()
    for(let i=0; i< s.length; i++){
        const sorted = s[i].split("").sort().join()
        if(!m.has(sorted)){
            m.set(sorted,[s[i]])
        }else{
            m.get(sorted).push(s[i])
        }
    }
    return [...m.values()]
};