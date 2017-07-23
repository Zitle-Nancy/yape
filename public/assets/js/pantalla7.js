(function(){
	var regresar = $('#icon-regresar');
	var botonUltimo = $('#btn-pantalla-ocho');
	var inputContrasena = $('#autocomplete-input');
	var valido;
	var cargarPagina = function(){
		var obtenerNumero = localStorage.getItem('numeroCel');
		var obtenerNumeroTarjeta = localStorage.getItem('numeroCard');
		var obtenerMes = localStorage.getItem('mesSeleccionado');
		var obtenerAnio = localStorage.getItem('anioSeleccionado');
		var obtenerUltimosDigitos = localStorage.getItem('cuatroDigitos');
		$('#digitos').text(obtenerUltimosDigitos);
		regresar.click(redireccionar);
		botonUltimo.click(pantallaOcho);
		inputContrasena.keydown(validarNumeros);
		inputContrasena.keyup(validarInput);
	}
	var validarInput = function(){
		var longitudInput = inputContrasena.val().trim().length;
		if(longitudInput != 6){
			valido = false;
		}else {	
			valido = true;	
		}
		activarBoton();
	}
	var activarBoton = function(){
		if(valido){
			botonUltimo.removeAttr('disabled');
		}else{
			botonUltimo.attr('disabled',true);
		}
	}
	var redireccionar = function(){
		location.href = '/view/pantalla6.html'
	}
	var pantallaOcho = function(){
		location.href = '/view/pantalla8.html'
	}
	$(document).ready(cargarPagina);
})();