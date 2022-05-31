function preTraverse(root) {
    let res = []
    function getRes(root) {
        if(root) {
            res.push(root.val)
            getRes(root.left)
            getRes(root.right)
        }
    }
    getRes(root)
    return res
}

module.exports.preTraverse = preTraverse