// import {TreeNode} from "../utils/DefineClass";
// import {preTraverse} from "../common/Tree";
// const TreeNode = require('../utils/DefineClass.ts')
const TreeClass = require('../utils/Tree')
const TreeTraverse = require('../common/TreeMethods')

let TreeNode = TreeClass.TreeNode
let preTraverse = TreeTraverse.preTraverse

// console.log(TreeNode)

//  test测试用例
let one = new TreeNode(1)
let two = new TreeNode(0)
let three = new TreeNode(1)
let four = new TreeNode(0)
let five = new TreeNode(1)
let six = new TreeNode(0)
let seven = new TreeNode(1)
//
one.left = two
one.right = three
two.left = four
two.right = five
three.left = six
three.right = seven

// console.log(preTraverse(one))

var sumRootToLeaf = function(root) {
    let total = 0

    if(!root) {
        return 0
    }

    recursion(root, 0)

    return total

    function recursion(root, val) {
        if(!root) {
            return
        }
        if(!root.left && !root.right) {
            total += 2 * val + root.val
        }
        recursion(root.left, 2 * val + root.val)
        recursion(root.right, 2 * val + root.val)
    }
};

console.log(sumRootToLeaf(one))

