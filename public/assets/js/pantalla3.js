(function() {
	var inputCodigo = $('#autocomplete-input');
	var obtenerCodigo;
	var numero = 7;
	var cargarPagina = function(){
		var obtenerNumero = localStorage.getItem('numeroCel');
		$('#numero').text(obtenerNumero);
		// obtener codigo generado
		obtenerCodigo = localStorage.getItem('codigoGenerado');
		console.log(obtenerCodigo);
		swal("Bienvenido", "Tu codigo es: " + obtenerCodigo, "success")
		inputCodigo.keyup(validarCodigo);
		inputCodigo.keydown(validarNumeros);
		contador();
	};
	var validarCodigo = function(){
		// un input siempre devuelve un string
		var serie = inputCodigo.val();
		var longitud = serie.trim().length;
		console.log(longitud);
		if(obtenerCodigo.length == longitud){
			if (serie == obtenerCodigo){
				location.href = "/view/pantalla4.html";
				// console.log('ok');
				inputCodigo.val('');
			}else{
				sweetAlert("Oops...", "Codigo incorrecto", "error");
				// console.log('no');
				inputCodigo.val('');
			}
		}
	};
	var contador = function(){
		myVar = setInterval(decrementar, 1000);
	};
	var decrementar = function(){
		numero--;
		var obtenerNumero = localStorage.getItem('numeroCel');
		if(numero == 0){
			numero = 21;
			clearInterval(myVar);
			// api //
			$.post('http://localhost:3000/api/resendCode',
			{
				"phone": obtenerNumero
			}).then(function(response){
				// then para saber si es usuario valido
				var mensaje = response.message;
				if(response.success){
					// obtenemos codigo
					obtenerCodigo = response.data.toString();
					console.log(obtenerCodigo);
					swal("Tu nuevo", "codigo es: " + obtenerCodigo,"success");
					contador();
				}else{
					sweetAlert("Oops...",mensaje, "error");
				}
			}).catch(function(error){
				console.log(error);
			});
			// fin de api //
		}
		$('#incremento').text(numero);
		console.log(numero);
	}
	$(document).ready(cargarPagina);
})();