import { Stack1 } from "./stack1.js";
import { Stack2 } from "./stack2.js";

function concatenate(s1, s2){
    if (s1.isEmpty() && s2.isEmpty()) {
        console.log('As duas pilhas estão vazias !!!');
        return undefined;
    }
    for (let i = s2.size(); i >= 0 ; i--) {
        s1.push(s2.itens[i]);
        s2.pop();
    }
}

const stack1 = new Stack1();
const stack2 = new Stack2();

stack1.push(6); // 0
stack1.push(5); // 1
stack1.push(4); // 2

stack2.push(1); // 0
stack2.push(2); // 1
stack2.push(3); // 2

console.log('\nPilha 1 ANTES da função CONCATENATE :', stack1.itens);
console.log('Pilha 2 ANTES da função CONCATENATE :',stack2.itens);

concatenate(stack1, stack2);

console.log('\nPilha 1 APÓS da função CONCATENATE :', stack1.itens);
console.log('Pilha 2 APÓS da função CONCATENATE :',stack2.itens);