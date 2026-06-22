/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // const m = new Map()
    // if(s.length !== t.length) return false
    // for(let i= 0; i<s.length; i++){
    //     if(m.has(s[i])) continue
    //     if([...m.values()].includes(t[i])) return false
    //     m.set(s[i],t[i])
    // }

    // let str = ""
    // for(let i=0; i<s.length; i++){
    //     str += m.get(s[i])
    // }
    // return t===str

    // approach-2

    let s2t = new Map()
    let t2s = new Map()
    for(let i=0; i<s.length; i++){
        if(!s2t.has(s[i]) && !t2s.has(t[i])){
            s2t.set(s[i],t[i])
            t2s.set(t[i],s[i])
        }else if(s2t.get(s[i]) !== t[i] || t2s.get(t[i]) !== s[i]) return false

    }
    return true

//foo
//bar
//far
// boo
};