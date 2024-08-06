import { ListNode } from "../template/helpers";
export type ArgsType = [ListNode | null];
export type ReturnType = ListNode | null;

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let curr = head;
  while(curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}