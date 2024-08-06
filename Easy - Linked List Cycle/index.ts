import { ListNode } from "./helpers"
export type ArgsType = [ListNode | null];
export type ReturnType = boolean;

export function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while(slow && fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
    if (slow && fast && slow === fast) return true
  }
  return false;
}