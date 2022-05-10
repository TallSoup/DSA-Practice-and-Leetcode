class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// iterative
const linkedListValues = (head) => {
  let current = head;
  const newArray = [];
  while (current !== null) {
    newArray.push(current.val);
    current = current.next;
  }
  return newArray;
};

//recursive
const linkedListValues = (head) => {
  const newArray = [];
  fillValues(head, newArray);
  return newArray;
};

const fillValues = (head, newArray) => {
  if (head === null) {
    return;
  }
  newArray.push(head.val);
  fillValues(head.next, newArray);
};

console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]
