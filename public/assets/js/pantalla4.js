(function() {
	var inputNombre = $('#first_name');
	var email = $('#email');
	var datos = $('.datos');
	var botonCuenta = $('#btn-cuenta');
	var cargarPagina = function(){
		inputNombre.keydown(validarLetras);
		email.keydown(validarCorreo);
		datos.keyup(validarInputs);
	};
	var validarLetras = function(e){
		console.log(e.keyCode);
		if (e.keyCode !== 8 && (e.keyCode < 65 || e.keyCode > 90) && (e.keyCode < 97 || e.keyCode > 122)){
			e.preventDefault();
		}
	};
	var validarCorreo = function(){
		var texto = email.val();
		var patronCorreo = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
		// console.log(patronCorreo);
		if(patronCorreo.test(texto)){
			console.log('valido');
		}else{
			console.log('no valido');
		}
	};
	var validarInputs = function(){
		var valido = true;
		datos.each(function(indice,elemento){
			// console.log(indice,elemento);
			var input = $(elemento).val().trim().length;
			valido = valido &&(input > 0 && input <= 20);
			console.log(valido);
		});
		if(valido){
			botonCuenta.removeAttr('disabled');	
		}else{	
			botonCuenta.attr('disabled',true);	
		}
	}

	$(document).ready(cargarPagina);
})();