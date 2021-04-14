// JavaScript Document
//creamos dos ARRAYS con las imagenes y con los textos que queremos mostrar por pantalla
var imagenes = new Array("img/fotoCiencias.jpg","img/fotoDerecho.jpg", "img/fotoEconomicas.jpg",
    "img/fotoEducacion.jpg","img/fotoFilologia.jpg","img/fotoFilosofia.jpg","img/fotoGeografiaHistoria.jpg",
    "img/fotoIndustriales130.jpg","img/fotoInformatica.jpg","img/fotoPsicologia.jpg");
var textos = new Array("Facultad de Ciencias","Facultad de Derecho","Facultad de Economicas","Facultad de Educacion",
    "Facultad de Filologia","Facultad de Filosofia","Facultad de Geografia e Historia","Facultad de Industriales",
    "Facultad de Informatica","Facultad de Psicologia");
function cambiarFoto (){
//Accedemos a los elementos con los que vamos a trabajar mediante su ID y los guaradamos en sendas variables
    var imagen = document.getElementById("facultades");
    var texto = document.getElementById("titulos");
//creamos la variable (i) que va a ser un número aleatrorio entre 0 y 9 mediante el objeto (Math.random)
    i =Math.floor(Math.random()*10);
//le damos el valor aleatorio del ARRAY (imagenes) al atributo (.src) del elemento (imagen) y de los textos
    imagen.src = imagenes[i];
    texto.innerHTML=textos[i];
//hacemos que las imagenes cambien segun el numero aleatorio cada 2 segundos
    tiempo=setTimeout("cambiarFoto()", 2000);
}











