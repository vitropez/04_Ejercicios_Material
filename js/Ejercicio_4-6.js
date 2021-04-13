// JavaScript Document
var imagenes = new Array("img/fotoCiencias.jpg","img/fotoDerecho.jpg", "img/fotoEconomicas.jpg",
    "img/fotoEducacion.jpg","img/fotoFilologia.jpg","img/fotoFilosofia.jpg","img/fotoGeografiaHistoria.jpg",
    "img/fotoIndustriales130.jpg","img/fotoInformatica.jpg","img/fotoPsicologia.jpg");
var textos = new Array("Facultad de Ciencias","Facultad de Derecho","Facultad de Economicas","Facultad de Educacion",
    "Facultad de Filologia","Facultad de Filosofia","Facultad de Geografia e Historia","Facultad de Industriales",
    "Facultad de Informatica","Facultad de Psicologia");
function cambiarFoto (){
    var imagen = document.getElementById("facultades");
    var texto = document.getElementById("titulos")
    i =Math.floor(Math.random()*10);
    imagen.src = imagenes[i];
    texto.innerHTML=textos[i];
    tiempo=setTimeout("cambiarFoto()", 2000);
}











