(function(){
	function cargarPagina(){
		// alert('hola');
		var carusel = $('.carousel.carousel-slider').carousel({fullWidth: true});
		carusel.css({"width": "100%", "height": "500px"});
		$('#siguiente-pantalla').click(segundaPantalla);
	}
	function segundaPantalla(){
		location.href = "static/view/pantalla2.html";
	}
	$(document).ready(cargarPagina);
})();


