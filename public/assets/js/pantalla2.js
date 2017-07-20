(function(){
	var valido;
	var valido1;
	var inputTelefono = $('#icon_telephone');
	var checkTerminos = $('#condicionesT');
	var btnContinuar = $('#btn-continuar');
	var cargarPagina = function(){
		// saber en cuanto la tecla sea presionada
		inputTelefono.keyup(validarInput);
		// saber el codigo una vez que la tecla es presionada
		inputTelefono.keydown(validarNumeros);
		checkTerminos.change(checkboxActivado);
		btnContinuar.click(registrarNumero);
	}
	// validaciones //
	var validarInput = function(){
		var longitudInput = inputTelefono.val().trim().length;
		// console.log(longitudInput);
		if(longitudInput != 10){
			valido = false;
			activarBoton();
			// console.log(valido);
		}else {	
			valido = true;	
			activarBoton();
			// console.log(valido);	
		}
	}
	var checkboxActivado = function(){
		if(checkTerminos.is(':checked')) {			
			valido1 = true;
			activarBoton();
			// console.log(valido1);
		} else {
			valido1 = false;
			activarBoton();
			// console.log(valido1);
		}
	}
	var activarBoton = function(){
		if((valido && valido1) == true){
			btnContinuar.removeAttr('disabled');
		}else{
			btnContinuar.attr('disabled',true);
		}
	}
	// fin de validaciones // 
	var registrarNumero = function(){
		var numero = $('#icon_telephone').val();
		localStorage.setItem('numeroCel', numero);
		// api //
		$.post('http://localhost:3000/api/registerNumber',
		{
			"phone": inputTelefono.val(),
			// por defecto te devuelve un boolean
			"terms": checkTerminos.is(':checked')
		}).then(function(response){
			// then para saber si es usuario valido
			if(response.success){
				// obtenemos codigo
				var codigo = response.data.code;
				// almacenamos el codigo en localstorage
				localStorage.setItem('codigoGenerado',codigo);
				// console.log(codigo);
				location.href = "/view/pantalla3.html";
			}else{
				sweetAlert("Oops...", "Usuario ya registrado", "error");
			}
		}).catch(function(error){
			console.log(error)
		});
		// fin de api //
	}
	
	$(document).ready(cargarPagina);
})();