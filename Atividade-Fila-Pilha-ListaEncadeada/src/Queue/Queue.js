export class Queue {

    constructor(){
        this.itens = []; //Person
    }

    enqueue(element){
        this.itens.push(element)
    }

    size(){
        return this.itens.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    dequeue() { //Remove do início
        let result = this.itens.shift();
        return `Pessoa Removida: ${result.name}`;
    }

    peek() {
        return !this.isEmpty() ? this.itens[0] : undefined;
    }

    clear() {
        this.itens = {};
    }
}