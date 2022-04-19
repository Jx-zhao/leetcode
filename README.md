#### 203.移除链表元素

##### 1.递归方法

判断head === null 如果head等于空 直接返回head

head.next有值就一直删除，当head.val ===val 就返回head.naxt

##### 2.设置哨兵元素

设置一个哨兵节点 因为哨兵节点一直是null 最后return 哨兵.next

定义一个 ele = ｛next：head｝

如果元素节点一直有p节点

