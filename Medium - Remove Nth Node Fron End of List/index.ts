import { ListNode, generateListFromArray } from "./helpers";
export type ArgsType = [ListNode | null,number];
export type ReturnType = ListNode | null;

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  
  let temp = new ListNode(0);
  temp.next = head;
  let a: ListNode | null = temp;
  let b: ListNode | null = temp;
  let i = 0;
  while(i < n + 1) {
    a = a!.next;
    i++;
  }

  while(a) {
    a = a.next;
    b = b!.next;
  }

  b!.next = b!.next!.next;
  
  return temp.next;
}

function printList(head: ListNode | null) {
  let curr = head;
  let res = "";
  while(curr) {
    res += `${curr.val}`;
    // console.log(curr.val);
    if (curr.next) {
      res += " -> ";
    }
    curr = curr.next;
  }
  console.log(res);
}

let list = removeNthFromEnd(generateListFromArray([1, 2, 3, 4]), 3);
printList(list);
