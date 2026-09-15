/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    const map = new Map()
    let low = 0
    let max = -Infinity
    for (let high = 0; high < fruits.length; high++) {
        map.set(fruits[high], (map.get(fruits[high]) || 0) + 1)
        while (map.size > 2) {
            map.set(fruits[low], map.get(fruits[low]) - 1)
            if(map.get(fruits[low]) === 0) map.delete(fruits[low])
            low++
        }
        max = Math.max(high - low + 1, max)
    }
    return max
};