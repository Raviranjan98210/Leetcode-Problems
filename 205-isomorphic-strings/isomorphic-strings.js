/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const m = new Map()
    if(s.length !== t.length) return false
    for(let i= 0; i<s.length; i++){
        if(m.has(s[i])) continue
        if([...m.values()].includes(t[i])) return false
        m.set(s[i],t[i])
    }

    let str = ""
    for(let i=0; i<s.length; i++){
        str += m.get(s[i])
    }
    return t===str
};