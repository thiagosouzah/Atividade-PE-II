import { StackMain } from "./StackMain.js";
import { StackOdd  } from "./StackOdd.js";
import { StackPair } from "./StackPair.js";

function split(main, pair, odd){
    if (main.isEmpty()) {
        return undefined;
    }
    for (let i = main.size(); i >= 0; i--) {
        if(main.itens[i] % 2 == 0){
            pair.push(main.itens[i]);
            main.pop();
        } else {
            odd.push(main.itens[i]);
            main.pop();
        }
    }
    return 'Os valores foram transferidos';
}

const stackmain = new StackMain();
const stackodd = new StackOdd();
const stackpair = new StackPair();

stackmain.push(6); // 0
stackmain.push(5); // 1
stackmain.push(4); // 2
stackmain.push(3); // 3
stackmain.push(2); // 4
stackmain.push(1); // 5
console.log(stackmain.itens);

console.log('\nPilha de números pares VAZIA :', stackpair.itens);
console.log('Pilha de números impares VAZIA :',stackodd.itens);

console.log('\n',split(stackmain, stackpair, stackodd));

console.log('\nPilha de números pares APÓS a função SPLIT :', stackpair.itens);
console.log('Pilha de números impares APÓS a função SPLIT :',stackodd.itens);