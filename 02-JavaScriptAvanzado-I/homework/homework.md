# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a); // 8
   var f = function (a, b, c) {
      b = a;
      console.log(b); //8 
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); //9
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //1
```

```javascript
console.log(bar); //undefined
console.log(baz); // error is not defined
foo();
function foo() {
   console.log('Hola!'); // Hola!
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // Franco
```

```javascript
var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The flash
   console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" //6
4 + 5 + "px" // 9px
"$" + 4 + 5 //$45
"4" - 2 // 2
"4px" - 2 // ERROR: NaN
7 / 0 // Infinity
{}[0] // undefined
parseInt("09") // 9
5 && 2 // 2
2 && 5 //5
5 || 0 //5
0 || 5 // 5
[3]+[3]-[10] // 33 Se concatenan
3>2>1 // false
[] == ![] // true por que al comparar los datos, con una igualdad debil, javascript interpreta el primer array vacio true, como un valor primitivo que seria una cadena vacia "" entoces esta daria false. y estaria comprobando si false es igual a distinto de true.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined  Por que primero javascript hace la lista, de los vars y funciones, y luego realiza la ejecucion
   console.log(foo()); // 2  : foo() al igual que la variable a puede ser llamada desde cualquier punto de la funcion. pero al contrario una variable las funciones crean su propio ambito, por lo tanto al ser ejectuada esta se envia al JS call, y devuelve su resultado. Todas las funciones devuelven un resultado independientemente si esta declarado return o no!

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
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

getFood(false); // devuelve Meow Mix, ya que en la condicion de enviar Friskies, es si food es true, pero como el parametro food es false se envia la variable global snack.
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa, devuelve esto ya que al usar this.fullname, hace referencia al objecto obj.prop

var test = obj.prop.getFullname;

console.log(test()); // devuelve lo mismo ya que test es una referencia al metodo getFullname del objecto obj.prop
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // esto va a ser lo primero que se muestre.
   setTimeout(function () {
      console.log(2); // este el cuarto
   }, 1000);  
   setTimeout(function () {
      console.log(3);  // este el tercero
   }, 0);  
   console.log(4); // este el segundo
}
// primero entra a la funcion como es un lenguaje sicronico. de un solo hilo, se ejecuta su primer linea, que es 1.
//  Luego se ejecuta la segunda linea, y como es un es una funcion con un intervalo, esta es llevada al web api pasado al segundo se mete en cola Mientras la ejecucion sigue su curso, Por lo tanto sera el ultimo en mostrarse. Luego entra en el 2 setTimeout. pero como hace el proceso de enviarse al webapi, y luego enviarse a la cola. Tarda mas en salir que el ultimo console.log(4); que no es enviado a ninguna parte si no que sale directamente.
printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
