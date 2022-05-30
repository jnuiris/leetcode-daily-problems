import {TreeNode} from "../utils/DefineClass";
import {preTraverse} from "../common/Tree";

//  test测试用例
let one = new TreeNode(1)
let two = new TreeNode(0)
let three = new TreeNode(1)
let four = new TreeNode(0)
let five = new TreeNode(1)
let six = new TreeNode(0)
let seven = new TreeNode(1)

// one.left = two
// one.right = three
// two.left = four
// two.right = five
// three.left = six
// three.right = seven

// let res = preTraverse(one)

function sumRootToLeaf(root: TreeNode | null): number {
    let res = 0
    if(!root) {
        return 0
    }
    //  层序遍历
    let queue = [] as any
    queue.push([root as any, 0])
    while(queue.length) {
        let [now, total] = queue.shift()
        total = 2 * total + now.val
        if(!now.left && !now.right) {
            res += total
        }
        if(now.left) {
            queue.push([now.left, total])
        }
        if(now.right) {
            queue.push([now.right, total])
        }
    }

    return res
};

console.log(sumRootToLeaf(one))

//  todo:明天补充递归写法

