import { ISortable } from "./sortable";

class Node {
  next: Node | null = null;
  constructor(public data: number) { }
}

export class LinkedListGroup implements ISortable {
  head: Node | null = null;

  add(data: number): void {
    const nodeToAdd = new Node(data)
    if (!this.head) {
      this.head = nodeToAdd;
      return
    }

    let node = this.head;
    while (node.next) {
      node = node.next
    }
    node.next = nodeToAdd;
  }

  get length(): number {
    let counter = 0
    let node: Node | null = this.head
    while (node) {
      counter++
      node = node.next
    }
    return counter;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Error: Index out of bounds")
    }
    let counter = 0;
    let node: Node | null = this.head
    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }
    throw new Error("Error: index out of bounds")
  }

  compare(leftPos: number, rightPos: number): boolean {
    if (!leftPos || !rightPos) {
      throw new Error("Error: Comparison Error")
    }
    return leftPos > rightPos;
  }

  swap(leftPos: number, rightPos: number): void {
    if (!leftPos || !rightPos) {
      throw new Error("Error: cannot swap positions that do not exist")
    }
    const holdRightPos = rightPos
    leftPos = rightPos
    rightPos = holdRightPos
  }

  print(): void {
    if (!this.head) {
      return
    }
    let node: Node | null = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}