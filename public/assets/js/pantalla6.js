(function() {
	var botonSiguiente = $('#btn-siguiente');
	var inputTarejta = $('#autocomplete-input');
	var cargarPagina = function(){
		$('select').material_select();
		botonSiguiente.click(validarTarjeta);
		inputTarejta.keydown(validarNumeros);
	};
	var validarTarjeta = function(){
		location.href = '/view/pantalla7.html'
	}
	$(document).ready(cargarPagina);
})();