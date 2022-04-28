//Básicamente un switch es como un if pero diferente en su sintaxis y 
//su uso, pero fuera de algunas ocasiones son muy parecidos.

//Ejemplo :

switch('valor a validar') {
	case 'opción 1':
        'acción a realizar';
     break;
}

//El uso de break es importante, ya que si no lo pones accionara todas las opciones dentro del switch, 
//digamos que es como un puente, si no lo pones vas a tener que caminar por un lugar donde cada ‘case’
// es una autopista más, mientras que break es un puente directo hacia la siguiente acera).

//Un ejemplo seria:
let dia = "Martes";

switch(dia) {
	case "Lunes":
		console.log("Hoy es Lunes");
		break;
	case "Martes":
		console.log("Hoy es Martes");
		break;
	case "Miercoles":
		console.log("Hoy es Miercoles");
		break;
	case "Jueves":
		console.log("Hoy es Jueves");
		break;
	case "Viernes":
		console.log("Hoy es Viernes");
		break;
	case "Sabado":
		console.log("Hoy es Sabado");
		break;
	case "Domingo":
		console.log("Hoy es Domingo");
		break;
	default:
		console.log("Es el fin de los dias");
}