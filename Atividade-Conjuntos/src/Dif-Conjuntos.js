import { Set } from './set.js'

const setA = new Set()
const setB = new Set()

setA.add(4);
setA.add(7);
setA.add(9);

setB.add(4);
setB.add(7);
setB.add(10);

console.log(setA.values());
console.log(setB.values());

const difAB = setA.difference(setB);

console.log(difAB.values());