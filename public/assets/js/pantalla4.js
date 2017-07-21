(function() {
	var inputNombre = $('#first_name');
	var email = $('#email');
	var password = $('#password');
	var datos = $('.datos');
	var botonCuenta = $('#btn-cuenta');
	var obtenerNumero = localStorage.getItem('numeroCel');
	var cargarPagina = function(){
		inputNombre.keydown(validarLetras);
		email.keydown(validarCorreo);
		datos.keyup(validarInputs);
		botonCuenta.click(registrarUsuario);
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
			// console.log('valido');
		}else{
			// console.log('no valido');
		}
	};
	var validarInputs = function(){
		var valido = true;
		datos.each(function(indice,elemento){
			// console.log(indice,elemento);
			var input = $(elemento).val().trim().length;
			valido = valido &&(input > 0 && input <= 20);
			// console.log(valido);
		});
		if(valido){
			botonCuenta.removeAttr('disabled');	
		}else{	
			botonCuenta.attr('disabled',true);	
		}
	};
	var registrarUsuario = function(e){
		e.preventDefault();
		// api //
		$.post('http://localhost:3000/api/createUser',
		{
			"phone": obtenerNumero,
			"name": inputNombre.val(),
			"email": email.val(),
			"password": password.val()
		}).then(function(response){
			var mensaje;
			if(response.success){
				// obtenemos codigo
				mensaje = response.message;
				swal("Good job!",mensaje, "success")
				location.href = "/view/pantalla5.html";
			}else{
				sweetAlert("Oops...",mensaje, "error");
			}
		}).catch(function(error){
			console.log(error)
		});
		// fin de api //
	};
	$(document).ready(cargarPagina);
})();