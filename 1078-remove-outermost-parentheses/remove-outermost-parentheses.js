/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
   let count = 0;
    let ans = "";

    for (const ch of s) {
        if (ch === '(') {
            if (count > 0) {
                ans += ch;
            }
            count++;
        } else {
            count--;
            if (count > 0) {
                ans += ch;
            }
        }
    }

    return ans;
};