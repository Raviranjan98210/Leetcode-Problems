/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {

    // let m = new Map()
    // for(let i=0; i< s.length; i++){
    //     m.set(s[i],(m.get(s[i])|| 0)+1)
    // }
    // let vf = 0
    // let cf = 0

    // for(const [ch,count] of m){
    //     if(["a","e","i","o","u"].includes(ch)){
    //         vf = Math.max(vf,count)
    //     }else{
    //         cf = Math.max(cf,count)
    //     }
    // }
    // return vf+cf
    
    const isVowel = (c) => {
        return c === "a" || c === "e" || c === "i" || c === "o" || c === "u";
    };

    const mp = {};
    for (const ch of s) {
        mp[ch] = (mp[ch] || 0) + 1;
    }

    let vowel = 0,
        consonant = 0;
    for (let ch = "a".charCodeAt(0); ch <= "z".charCodeAt(0); ch++) {
        const char = String.fromCharCode(ch);
        const count = mp[char] || 0;
        if (isVowel(char)) {
            vowel = Math.max(vowel, count);
        } else {
            consonant = Math.max(consonant, count);
        }
    }
    return vowel + consonant;
};