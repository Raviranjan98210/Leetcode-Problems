/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (str) {
    let count = 0;
    let level = -1;
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            ++level;
            ans += (level ? str[i] : "");
        } else {
            ans += (level ? str[i] : "");
            --level;
        }
    }
    return ans;
};