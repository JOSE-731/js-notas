//Un objeto en programación es una representación abstracta de un objeto en la vida real,
// sin embargo también puede entenderse como un contenedor de datos


//Los objetos se resumen entre palabra clave y valor

//ejemplo palabra clave marca, y valor es 2022
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    detallesDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.año}`);
    }
}

//Para acceder a un objeto utilizamos
miAuto.año

//Objeto con contructor:
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }