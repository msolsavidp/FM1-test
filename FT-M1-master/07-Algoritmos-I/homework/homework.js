'use strict'
// No cambies los nombres de las funciones.


function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let primos = 2;
  let factores = [1];
  //mientas el numero sea mayor a 1 que se repita
  while (num>1) {
    //se puede dividir entre 2 o el valor que tenemos
    if (num % primos === 0){
      //pusheo el valor dentro del array factores para luego devolverlo
      factores.push(primos);
      //divido num
      num = num/primos;

      } else {
        primos++;
      }
    }
    return factores;
  }

  /*
    while (acc % primos[i] === 0) {
      factores.push(primos[i])
      acc = acc / primos[i]
    }
    if(i === 0) {
      factores.unshift(1)
    }
  }
  return factores
}*/



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

/*OTRA RESOLUCIÓN
let intercambiar = true;

//Si intercambiar es verdadero
while (intercambiar) {

  //primero apagamos el switch
  intercambiar = false;

  for (let i=0; i<arra.length; i++){
    if (array[i] > array[i+1]){
      let temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
      //si hubo un intercambio cambio el switch de nuevo a verdadero para que haga otra iteración
      intercambiar = true;
    }
  }
  //si es falso no entra en el if, pasa al siguiente indice del for si se acaba el for y intercambiar es verdadero empieza de nuevo a iterar desde el principio

  return array
}

*/


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

//OTRA FORMA DE HACERLO
/*
//Recorremos el array
for (let i = 1; i<array.length; i++){
  //guarda posición anterior
  let previo = i-1;
  //guarda valor actual
  let temp = array[i];
  // previo llego a 0 y el valor actual es menor al anterior?
  while (previo >= 0 && temp < array[previo]){
      array[previo+1] = array[previo];
      previo--
  }
  array[previo+1] = temp
}
return array
}
*/


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

//OTRA FORMA DE RESOLVER
/*
//identificar el num mas chico
for (let i = 0; i<array.length; i++){
  //asumo que el numero mas chico es el i
  let min = i;
    //recorre uno adelante de i para comparar
    for (let j = i+1; j< array.length; j++){
      if (array[min]>array[j]){
        //actualizamos el index del numero mas chico
        min = j;
      }
      //intercambiamos valores entre el numero mas chico y el primero que tomamos como más chico
      if (i !== min){
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
      }
  }
  return array
}

*/ 
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
