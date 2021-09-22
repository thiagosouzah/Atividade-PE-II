export class Set{
    constructor(){
        this.items = {};
    }

    has(element){
        return element in this.items;
    }

    add(element){
        if (!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element){
        if (this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }

    // O método values devolve um array com os valores das propriedades de um objeto
    values(){
        return Object.values(this.items); 
    }

    union(otherSet){
        const unionSet = new Set();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }
  
    intersection(otherSet){
        const interSet = new Set();
        
        for (let elem of otherSet.values()) {
            if (this.has(elem)) {
                interSet.add(elem);
            }
        }
        return interSet;
    }

    difference(otherSet){
        const difSet = new Set();
        const values = this.values();

        for(let i = 0; i < values.length; i++) {
            difSet.add(values[i])
        }

        for (let elem of otherSet.values()) {
            difSet.delete(elem)            
        }
        return difSet
    }
    
}