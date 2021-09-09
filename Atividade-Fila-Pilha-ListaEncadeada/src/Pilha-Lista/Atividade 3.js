import { LinkedList } from "./linked-list.js";
import { Stack } from "./Stack.js";

const stack = new Stack();
const list = new LinkedList();
const list2 = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

list2.push(5);
list2.push(6);
list2.push(7);
list2.push(8);

console.log(stack.isEmpty());

stack.push(list);
stack.push(list2);

console.log(stack);

