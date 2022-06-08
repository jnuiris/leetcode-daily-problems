//  这道题是回溯剪枝的典型例题
var makesquare = function(matchsticks) {
    function backtrack(sortTicks, idx, buckets, edgeLen) {
        if(idx >= sortTicks.length) {
            return true
        }
        for(let i = 0; i < 4; i++) {
            if(buckets[i] + sortTicks[idx] > edgeLen) {
                continue
            }
            buckets[i] += sortTicks[idx]
            // return backtrack(sortTicks, idx + 1, buckets, edgeLen)
            if(backtrack(sortTicks, idx + 1, buckets, edgeLen)) {
                return true
            }
            buckets[i] -= sortTicks[idx]
        }
        return false
    }
    const total = matchsticks.reduce((pre, next) => pre + next, 0)
    if(matchsticks.length < 4 || total % 4 !== 0) {
        return false
    }
    let buckets = new Array(4).fill(0)
    let sortTicks = matchsticks.sort((item1, item2) => item2 - item1)
    return backtrack(sortTicks, 0, buckets, total / 4)
};

console.log(makesquare([1,1,2,2,2]))
console.log(makesquare([3,3,3,3,4]))
console.log(makesquare([5,5,5,5,4,4,4,4,3,3,3,3]))

// const arr = [1, 2, 3]
// const total = arr.reduce((pre, next) => pre + next, 0)
// console.log(total)