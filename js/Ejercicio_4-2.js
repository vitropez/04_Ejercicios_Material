// JavaScript Document


// La función escribe() tiene un parámetro de entrada con una cadena de texto con el código
// HTML que se quiere mostrar dentro de la capa con ID "cuadro_texto". Esta función el alumno
// tiene que usarla pero no es necesario modificarla
function escribe(texto){
	
	document.getElementById("cuadro_texto").innerHTML=texto;
	
}


function ponhora(){
	
// Aqui se tiene que poner el código que haga lo que pide el enunciado.
//Guardamos la fecha en la variable (d).
	var d = new Date();
//Obtenemos las horas, minutos y segundos con un sólo dígito y los asignamos a variables.
	var horaSimple = d.getHours();
	var minutoSimple = d.getMinutes();
	var segundoSimple = d.getSeconds();
//Utilizamos el operador terciario para añidir un cero si es menor que diez.
	var h=(horaSimple<10) ? ("0"+horaSimple): horaSimple;
	var m=(minutoSimple<10) ? ("0"+minutoSimple): minutoSimple;
	var s=(segundoSimple<10) ? ("0"+segundoSimple): segundoSimple;
//Acemos que la función se actualice cada segundo.
	t=setTimeout(function(){ponhora()},500);
//Llamamos a la función del código HTML con los parámetros corregidos.
//Los escribimos en HTML con letra grande para que destaque.
	escribe("<h1>"+h+":"+m+":"+s+"</h1>");


}
