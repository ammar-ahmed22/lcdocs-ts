
export class ListNode<T = any> {
  val: T
  next: ListNode<T> | null;
  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val;
    this.next = (next === undefined ? null : next)
  }
}