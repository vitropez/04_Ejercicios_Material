// JavaScript Document


window.onload = function() {

// COMPLETAR ESTA FUNCION
    var info = document.getElementById("informacion")

    // Numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName("a");


    // Dirección a la que enlaza el TERCER enlace


    var mensaje = "El tercer enlace apunta a " + enlaces[enlaces.length-3].href;

    // Numero de enlaces que NO enlazan a http://prueba
  var contador = 0;
    for (var i = 0; i < enlaces.length; i++) {
        if(enlaces[i].href !="http://prueba/"){
        contador++
        }

    }


    // Número de enlaces del SEGUNDO párrafo
    var parrafos = document.getElementsByTagName("p");
   var enlaces_parrafo2 = parrafos[1].getElementsByTagName("a");


    info.innerHTML = "Numero de enlaces " + enlaces.length + "<br/>" + mensaje + "<br/>" +
       contador  + "Numero de enlaces que NO enlazan a http://prueba" + "<br/>" +
        "Número de enlaces del SEGUNDO párrafo" + enlaces_parrafo2.length
}