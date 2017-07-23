(function(){
	var regresar = $('#icon-regresar');
	var botonUltimo = $('#btn-pantalla-ocho');
	var cargarPagina = function(){
		var obtenerNumero = localStorage.getItem('numeroCel');
		console.log(obtenerNumero);
		var obtenerNumeroTarjeta = localStorage.getItem('numeroCard');
		console.log(obtenerNumeroTarjeta);
		var obtenerMes = localStorage.getItem('mesSeleccionado');
		console.log(obtenerMes);
		var obtenerAnio = localStorage.getItem('anioSeleccionado');
		console.log(obtenerAnio);
		regresar.click(redireccionar);
		botonUltimo.click(pantallaOcho);
	}
	var redireccionar = function(){
		location.href = '/view/pantalla6.html'
	}
	var pantallaOcho = function(){
		location.href = '/view/pantalla8.html'
	}
	$(document).ready(cargarPagina);
})();