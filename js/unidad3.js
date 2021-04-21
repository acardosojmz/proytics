//--- Aqui se declaran variables que se usaran en varias funciones
var variable ="Contenido string";
var entero   =192;

function mensaje(){
	/*
	console.log("variable: " + variable );
	let variablelocal = 177n;

	console.log('Llamó la funcion mensage()! ' + variablelocal);
	alert("Heeey, me estás haciendo cosquillas");
	*/
	// Creating a plain object via an object literal
	const obj = {
		first: 'Jane', // property
		last: 'Doe', // property
		getFullName() { // property (method)
			return this.first + ' ' + this.last;
		},
	};
	// Getting a property value
	
	// Setting a property value
	obj.first = 'Janey';
	// Calling the method
	if (obj.getFullName()== 'Janey Doe')
		console.log("Nombre es Janey Doe");
	else 
		console.log("No coinciden los datos");
	
	//assert(obj.getFullName(), 'Janey Doe');
}
function actualiza(){
	variable = "Cambió el contenido de variable";
}

function cambiarTexto() {
	let btn= document.getElementById("btnMensaje");
	btn.value="Cambiando el texto del boton ";

}

function flecha(x,y) {
	retunr ((x,y)=>{
		x*y;
	});
}