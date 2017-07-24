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
			// console.log(valido);
		}else {	
			valido = true;	
			// console.log(valido);	
		}
		activarBoton();
	}
	var checkboxActivado = function(){
		if(checkTerminos.is(':checked')) {	
			$(this).attr('checked',true);
			console.log(this);		
			valido1 = true;
			// console.log(valido1);
		} else {
			valido1 = false;
			$(this).attr('checked',false);
		}
		activarBoton();
	};
	var activarBoton = function(){
		if((valido && valido1) == true){
			btnContinuar.removeAttr('disabled');
		}else{
			btnContinuar.attr('disabled',true);
		}
	};
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
			var mensaje = response.message;
			if(response.success){
				// obtenemos codigo
				var codigo = response.data.code;
				// almacenamos el codigo en localstorage
				localStorage.setItem('codigoGenerado',codigo);
				// console.log(codigo);
				location.href = "/view/pantalla3.html";
			}else{
				swal({
					  title: "Oops...",
					  text: mensaje,
					  type: "error",
					  // showCancelButton: true,
					  closeOnConfirm: false,
					  showLoaderOnConfirm: true,
					},
					function(){
						location.reload();
					});
			}
		}).catch(function(error){
			console.log(error)
		});
		// fin de api //
		inputTelefono.val('');
		// checkTerminos.removeAttr('checked');
		checkTerminos.prop('checked' , false);

	};
	$(document).ready(cargarPagina);
})();