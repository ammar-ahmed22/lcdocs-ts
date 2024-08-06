import { ListNode } from "./helpers";
export type ArgsType = [ListNode | null,ListNode | null];
export type ReturnType = ListNode | null;

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let temp = new ListNode(0);
  let p = temp;
  let p1 = list1;
  let p2 = list2;
  while(p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }
  p.next = p1 ?? p2;
  
  return temp.next;
}