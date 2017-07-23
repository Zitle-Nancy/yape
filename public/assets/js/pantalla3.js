(function() {
	var inputCodigo = $('#autocomplete-input');
	var obtenerCodigo;
	var cargarPagina = function(){
		var obtenerNumero = localStorage.getItem('numeroCel');
		$('#numero').text(obtenerNumero);
		// obtener codigo generado
		obtenerCodigo = localStorage.getItem('codigoGenerado');
		console.log(obtenerCodigo);
		swal("Bienvenido", "Tu codigo es: " + obtenerCodigo, "success")
		inputCodigo.keyup(validarCodigo);
		inputCodigo.keydown(validarNumeros);
	};
	var validarCodigo = function(){
		var arreglo = [];
		arreglo.push(inputCodigo.val());
		var serie = arreglo.join('');
		var longitud = inputCodigo.val().trim().length;
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
		// limpiar input
		
	};
	$(document).ready(cargarPagina);
})();