function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let one = new TreeNode(5)
let two = new TreeNode(2)
// let three = new TreeNode(-3)

one.left = two
// one.right = three

let four = new TreeNode(5)
let five = new TreeNode(2)
let six = new TreeNode(-5)

four.left = five
four.right = six

function preTraverse(root) {
    if(root) {
        console.log(root.val)
        preTraverse(root.left)
        preTraverse(root.right)
    }
}

// preTraverse(one)

var findFrequentTreeSum = function(root) {
    let m = new Map()
    getTreeValue(root)
    let res = []
    let max = Math.max(...m.values())

    for(let [key, value] of m) {
        if(value === max) {
            res.push(key)
        }
    }

    return res

    function getTreeValue(root) {
        if(root && !root.left && !root.right) {
            const value = root.val
            m.set(value, m.get(value) ? m.get(value) + 1 : 1)
            return value
        }
        let value = root.val
        value += root.left ? getTreeValue(root.left) : 0
        value += root.right ? getTreeValue(root.right) : 0
        m.set(value, m.get(value) ? m.get(value) + 1 : 1)
        return value
    }
};

console.log(findFrequentTreeSum(one))
// console.log(findFrequentTreeSum(four))