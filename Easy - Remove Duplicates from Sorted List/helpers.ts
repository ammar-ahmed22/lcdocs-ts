
export class ListNode<T = any> {
  val: T
  next: ListNode<T> | null;
  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val;
    this.next = (next === undefined ? null : next)
  }
}

export function generateListFromArray<T = any>(arr: T[]): ListNode<T> | null {
  if (arr.length === 0) {
    return null;
  }

  let head = new ListNode<T>(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}