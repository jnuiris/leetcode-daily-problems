//  困难题，直接开摆了

var smallestDistancePair = function(nums, k) {
    nums.sort((item1, item2) => item1 - item2)
    let left = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i + 1] - nums[i] < left) {
            left = nums[i + 1] - nums[i]
        }
    }
    let right = nums[nums.length - 1] - nums[0]
    let ans = 0

    while(left <= right) {
        let mid = (left + right) >> 1
        let count = 0
        let i = 0
        for(let j = i + 1; j < nums.length; j++) {
            while(nums[j] - nums[i] > mid) {
                i++
            }
            count += j - i
            // if(nums[j] - nums[i] > mid) {
            //     i++
            // }else {
            //     count += j - i
            // }
        }
        if(count >= k) {
            right = mid - 1
            ans = mid
        }else {
            left = mid + 1
        }
    }

    return ans
};

// console.log(smallestDistancePair([1,3,1], 1))
// console.log(smallestDistancePair([1,1,1], 2))
// console.log(smallestDistancePair([1,6,1], 3))
console.log(smallestDistancePair([62,100,4], 2))