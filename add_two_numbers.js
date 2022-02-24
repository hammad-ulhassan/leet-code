/**
 * You are given two non-empty linked lists representing two
 * non-negative integers. The digits are stored in reverse order,
 * and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list. 
 * You may assume the two numbers do not contain any leading zero,
 * except the number 0 itself.
 */

 var addTwoNumbers = function(l1, l2) {
    let res = new ListNode();
    const retSumOfNode=(val1, val2)=>{return [~~((val1+val2)/10), ~~((val1+val2)%10)]}
    let carryFromLast=0;
    let current=res;
    while(l1 || l2){
        let v1 = l1?(l1.val?l1.val:0):0;
        let v2 = l2?(l2.val?l2.val:0):0;
        
        const sumArr = retSumOfNode(v1+carryFromLast,v2);
        carryFromLast=sumArr[0];
        current.val=sumArr[1];
        
        l1=l1?(l1.next?l1.next:null):null;
        l2=l2?(l2.next?l2.next:null):null;
        if(l1 || l2){
            current.next = new ListNode(); 
        }
        if(!l1 && !l2 && carryFromLast){
            current.next = new ListNode(carryFromLast)
        }
        current = current.next;
    }
    return (res)
    
};