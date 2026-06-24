/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(s) {

    // let m = new Map()
    // for(let i=0; i< s.length; i++){
    //     const sorted = s[i].split("").sort().join()
    //     if(!m.has(sorted)){
    //         m.set(sorted,[s[i]])
    //     }else{
    //         m.get(sorted).push(s[i])
    //     }
    // }
    // return [...m.values()]

    // Approach - 2

    const m = new Map() 

    for(let i=0; i < s.length; i++){
        //create has key
        const st = s[i]
        const freqArr = Array(26).fill(0)
        for(let j = 0; j < st.length; j++){
         let index = st[j].charCodeAt() - "a".charCodeAt()
          freqArr[index] =  freqArr[index] + 1 
        }
        let key = ""
        for(let k=0; k< freqArr.length; k++){
            key = key + "#"+ freqArr[k]
        }
        if(!m.has(key)) {
            m.set(key,[st])
        }else{
            m.get(key).push(st)
        }
    }
    return [...m.values()]
};