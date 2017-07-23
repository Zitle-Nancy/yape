(function(){
	var regresar = $('#icon-regresar');
	var botonUltimo = $('#btn-pantalla-ocho');
	var inputContrasena = $('#autocomplete-input');
	var valido;
	var cargarPagina = function(){
		var obtenerUltimosDigitos = localStorage.getItem('cuatroDigitos');
		$('#digitos').text(obtenerUltimosDigitos);
		regresar.click(redireccionar);
		botonUltimo.click(pantallaOcho);
		inputContrasena.keydown(validarNumeros);
		inputContrasena.keyup(validarInput);
	};
	var validarInput = function(){
		var longitudInput = inputContrasena.val().trim().length;
		if(longitudInput != 6){
			valido = false;
		}else {	
			valido = true;	
		}
		activarBoton();
	};
	var activarBoton = function(){
		if(valido){
			botonUltimo.removeAttr('disabled');
		}else{
			botonUltimo.attr('disabled',true);
		}
	};
	var redireccionar = function(){
		location.href = '/view/pantalla6.html'
	};
	var pantallaOcho = function(){
		var obtenerNumero = localStorage.getItem('numeroCel');
		var obtenerNumeroTarjeta = localStorage.getItem('numeroCard');
		var obtenerMes = localStorage.getItem('mesSeleccionado');
		var obtenerAnio = localStorage.getItem('anioSeleccionado');
		var contrasena = inputContrasena.val();
		// api //
		$.post('http://localhost:3000/api/registerCard',
		{
			"phone": obtenerNumero,
			"cardNumber": obtenerNumeroTarjeta,
			"cardMonth":obtenerMes,
			"cardYear":obtenerAnio,
			"cardPassword": contrasena
		}).then(function(response){
			// then para saber si es usuario valido
			var mensaje = response.message;
			if(response.success){
				swal({
					  title: "Good job!",
					  text: mensaje,
					  type: "success",
					  closeOnConfirm: false,
					  showLoaderOnConfirm: true,
					},
					function(){
						location.href = '/view/pantalla8.html';
					});
			}else{
				sweetAlert("Oops...", mensaje, "error");
			}
		}).catch(function(error){
			console.log(error);
		});
		// fin de api //
		inputContrasena.val('');
	}
	$(document).ready(cargarPagina);
})();