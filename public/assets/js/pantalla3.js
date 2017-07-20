(function() {
		// swal("pantalla3");
	var cargarPagina = function(){
		var obtenerNumero = localStorage.getItem('numeroCel');
		// console.log(obtenerNumero);
		$('#numero').text(obtenerNumero);
		// obtener codigo generado
		var obtenerCodigo = localStorage.getItem('codigoGenerado');
		// console.log(obtenerNumero);
		// swal("Bienvenido", "Tu codigo es: " + obtenerCodigo, "success")
	}
	$(document).ready(cargarPagina);
})();