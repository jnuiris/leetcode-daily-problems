const fs = require('fs')

var findPairs = function(nums, k) {
    nums.sort((item1, item2) => item1 - item2)
    let res = 0
    let l = 0, r = l + 1
    while(l <= r && l < nums.length && r < nums.length) {
        while(nums[r] === nums[r + 1]) {
            r++
        }
        while(nums[l] === nums[l + 1] && (l + 1 != r)) {
            l++
        }
        if(nums[r] - nums[l] === k && l !== r) {
            res++
            l++
        }else if(nums[r] - nums[l] > k) {
            l++
        }else {
            r++
        }
    }
    return res
};

console.log(findPairs([1,1,1,1,1],
0))
//
console.log(findPairs([1,3,1,5,4],
0))
// //
console.log(findPairs([1,2,3,4,5], 0))
//
console.log(findPairs([3, 1, 4, 1, 5], 2))
console.log(findPairs([1, 2, 3, 4, 5], 1))
console.log(findPairs([1, 3, 1, 5, 4], 0))

// let arr = new Array(1000).fill(0)
// for(let i = 0; i < 1000; i++) {
//     arr[i] = Math.floor(Math.random() * 100)
// }
// console.log(arr)
//
// fs.writeFile('./test/6-16.txt', arr.toString(), err => {
//
// })
// console.log(findPairs(arr, 6))

console.log(findPairs([1,1],
0))


