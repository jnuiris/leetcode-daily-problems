//  直接暴力法解决
//  暴力法稍微有点麻烦，还是用map解决

// var findAndReplacePattern = function(words, pattern) {
    // let pattern_arr = []
    //
    // pattern_arr = calPatternLength(pattern)
    //
    // let res = []
    // for(let word of words) {
    //     let now = calPatternLength(word, pattern_arr)
    //     if(now === false) {
    //         continue
    //     }
    //     res.push(word)
    // }
    //
    // return res
    //
    // function calPatternLength(pattern, arr) {
    //     let arrLen = []
    //     let add = 1
    //     for(let i = 0; i < pattern.length; i += add) {
    //         let now = []
    //         now.push(pattern[i])
    //         for(let j = i + 1; j < pattern.length; j++) {
    //             if(pattern[j] === pattern[i]) {
    //                 add = j - i + 1
    //                 now.push(pattern[j])
    //             }else {
    //                 break
    //             }
    //         }
    //         arrLen.push(now)
    //         if(arr && arrLen[arrLen.length - 1].length != arr[arrLen.length - 1]) {
    //             return false
    //         }
    //     }
    //     return arrLen.map(item => item.length)
    // }
// };

//  充要条件，转化为map排序后value一致
// var findAndReplacePattern = function(words, pattern) {
//     let res = []
//     let pattern_arr = sortArray(pattern)
//     for(let word of words) {
//         let arr = sortArray(word)
//         if(arr.join('') === pattern_arr.join('')) {
//             res.push(word)
//         }
//     }
//
//     return res
//
//     function sortArray(word) {
//         let m = new Map()
//         for(let letter of word) {
//             if(!m.has(letter)) {
//                 m.set(letter, 1)
//             }else {
//                 m.set(letter, m.get(letter) + 1)
//             }
//         }
//         let arr = []
//         for(let [key, value] of m) {
//             arr.push(value)
//         }
//         arr.sort()
//         return arr
//     }
// };

//  还是再换一种解法吧
var findAndReplacePattern = function(words, pattern) {
    let res = []

    for(let word of words) {
        if(word.length != pattern.length) {
            continue
        }
        if(match(word, pattern) && (match(pattern, word))) {
            res.push(word)
        }
    }

    return res

    function match(word, pattern) {
        let m = new Map()
        let flag = 1
        for(let i = 0; i < word.length; i++) {
            if(!m.has(word[i])) {
                m.set(word[i], pattern[i])
            }else {
                let now = m.get(word[i])
                if(now !== pattern[i]) {
                    flag = 0
                    break
                }
            }
        }
        return flag
    }

    return res
};


// console.log(findAndReplacePattern(["abc","deq", "mee","aqq","dkd","ccc"], 'abb'))
// console.log(findAndReplacePattern([], 'mee'))

// console.log(...[1, 2, 3])
// console.log([1, 2, 3].join('') === [1, 2, 3].join(''))

// console.log(findAndReplacePattern(["abc","cba","xyx","yxx","yyx"],
// "abc"))

console.log(findAndReplacePattern(["abc","cba","xyx","yxx","yyx"], 'abc'))