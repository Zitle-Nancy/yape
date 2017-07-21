(function(){
	var regresar = $('#icon-regresar');
	var botonUltimo = $('#btn-pantalla-ocho');
	var cargarPagina = function(){
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