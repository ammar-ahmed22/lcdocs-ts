import { ListNode } from "./helpers";
export type ArgsType = [ListNode | null];
export type ReturnType = ListNode | null;

export function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while(slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next
  }
  return slow;
}