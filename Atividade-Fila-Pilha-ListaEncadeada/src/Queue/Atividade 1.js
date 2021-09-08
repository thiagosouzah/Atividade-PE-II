import { Person } from "./Person.js";
import { Queue } from "./Queue.js";

let person1 = new Person('Maria', 'feminino', 22);
let person2 = new Person('thiago', 'masculino', 21);
let person3 = new Person('Leonardo', 'masculino', 25);

const queue = new Queue();

queue.enqueue(person1);
queue.enqueue(person2);
queue.enqueue(person3);

/*
    itens = {
        0: 'Maria',
        1: 'Thiago',
        2: 'Leonardo'
    };
*/

console.log(queue.peek());
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());