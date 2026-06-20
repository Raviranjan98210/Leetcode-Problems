/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const m = new Map()
    if(s.length !== t.length)return false
    for(let i=0; i<s.length; i++){
        m.set(s[i], (m.get(s[i]) || 0) + 1)
    }
    for(let i=0; i<t.length; i++){
         m.set(t[i],(m.get(t[i]) || 0) - 1)
        if(!m.has(t[i]) || m.get(t[i])<0) return false
       
    }
    return true
};