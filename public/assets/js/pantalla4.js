(function() {
	var inputNombre = $('#first_name');
	var email = $('#email');
	var password = $('#password');
	var datos = $('.datos');
	var botonCuenta = $('#btn-cuenta');
	var obtenerNumero = localStorage.getItem('numeroCel');
	var valido;
	var cargarPagina = function(){
		inputNombre.keydown(validarLetras);
		email.keydown(comprobarEmail);
		datos.keyup(validarInputs);
		botonCuenta.click(registrarUsuario);
	};
	var validarLetras = function(e){
		console.log(e.keyCode);
		if (e.keyCode !== 8 && (e.keyCode < 65 || e.keyCode > 90) && (e.keyCode < 97 || e.keyCode > 122)){
			e.preventDefault();
		}
	};
	var comprobarEmail = function(){
		var texto = email.val();
		var patronCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		// console.log(patronCorreo);
		if(patronCorreo.test(texto)){
			valido = true;
			// console.log('valido ' + valido);
		}else{
			valido = false;
			// console.log('no valido ' + valido);
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
		if(valido){
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
					// obtenemos el mensaje
					mensaje = response.message;
					swal({
					  title: "Good job!",
					  text: mensaje,
					  type: "success",
					  // showCancelButton: true,
					  closeOnConfirm: false,
					  showLoaderOnConfirm: true,
					},
					function(){
						location.href = "/view/pantalla5.html";
					});
				}else{
					sweetAlert("Oops...",mensaje, "error");
				}
				
			}).catch(function(error){
				console.log(error);
			});
			// fin de api //
		}else{
			sweetAlert("Oops...", "Varifica tu correo", "error");
		}
		
		// limpiar inputs 
		inputNombre.val('');
		email.val('');
		password.val('');
	};
	$(document).ready(cargarPagina);
})();