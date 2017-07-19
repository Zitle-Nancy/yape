(function(){
	var valido;
	var valido1;
	var cargarPagina = function(){
		// saber en cuanto la tecla sea presionada
		$('#icon_telephone').keyup(validarInput);
		// saber el codigo una vez que la tecla es presionada
		$('#icon_telephone').keydown(validarNumeros);
		$('#condicionesT').change(checkboxActivado);
	}
	var validarInput = function(){
		var longitudInput = $(this).val().trim().length;
		console.log(longitudInput);
		if(longitudInput != 10){
			// $('#btn-continuar').attr('disabled',true);
			valido = false;
			activarBoton();
			console.log(valido);
		}else {	
			valido = true;	
			activarBoton();
			console.log(valido);	
			// $('#btn-continuar').removeAttr('disabled');
		}
	}
	var validarNumeros = function(e){
		// sabemos el valor de la tecla que presionen
		// console.log(e.keyCode);
		// el codigo de borrar es 8
		if (e.keyCode !== 8 && (e.keyCode < 48 || e.keyCode > 57)){
			e.preventDefault();
		}	
	}
	var checkboxActivado = function(){
		var checkboxT = $('#condicionesT');
		if(checkboxT.is(':checked')) {
			// console.log("Está activado");			
			valido1 = true;
			activarBoton();
			console.log(valido1);
		} else {
			// console.log("No está activado");
			valido1 = false;
			activarBoton();
			console.log(valido1);
		}

	}
	var activarBoton = function(){
		if((valido && valido1) == true){
			$('#btn-continuar').removeAttr('disabled');
		}else{
			$('#btn-continuar').attr('disabled',true);
		}
	}
	$(document).ready(cargarPagina);
})();