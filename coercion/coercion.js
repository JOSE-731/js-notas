//Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:

//Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.

var a = 4 + "7"; //"47" es decir concatena el string y el entero eso es porque tiene signo +

var b = 4 * "2"; //8 en este caso es diferente y genera un entero

//Coerción explicita = es cuando obligamos a que cambie el tipo de valor.

var a = 20;

//la variable a la convertimos a String
var b = a + "";

//Otra forma de conversion
var c = String(a);

//La convertimos a entero
var d = Number(c);
