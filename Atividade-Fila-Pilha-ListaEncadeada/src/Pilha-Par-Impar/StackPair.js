export class StackPair{
    constructor(){
        this.itens = [];
    }

    push(element){
        this.itens.push(element);
    }

    clear(){
        this.itens = {}
    }
}