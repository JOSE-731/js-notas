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