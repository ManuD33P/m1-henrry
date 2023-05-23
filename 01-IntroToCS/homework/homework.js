'use strict';

function BinarioADecimal(num) {
const numArray = [...num].reverse();
let result =0;
numArray.forEach((element,index) => {
   result += element * Math.pow(2,index);
});
return result;
}

function DecimalABinario(num) {
let cociente=num;
let resultados = [];
while(cociente>0){
   resultados.push(cociente%2);
   cociente = Math.floor(cociente / 2);
}
let nuevoBinario ="";
resultados
.reverse()
.forEach(element=> nuevoBinario+=element);
return nuevoBinario;
}
console.log(DecimalABinario(4))
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
