/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {

    let m = new Map()
    for(let i=0; i< s.length; i++){
        m.set(s[i],(m.get(s[i])|| 0)+1)
    }
    let vf = 0
    let cf = 0

    for(const [ch,count] of m){
        if(["a","e","i","o","u"].includes(ch)){
            vf = Math.max(vf,count)
        }else{
            cf = Math.max(cf,count)
        }
    }
    return vf+cf
    
    
};