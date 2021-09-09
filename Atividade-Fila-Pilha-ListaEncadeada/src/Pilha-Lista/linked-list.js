import { Node } from "./node.js";

export class LinkedList{

    constructor(){
        this.count = 0; // Número de elementos na lista
        this.head = undefined; // Indica o primeiro elemento da lista
    }

    // Inseri no final
    push(element){
        const node = new Node(element);
        let current; // Nó atual
        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;
            while(current.next != null){ // Obtem o último elemento
                current = current.next;
            }
            current.next = node;
        }
        this.count++; // Incrementa o tamanho da lista (+1)
    }
}