var heightChecker = function(heights) {
    const originHeights = [...heights]
    let sortHeights = heights.sort((a, b) => a - b)

    let res = 0
    for(let i = 0; i < originHeights.length; i++) {
        if(originHeights[i] != sortHeights[i]) {
            res++
        }
    }

    return res
};

// console.log(heightChecker([1,1,4,2,1,3]))
// console.log(heightChecker([5,1,2,3,4]))
// console.log(heightChecker([1,2,3,4,5]))

console.log(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]))