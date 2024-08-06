import { ListNode } from "./helpers";
export type ArgsType = [ListNode | null];
export type ReturnType = ListNode | null;

export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;
  while(curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;

  }
  return prev;
}