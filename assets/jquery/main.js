
$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var name = $("#nombre").val();
		var message = $("#mensaje").val();
		if(name == "" && message == ""){
			alert("debes escribir tu nombre y el mensaje");
		} else {
			$('comentarios').append('<div><span class="center-align"> '+ name +' </span><p class= "center-align">)' + message + '</p></div>');
		}

	});
});

//al hacer click en nuestro boton, 
//se genere una funcion tiene un preventDeault para que detenga la accion por defecto.
// y guarde los valores ingresados en las variables