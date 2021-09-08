export class Queue {

    constructor(){
        this.count = 0; //Tamanho
        this.lowestCount = 0; //Primeiro
        this.itens = []; //Person
    }

    enqueue(element){
        this.itens[this.count] = element;
        this.count++;
    }

    size(){
        return this.count - this.lowestCount;
    }

    isEmpty() {
        return this.size() === 0;
    }

    dequeue() { //Remove do início
        if(this.isEmpty()) {
            return undefined;
        } 
        const result = this.itens[this.lowestCount];
        delete this.itens[this.lowestCount];
        this.lowestCount++;
        return `Pessoa Removida: ${result.name}`;
    }

    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.itens[this.lowestCount];
    }

    clear() {
        this.itens = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    show() {
        if(this.isEmpty()) {
            return '';
        }
        let objString = '';
        for (let i = this.lowestCount; i < this.count; i++) {
            objString += `${this.itens[i]} `;
        }
        return objString;
    }
}