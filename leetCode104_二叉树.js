/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function(root) {
  //终止递归条件
  if(root == null) return 0;
  //二叉树的最大深度是左子树与右子树之间取最大值并加一
  return Math.max(maxDepth(root.left),maxDepth(root.right)) +1
};