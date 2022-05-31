//  拓扑排序

//  todo:算法效率过低，拓扑排序用图实现的，有很大优化空间

var alienOrder = function(words) {
    //  构建图
    let s = new Set()
    for(let i = 0; i < words.length; i++) {
        const now = words[i]
        for(let j = 0; j < now.length; j++) {
            if(!s.has(now[j])) {
                s.add(now[j])
            }
        }
    }
    let arr = Array.from(s)
    let m = new Map()
    for(let letter of arr) {
        m.set(letter, [new Set(), 0])
    }
    for(let i = 0; i < words.length - 1; i++) {
        for(let j = i + 1; j < words.length; j++) {
            let pre = words[i]
            let next = words[j]
            let l = 0, r = 0
            let flag = 0
            while(l < pre.length && r < next.length) {
                if(pre[l] !== next[r]) {
                    if(!m.get(pre[l])[0].has(next[r])) {
                        m.get(next[r])[1]++
                    }
                    flag = 1
                    m.set(pre[l], [m.get(pre[l])[0].add(next[r]), m.get(pre[l])[1]])
                    break
                }
                l++
                r++
            }
            if(pre.length > next.length && !flag) {
                return ''
            }
        }
    }
    //  拓扑排序
    let queue = []
    let output = []
    //  初始化拓扑排序
    for(let [key, value] of m) {
        if(value[1] === 0) {
            queue.push(key)
            break
        }
    }
    while(queue.length) {
        let now = queue.shift()
        output.push(now)
        let pointTo = m.get(now)[0]
        m.delete(now)
        for(let key of pointTo) {
            m.get(key)[1]--
        }
        let flag = 0
        for(let [key, value] of m) {
            if(value[1] === 0) {
                queue.push(key)
                flag = 1
                break
            }
        }
        if(!flag) {
            break
        }
    }
    if(output.length === s.size) {
        return output.join('')
    }
    return ''
};

// alienOrder(['abc', 'ab'])

// console.log('1' < '2')

console.log(alienOrder(["wrt","wrf","er","ett","rftt"]))
console.log(alienOrder(["z","x"]))
console.log(alienOrder(["z","x","z"]))
console.log(alienOrder(['abc', 'ab']))
console.log(alienOrder(['z', 'z']))

// const arr = new Array(10).fill(0).map(() => new Array(10).fill(0))
// console.log(arr)