/**
 * @param {number[][]} points
 * @return {boolean}
 */
// var isBoomerang = function(points) {
//     for(let i = 0; i < points.length; i++) {
//         for(let j = i + 1; j < points.length; j++) {
//             if(points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
//                 return false
//             }
//         }
//     }
//     points.sort((item1, item2) => {
//         return item1[0] - item2[0]
//     })
//     const point_one = points[0]
//     const point_two = points[1]
//     const point_three = points[2]
//
//     if(point_two[0] === point_three[0] && point_two[0] === point_one[0]) {
//         return false
//     }
//
//     const k1 = (point_two[1] - point_one[1]) / (point_two[0] - point_one[0])
//     const k2 = (point_three[1] - point_two[1]) / (point_three[0] - point_two[0])
//
//     if(isNaN(k1) && isNaN(k2)) {
//         return true
//     }else if(isNaN(k1) || isNaN(k2)) {
//         return false
//     }
//
//     return k1 === k2 === true ? false : true
// };

// console.log(isBoomerang([[1,1],[2,3],[3,2]]))
//
// console.log(isBoomerang([[1,1],[2,2],[3,3]]))

// console.log(isBoomerang([[0,0],[1,1],[1,1]]))
// console.log(isBoomerang([[1,0],[1,0],[1,0]]))
// console.log(isBoomerang([[73,31],[73,19],[73,45]]))

//  更新向量解法
var isBoomerang = function(points) {
    const vector1 = [points[1][0] - points[0][0], points[1][1] - points[0][1]]
    const vector2 = [points[2][0] - points[0][0], points[2][1] - points[0][1]]

    return vector1[0] * vector2[1] !== vector1[1] * vector2[0]
};

console.log(isBoomerang([[1,1],[2,3],[3,2]]))
console.log(isBoomerang([[1,1],[2,2],[3,3]]))
