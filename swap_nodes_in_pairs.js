/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let runPtr = head;
    let headswp = false;
    let lasti=null;
    while(runPtr){
        let i = runPtr;
        let swp = i.next;
        if(!swp){
            return head;
        }
        i.next=swp.next;
        swp.next=i;
        if(lasti){
            lasti.next=swp;
        }
        if(!headswp){
            head=swp;
            headswp=true;
        }
        lasti=i;
        runPtr=runPtr.next;
    }
    return head;
};