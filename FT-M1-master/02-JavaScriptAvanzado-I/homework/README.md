
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; //guarda en memoria
var a = 5; // guarda
var b = 10; //guarda
var c = function(a, b, c) { //guarda la función sin entrar a ver
  var x = 10; //cuando ejecuta entra a la función a ver y ejecuta los dos console.log
  console.log(x); //sale porque la otra función no fue invocada
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10); //ejecuta 
console.log(b); //ejecuta b del contexto global
console.log(x); //ejecuta x del contexto global

/*Va a imprimir en la consola:
de la función 10 
               8
               8
               9
10 del contexto global - duda
1 del contexto global - duda*/
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
/*Consola:
Undefined
Undefined // Tira error en realidad
Hola! - duda // no devuelve la función porque todavía no fue guardada  */

```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);

/*Consola:
Franco 
*/
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);

/*Consola:

Tony
Franco
Tony
*/
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);

/*Consola:
Tony -- En realidad de acuerdo al ejercicio anterior sería The Flash
Franco - Reverse Flash

-----
En realidad devuelve primero lod el if-->
The Flash
Reverse Flash
luego devuelve lo que esta fuera
The Flash
Franco --> pm no cambia por el cambio dentro del if porque es un let, lo que lo guarda en su contexto
*/
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" --> NaN ---> da 2
"2" * "3" --> 6
4 + 5 + "px" -->9px
"$" + 4 + 5 -->$9 --> devuelve $45
"4" - 2 --> -42 --> da 2
"4px" - 2 --> NaN
7 / 0 --> 0 --> en Node me da Infinity
{}[0] -->undefined
parseInt("09")--> 9
5 && 2 --> false --> da 2 ???
2 && 5 --> false --> da 5 ???
5 || 0 --> true --> da 5 
0 || 5 --> true --> da 5
[3]+[3]-[10] --> default ? ---> da 23?!
3>2>1 --> false
[] == ![] --> false --> da true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
//Undefined
2
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

// Friskies
//Meow Mix
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

/*Aurelio De Rosa
Undefined*/
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();

/*1
setTimeOut... 2 --> lo manda a web APIS --> empieza el tiempo 1'
cuando termina va a la queu hasta que pase el resto del código
setTimeout... 3 --> lo manda a web APIS, esta 0 segundos llega antes a la queu que el anterior,
se queda ahí hasta que pase todo el código
4
3
2
*/
```
