var validarNumeros = function(e){
	// sabemos el valor de la tecla que presionen
	// console.log(e.keyCode);
	// el codigo de borrar es 8
	if (e.keyCode !== 8 && (e.keyCode < 48 || e.keyCode > 57)){
		e.preventDefault();
	}	
};