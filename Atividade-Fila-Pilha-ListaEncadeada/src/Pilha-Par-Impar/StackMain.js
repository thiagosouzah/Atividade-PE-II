export class StackMain{
    constructor(){
        this.itens = [];
    }

    push(element){
        this.itens.push(element);
    }

    pop(){
        return this.itens.pop();
    }

    size(){
        return this.itens.length -1; // -1 para igualar com as posições do vetor
    }

    isEmpty(){
        return this.itens.length === 0;
    }
}