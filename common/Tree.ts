import {TreeNode} from "../utils/DefineClass";

export function preTraverse(root: TreeNode | null): Array<any>{
    let res = [] as any;
    function getRes(root: TreeNode | null) {
        if(root) {
            res.push(root.val)
            getRes(root.left)
            getRes(root.right)
        }
    }
    getRes(root)
    return res
}