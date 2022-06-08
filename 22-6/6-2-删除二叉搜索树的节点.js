const TreeClass = require('../utils/Tree')
const TreeTraverse = require('../common/TreeMethods')

let one = new TreeClass.TreeNode(100)
let two = new TreeClass.TreeNode(50)
let three = new TreeClass.TreeNode(200)
let four = new TreeClass.TreeNode(48)
let five = new TreeClass.TreeNode(52)
let six = new TreeClass.TreeNode(150)
let seven = new TreeClass.TreeNode(250)
let eight = new TreeClass.TreeNode(38)
let nine = new TreeClass.TreeNode(51)
let ten = new TreeClass.TreeNode(54)
let eleven = new TreeClass.TreeNode(240)
let twelve = new TreeClass.TreeNode(242)

one.left = two
one.right = three
two.left = four
two.right = five
three.left = six
three.right = seven
four.left = eight
five.left = nine
five.right = ten
seven.left = eleven
eleven.right = twelve

// let one = new TreeClass.TreeNode(5)
// let two = new TreeClass.TreeNode(3)
// let three = new TreeClass.TreeNode(6)
// let four = new TreeClass.TreeNode(2)
// let five = new TreeClass.TreeNode(4)
// let six = new TreeClass.TreeNode(7)
//
// one.left = two
// one.right = three
// two.left = four
// two.right = five
// three.right = six

// console.log(TreeTraverse.preTraverse(one))

//  todo:暂时搞不定 过段时间再做
var deleteNode = function(root, key) {
    //  先定位到该节点
    if(!root) {
        return null
    }
    let nowNode = null
    let searchNode = root
    let parentNode = null
    while(searchNode) {
        if(searchNode.val > key) {
            parentNode = searchNode
            searchNode = searchNode.left
        }else if(searchNode.val < key) {
            parentNode = searchNode
            searchNode = searchNode.right
        }else {
            nowNode = searchNode
            break
        }
    }

    //  只存在左节点或者右节点的情况
    if(!nowNode.right) {
        if(parentNode.val < key) {
            parentNode.right = nowNode.left
        }else {
            parentNode.left = nowNode.left
        }
    }
    if(!nowNode.left) {
        if(parentNode.val < key) {
            parentNode.right = nowNode.right
        }else {
            parentNode.left = nowNode.right
        }
    }

    //  既存在左节点也存在右节点的情况
    let rightNode = null
    let preRight = rightNode
    if(nowNode.left && nowNode.right) {
        rightNode = nowNode.left
        while(rightNode) {
            preRight = rightNode
            rightNode = rightNode.left
        }
    }
    console.log(preRight)
    return root
};

// deleteNode(one, 3)

console.log(TreeTraverse.preTraverse(deleteNode(one, 50)))
// console.log(TreeTraverse.preTraverse(deleteNode(one, 7)))