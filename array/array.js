//Array son estructuras de datos de tipo objeto, es un valor que va a guardar varios tipos de datos

var paises = ["Colombia", "Perú", "Brasil", "España"];

//Saber la longitud del array:
console.log(paises.length);

//Agregar mas elementos al array:
var masPaises = paises.push("Ecuador");

//Elimina el ultimo elemento del array:
var delet = paises.pop();

//Agrega al inicio del array
var addInicio = paises.unshift("El salvador");

//Elimina el elemento que este al inicio
var deleteInicio = paises.shift();

//Nos muestra la ubicacion dentro del array en la que se encuentre;
var ubicacion = paises.indexOf("Perú");


