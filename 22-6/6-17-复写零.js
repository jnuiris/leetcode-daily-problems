//  todo:待用双指针解决该问题

var duplicateZeros = function(arr) {
    let count = 0
    let l = arr.length
    while(count < l) {
        if(arr[count] === 0) {
            arr.splice(count++, 0, 0)
            arr.pop()
        }
        count++
    }
};

duplicateZeros([1,0,2,3,0,4,5,0])
duplicateZeros([1,2,3])
duplicateZeros([1])
duplicateZeros([0, 0])

// let arr = [1, 2, 3]
// arr.splice(1, 0, 4)
// console.log(arr)

duplicateZeros([0,4,1,0,0,8,0,0,3])