/**
 * @param {number[][]} rects
 */

//  todo:这个有时间做一下吧，水塘抽样/前缀和二分
var Solution = function(rects) {
    this.rects = rects
    this.arr = [0]
    for(let rect of rects) {
        const a = rect[0]
        const b = rect[1]
        const x = rect[2]
        const y = rect[3]
        const area = (x - a) * (y - b)
        this.arr.push(this.arr[this.arr.length - 1] + area)
    }
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    const total_area = this.arr[this.arr.length - 1]
    const randomNum = Math.floor(Math.random() * total_area) + 1
    let l = 0, r = this.arr.length - 1
    let mid = (l + r) >> 1
    while(l < r) {
        mid = (l + r) >> 1
        const res = []
        const select = this.rects[mid]
        res.push(select[0] + Math.floor(Math.random() * (select[2] - select[0])))
        res.push(select[1] + Math.floor(Math.random() * (select[3] - select[1])))
        if(this.arr[mid] < randomNum) {
            l = mid + 1
        }else if(this.arr[mid] > randomNum) {
            r = mid
        }else {
            return res
        }
    }
    l--
    let res1 = []
    let select1 = this.rects[l]
    res1.push(select1[0] + Math.floor(Math.random() * (select1[2] - select1[0])))
    res1.push(select1[1] + Math.floor(Math.random() * (select1[3] - select1[1])))
    return res1
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

let input = new Solution([[-2, -2, 1, 1], [2, 2, 4, 6]])
console.log(input.pick())
