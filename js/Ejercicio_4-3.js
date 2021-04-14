// JavaScript Document

//Hacemos que el código se ejecute cúando cargue la página
window.onload = function() {

// COMPLETAR ESTA FUNCION
//Accedemos al elemento info en el que vamos a escribir la información
    var info = document.getElementById("informacion");

    // Numero de enlaces de la pagina
//Accedemos al elemento donde están los enlaces con los que vamos a trabajar
    var enlaces = document.getElementsByTagName("a");


    // Dirección a la que enlaza el TERCER enlace
// guardamos la dirección del enlace numero 3  (href) en la variable (mensaje) que se va
// a mostrar por pantalla

    var mensaje = "El tercer enlace apunta a " + enlaces[enlaces.length-3].href;

    // Numero de enlaces que NO enlazan a http://prueba
//creamos un bucle para recorrer el ARRAY de enlaces que no apuntan a (http://prueba) y los guardamos
// en la variable (contador)
  var contador = 0;
    for (var i = 0; i < enlaces.length; i++) {
        if(enlaces[i].href !="http://prueba/" || enlaces[i].href !="htpp://prueba"){
        contador++
        }

    }


    // Número de enlaces del SEGUNDO párrafo
//En la variable (parrafos) guardamos el elemento (p) del documento y en la siguiente variable guardamos
// el enlace número dos de (parrafos) que es un ARRAY

    var parrafos = document.getElementsByTagName("p");
   var enlaces_parrafo2 = parrafos[1].getElementsByTagName("a");

//Escribimos toda la información pedida en el ejercicio en el elemento (info) del principio con las variables
// y los STRINGS que hemos obtenido ;también añadimos saltos de línea para que se visualice mejor

    info.innerHTML ="<h2>"+ "Numero de enlaces: " + enlaces.length + "<br/>" + mensaje + "<br/>" +
       contador  + "= Numero de enlaces que NO enlazan a http://prueba" + "<br/>" +
        "Número de enlaces del SEGUNDO párrafo: " + enlaces_parrafo2.length+ "</h2>"
}