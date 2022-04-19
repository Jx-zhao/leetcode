/**
 * Definition for singly-linked list.
 * function ListNode(val){
 *    this.val = val;
 *    this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function(head){
  //1.如果有环，遍历的值肯定会又重复出现的，否则就没有环
  //let cache = new Set()
  // while (head) {
  //   if(caches.has(head)){
  //     return true
  //   }else{
  //     caches.add(head)
  //   }
  //   head = head.next
  // }
  // return false
  //2.双指针，如果有环两个指针肯定会套圈相等，否则不会相等
  let slow = head
  let fast = head
  while(fast && fast.next){
    fast = fast.next.next
    slow = slow.next
    if(slow === fast) return true
  }
  return false
}