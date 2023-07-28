/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    let length: number = 1;
    let startPos = head;
    if( startPos == null || startPos.next == null ) {
        return head;
    }
    while( startPos.next != null ) {
        length++;
        startPos = startPos.next;
    }
    if( k === length ) {
        return head;
    } else {
        if( k > length ) {
            k = k % length;
        }
        k = length - k;
        let c = 1;
        let startPos2 = head;
        while( c !== k ) {
            c+=1;
            startPos2 = startPos2.next;
        }
        startPos.next = head;
        head = startPos2.next;
        startPos2.next = null;
    }
    return head;
};
