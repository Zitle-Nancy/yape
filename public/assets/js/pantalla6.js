(function() {
	var botonSiguiente = $('#btn-siguiente');
	var inputTarjeta = $('#autocomplete-input');
	var selectMes = $('#mes');
	console.log(selectMes);
	var selectAnio = $('#anio');
	var valido1, valido2, valido3;
	var valorMes;
	console.log(valorMes);
	var valorAnio;
	var cargarPagina = function(){
		$('select').material_select();
		inputTarjeta.keydown(validarNumeros);
		inputTarjeta.keyup(validarLongitud);
		selectMes.change(obtenerMes);
		selectAnio.change(obtenerAnio);
		botonSiguiente.click(validarTarjeta);
	};
	var validarLongitud = function(){
		var tarjetaValida = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})$/;
		// console.log(tarjetaValida);
		var longitud = inputTarjeta.val().trim().length;
		var digitosTarjeta = inputTarjeta.val();
		/* la longitud es para que no muestre la alerta por cada letra
		 que le introduzca , y asi solo la muestre de acuerdo a su longitud*/
		if(longitud == 16){
			if(tarjetaValida.test(digitosTarjeta)){
				// console.log('tarjeta valida');
				valido1 = true;
			}else{
				// console.log('tarjeta no valida');
				sweetAlert("Oops...", "Tarjeta no valida", "error");
				inputTarjeta.val('');
				valido1 = false;
			}
		}
		/* si o si va a realizar la accion que hay en la funcion
		 sin importar el resultado de los validos*/
		activarBoton();
	};
	var obtenerMes = function(){
		valorMes = $('#mes option:selected').text();
		console.log(valorMes);
		var indiceMes = $(this).val();
		if(indiceMes < 1 || indiceMes > 12){
			valido2 = false;
		}else{
			valido2 = true;
		}
		activarBoton();
	};
	var obtenerAnio = function(){
		valorAnio = $('#anio option:selected').text();
		var indiceAnio = $(this).val();
		if(indiceAnio < 1 || indiceAnio > 8){
			valido3 = false;
			console.log('error' + valido3);
		}else{
			valido3 = true;
			console.log('ok' + valido3);
		}
		activarBoton();
	};
	var activarBoton = function(){
		// almacenaremos los datos que necesitamos en localstorage
		var numeroTarjeta = inputTarjeta.val();
		localStorage.setItem('numeroCard', numeroTarjeta);
		var mesDato = valorMes;
		localStorage.setItem('mesSeleccionado', mesDato);
		var anioDato = valorAnio;
		localStorage.setItem('anioSeleccionado', anioDato);
		// fin de localstorage
		if((valido1) && (valido2) && (valido3)){
			botonSiguiente.removeAttr('disabled');	
		}else{	
			botonSiguiente.attr('disabled',true);	
		}
	};
	var validarTarjeta = function(){
			location.href = '/view/pantalla7.html';
			inputTarjeta.val('');
	};
	$(document).ready(cargarPagina);
})();