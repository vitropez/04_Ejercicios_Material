// JavaScript Document


// La función escribe() tiene un parámetro de entrada con una cadena de texto con el código
// HTML que se quiere mostrar dentro de la capa con ID "cuadro_texto". Esta función el alumno
// tiene que usarla pero no es necesario modificarla
function escribe(texto){
	
	document.getElementById("cuadro_texto").innerHTML=texto;
	
}

function ponfecha(){
	// Aqui se tiene que poner el código que haga lo que pide el enunciado.


	// Creo los arrays de los días de la semana y de los meses.
	var semana = ["Domingo ", "Lunes ", "Martes ", "Miércoles ",
		"Jueves ", "Viernes ", "Sábado "];
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
		"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	// Asigno a la variable (d) la fecha actual del objeto DATE.
	var d = new Date();
	// Obtengo el indice que me permitirá recorrer los arrays.
	var dia_semana = d.getDay();
	var dia_mes = d.getDate()
	var mes = d.getMonth();
	var ano = d.getFullYear()
	// Genero el parámetro que le paso a la función (escribe) y añado las etiquetas HTML de titular
	// como está en el ejercicio.
	var texto_dia_semana ="<h1>"+"Hoy es "+ semana[dia_semana]+dia_mes+" de "+meses[mes]+" de "+ano+"</h1>";


   // hago una llamada a la función escribe con el parámetro anterior.
	escribe(texto_dia_semana);



}