'use strict'
// No cambies los nombres de las funciones.


function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  var factores = [];
  var acc = num
  for (let i = 0; i < num; i++) {
    while (acc % primos[i] === 0) {
      factores.push(primos[i])
      acc = acc / primos[i]
    }
    if(i === 0) {
      factores.unshift(1)
    }
  }
  return factores
}



function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i=0; i<array.length; i++){
    for (var j = 0; j<array.length; j++){
    if (array[j]>array[j+1]){
      var temp = array[j]
      array[j] = array[j+1];
      array[j+1] = temp;
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i=0; i<array.length; i++){
    let j = i -1;
    let temp = array[i];
    while (j>=0 && array[j]>temp){
      array[j+1] = array [j];
      j--
    }
    array[j+1] = temp
}
return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i=0; i< array.length; i++){
    let min = i;
    for (let j=i+1; j<array.length;j++){
      if(array[j]<array[min]){
        min=j
      }
    }
    if (min!=i){
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
