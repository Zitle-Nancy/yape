(function() {
	var inputCodigo = $('#autocomplete-input');
	var obtenerCodigo;
	var cargarPagina = function(){
		var obtenerNumero = localStorage.getItem('numeroCel');
		$('#numero').text(obtenerNumero);
		// obtener codigo generado
		obtenerCodigo = localStorage.getItem('codigoGenerado');
		console.log(obtenerCodigo);
		// swal("Bienvenido", "Tu codigo es: " + obtenerCodigo, "success")
		inputCodigo.keyup(validarCodigo);
		inputCodigo.keydown(validarNumeros);
	}
	var validarCodigo = function(){
		var arreglo = [];
		arreglo.push(inputCodigo.val());
		var serie = arreglo.join('');
		if (serie == obtenerCodigo){
			location.href = "/view/pantalla3.html";
			// console.log('ok');
		}//else{
		// 	sweetAlert("Oops...", "Codigo incorrecto", "error");
		// 	// console.log('no');
		// }
		// console.log(typeof serie);
	}
	var validarNumeros = function(e){
		if (e.keyCode !== 8 && (e.keyCode < 48 || e.keyCode > 57)){
			e.preventDefault();
		}	
	}
	$(document).ready(cargarPagina);
})();