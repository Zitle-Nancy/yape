(function() {
	var inputNombre = $('#first_name');
	var email = $('#email');
	var cargarPagina = function(){
		inputNombre.keydown(validarLetras);
		email.keydown(validarCorreo);
	};

	var validarLetras = function(e){
		console.log(e.keyCode);
		if (e.keyCode !== 8 && (e.keyCode < 65 || e.keyCode > 90) && (e.keyCode < 97 || e.keyCode > 122)){
			e.preventDefault();
		}
	};
	var validarCorreo = function(){
		console.log('hola');
		var texto = email.val();
		var patronCorreo = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
		console.log(patronCorreo);
		if(patronCorreo.test(texto)){
			console.log('valido');
		}else{
			console.log('no valido');
		}
	}

	$(document).ready(cargarPagina);
})();