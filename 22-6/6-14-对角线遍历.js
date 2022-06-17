// var findDiagonalOrder = function(mat) {
//     if(mat[0].length === 1) {
//         let arr = []
//         for(let i = 0; i < mat.length; i++) {
//             arr.push(mat[i][0])
//         }
//         return arr
//     }
//     let resStart = []
//     let flagStart = 1
//     for(let j = 0; j < mat[0].length; j++) {
//         let arr = []
//         let now = j
//         for(let i = 0; i <= j; i++) {
//             if(mat[i]) {
//                 arr.push(mat[i][now--])
//             }
//         }
//         flagStart *= -1
//         arr = flagStart === 1 ? arr : arr.reverse()
//         resStart.push(...arr)
//     }
//     let resEnd = []
//     let flagEnd = 1
//     for(let i = mat.length - 1; i > 0; i--) {
//         let arr = []
//         let now = i
//         for(let j = mat[0].length - 1; j >= i; j--) {
//             if(mat[now]) {
//                 arr.push(mat[now++][j])
//             }
//         }
//         flagEnd *= -1
//         arr = flagEnd === 1 ? arr : arr.reverse()
//         resEnd.unshift(...arr)
//     }
//
//     return [...resStart, ...resEnd]
// };
//
// function randomArr() {
//     let m = Math.floor(Math.random() * 10) + 10
//     let n = Math.floor(Math.random() * 10) + 10
//     let arr = new Array(m).fill(0).map(() => new Array(n).fill(0))
//     for(let i = 0; i < m; i++) {
//         for(let j = 0; j < n; j++) {
//             let random = Math.floor(Math.random() * 100) + 10
//             arr[i][j] = random
//         }
//     }
//     return arr
// }
//
// console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))
//
// // console.log(randomArr())
//
// // console.log(findDiagonalOrder(randomArr()))
//
// // console.log(findDiagonalOrder([[1]]))
//
// // console.log(findDiagonalOrder([[2,3]]))
//
// console.log(findDiagonalOrder([[3],[2], [1], [0]]))
//
// // console.log(findDiagonalOrder([[1, 2, 3, 4]]))

var findDiagonalOrder = function(mat) {
    let i = 0
    let m = mat.length
    let n = mat[0].length
    let res = []

    while(i < m + n) {
        let x1 = i >= m ? m - 1 : i
        let y1 = i - x1

        while(x1 >= 0 && y1 < n) {
            res.push(mat[x1--][y1++])
        }

        i++
        if(i >= m + n) {
            break
        }

        let y2 = i >= n ? n - 1 : i
        let x2 = i - y2

        while(y2 >= 0 && x2 < m) {
            res.push(mat[x2++][y2--])
        }
        i++
    }
    return res
};

console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))