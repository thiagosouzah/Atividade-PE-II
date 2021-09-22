import { Set } from './set.js'

const setA = new Set()
const setB = new Set()

setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);

setB.add(2);
setB.add(3);
setB.add(5);
setB.add(6);

console.log(setA.values());
console.log(setB.values());

const interAB = setA.intersection(setB);

console.log(interAB.values());