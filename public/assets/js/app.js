(function(){
	function cargarPagina(){
		// alert('hola');
		var carusel = $('.carousel.carousel-slider').carousel({fullWidth: true});
		carusel.css({"width": "100%", "height": "500px"});
	}

	$(document).ready(cargarPagina);
})();


