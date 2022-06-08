/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1
    let high = Math.max(...piles)
    let ans = high
    let pre = ans

    while(low <= high) {
        ans = (low + high) >> 1
        if(isValid(ans)) {
            pre = ans
            high = ans - 1
        }else {
            low = ans + 1
        }
    }

    return pre

    function isValid(x) {
        let time = 0
        for(let pile of piles) {
            time += Math.ceil(pile / x)
        }
        return time <= h
    }
};

console.log(minEatingSpeed([3,6,7,11], 8))
console.log(minEatingSpeed([30,11,23,4,20], 5))
console.log(minEatingSpeed([30,11,23,4,20], 6))

// console.log(1 >> 1)