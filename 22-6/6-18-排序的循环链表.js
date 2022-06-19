function Node(val, next) {
    this.val = val
    this.next = next
}

// let one = new Node(1)
// one.next = one

let one = new Node(3)
let two = new Node(5)
let three = new Node(1)
//
one.next = two
two.next = three
three.next = one

function traverseList(start, len) {
    while(start && !start.flag3) {
        start.flag3 = 1
        console.log(start.val)
        start = start.next
    }
}


//  试试三叶的解法
//  重点是把握两点:(1)最大值的下一个就是最小值，存在临界点这个概念  (2)从临界点开始就是从小到大排列了
var insert = function(head, insertVal) {
    let t = new Node(insertVal)
    t.next = t
    if(!head) {
        return t
    }
    let start = head
    let min = Number.MAX_SAFE_INTEGER
    let max = Number.MIN_SAFE_INTEGER
    while(1) {
        if(start.val < min) {
            min = start.val
        }
        if(start.val > max) {
            max = start.val
        }
        start = start.next
        if(start === head) {
            break
        }
    }
    //  找分割点
    let devide = null
    while(1) {
        if(start.val === max && start.next.val === min) {
            devide = start
            break
        }
        start = start.next
    }
    //  需要判断插入点和分割点之间的关系
    if(insertVal <= min || insertVal >= max) {
        let next = devide.next
        devide.next = t
        t.next = next
        return head
    }
    //  如果插入点不在min和max之间
    let now = devide
    while(1) {
        if(now.val <= insertVal && insertVal <= now.next.val) {
            let next = now.next
            now.next = t
            t.next = next
            return head
        }
        now = now.next
    }
    return head
};

// var insert = function(head, insertVal) {
//     //  为空的情况
//     if(!head) {
//         let node = new Node(insertVal)
//         node.next = node
//         return node
//     }
//     let traverse = []
//     let start = head
//     //  插入的并不是最大值也不是最小值
//     while(start && !start.flag) {
//         if(insertVal >= start.val && insertVal <= start.next.val) {
//             let insert = new Node(insertVal)
//             let next = start.next
//             start.next = insert
//             insert.next = next
//             return head
//         }
//         start.flag = 1
//         start = start.next
//     }
//     //  插入的是最值
//     while(start && !start.flag1) {
//         traverse.push(start.val)
//         start.flag1 = 1
//         start = start.next
//     }
//     let min = Math.min(...traverse)
//     let max = Math.max(...traverse)
//     if(insertVal <= min) {
//         let pre
//         while(start) {
//             if(start.val === min) {
//                 let insert = new Node(insertVal)
//                 if(pre) {
//                     let next = pre.next
//                     pre.next = insert
//                     insert.next = next
//                     return head
//                 }else {
//                     let pre1
//                     while(!start.flag4) {
//                         start.flag4 = 1
//                         pre1 = start
//                         start = start.next
//                     }
//                     pre1.next = insert
//                     insert.next = start
//                     return head
//                 }
//             }
//             pre = start
//             start = start.next
//         }
//     }
//     if(insertVal >= max) {
//         while(start) {
//             if(start.val === max && (start.val !== start.next.val || start === start.next)) {
//                 let insert = new Node(insertVal)
//                 let next = start.next
//                 start.next = insert
//                 insert.next = next
//                 return head
//             }
//             start = start.next
//         }
//     }
// };

// console.log()

traverseList(insert(one, 5))

// console.log(Math.max(...[1, 3, 1, 4, 5]))