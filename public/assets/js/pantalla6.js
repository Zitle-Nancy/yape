(function() {
	var botonSiguiente = $('#btn-siguiente');
	var inputTarjeta = $('#autocomplete-input');
	var selectMes = $('#mes');
	console.log(selectMes);
	var selectAnio = $('#anio');
	var datos = $('.datos');
	var valido1, valido2, valido3;
	var cargarPagina = function(){
		$('select').material_select();
		inputTarjeta.keydown(validarNumeros);
		inputTarjeta.keyup(validarLongitud);
		// datos.keyup(validarInputs);
		selectMes.change(obtenerMes);
		selectAnio.change(obtenerAnio);
		botonSiguiente.click(validarTarjeta);
	};
	var validarLongitud = function(){
		var longitud = inputTarjeta.val().trim().length;

		if(longitud !== 16){
			valido1 = false;
			console.log('diferente a 16 ' + valido1);
		}else{
			valido1 = true;
			console.log('igual a 16 ' + valido1);
			
		}
		activarBoton();
	}
	var obtenerMes = function(){
		var valorMes = $('#mes option:selected').text();
		console.log(valorMes);
		var indiceMes = $(this).val();
		if(indiceMes < 1 || indiceMes > 12){
			valido2 = false;
			console.log('error' + valido2);
		}else{
			valido2 = true;
			console.log('ok' + valido2);
		}
		activarBoton();
	};
	var obtenerAnio = function(){
		var valorAnio = $('#anio option:selected').text();
		var indiceAnio = $(this).val();
		// console.log(indice);
		// console.log(valorAnio);
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