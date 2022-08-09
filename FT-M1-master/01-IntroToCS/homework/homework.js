'use strict'

function BinarioADecimal(num) {

  let result = 0;
  let bin = Array.from(String(num), Number);
  bin.reverse();
  for (let i = 0; i<bin.length; i++){
    let dec = Math.pow(2, i) * bin[i];
    result = result + dec
  }
    return result
  }
  console.log (BinarioADecimal(1001))


function DecimalABinario(num) {
  let bin = [];
  while (num > 0){
    bin.push(num%2);
    num=Math.floor(num/2);
  }
  return bin.reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}