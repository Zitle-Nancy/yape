(function(){
	function cargarPagina(){
		// alert('hola');
		$('.carousel').carousel({fullWidth: true});
		$('.carousel').slider({full_width: true});
		// carusel.css({"width": "100%", "height": "500px"});
		$('#siguiente-pantalla').click(segundaPantalla);
	}
	function segundaPantalla(){
		location.href = "static/view/pantalla2.html";
	}
	$(document).ready(cargarPagina);
})();


