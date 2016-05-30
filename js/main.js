//Arquivo principal JS

$(document).ready(function() {
	$('#scroll-down').click(function(){
		$('#caracteristicas').animatescroll({scrollSpeed: 1000, easing: 'easeInCirc'});
	});
});