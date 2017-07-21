(function() {
	var botonSiguiente = $('#btn-siguiente');
	var cargarPagina = function(){
		$(document).ready(function() {
			$('select').material_select();
		});
		botonSiguiente.click(validarTarjeta);
	}
	var validarTarjeta = function(){
		location.href = '/view/pantalla7.html'
	}
	$(document).ready(cargarPagina);
})();