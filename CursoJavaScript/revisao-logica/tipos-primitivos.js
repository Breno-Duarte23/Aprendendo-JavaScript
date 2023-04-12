//strings, number (int,floats), boolean
// undefined, null, symbol(ES6)

let minha_var = "minha string";
let minha_var2 = 'minha \"string\"com aspas simples';


var minhavar3 = `Minha template literal`;


let idade = 40;

//let msg = "Eu possuo " +idade+ " anos";

let msg = `eu possuo ${idade} anos`;

//console.log(msg); 
//console.log(typeof msg, typeof idade, typeof minha_var);

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

const isValid = false;
console.log(`isValid: ${true}`);

let varTeste = null; 
console.log(varTeste);
varTeste = 10
console.log(typeof varTeste, varTeste);