var francisco = {
	nombre: 'Francisco',
	apellido: 'Castillo',
	edad: 19
}
var javi = {
	nombre: 'Javier',
	apellido: 'Castillo',
	edad: 16
}

function imprimirNombreEnMayusculas(persona){ 
	var { nombre } = persona
	var { edad } = persona
	console.log(`Hola me llamo ${nombre} y tengo ${edad} años`) //Interpolando variables
}

imprimirNombreEnMayusculas(francisco)
imprimirNombreEnMayusculas(javi)
imprimirNombreEnMayusculas({nombre:'Pedro', edad: 20})