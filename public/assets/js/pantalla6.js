(function() {
	var botonSiguiente = $('#btn-siguiente');
	var inputTarejta = $('#autocomplete-input');
	var selectMes = $('#mes');
	var selectAnio = $('#anio');

	var cargarPagina = function(){
		$('select').material_select();
		botonSiguiente.click(validarTarjeta);
		inputTarejta.keydown(validarNumeros);
		selectMes.change(obtenerMes);
		selectAnio.change(obtenerAnio);
	};
	var validarTarjeta = function(){
		location.href = '/view/pantalla7.html'
	};
	var obtenerMes = function(){
		var valorMes = $('#mes option:selected').html();
		console.log(valorMes);
		// console.log(this);
		// console.log(valorMes);
	};
	var obtenerAnio = function(){
		var valorAnio = $('#anio option:selected').html();
		console.log(valorAnio);
	};
	$(document).ready(cargarPagina);
})();