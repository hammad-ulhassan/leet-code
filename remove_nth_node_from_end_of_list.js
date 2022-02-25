/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let tail=head;
    let length=0;
    while(tail){
        length++;
        tail=tail.next;
    }
    let distance = length-n;
    let i=1;
    tail=head;
    if(!distance){
        head=head.next;
        return head;
    }
    while(i<distance){
        i++;
        tail=tail.next;
    }
    tail.next = tail.next.next;
    return head;
};