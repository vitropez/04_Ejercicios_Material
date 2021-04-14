// JavaScript Document


function obtenerLetra(){
//creamos un STRING con el que vamos a trabajar para obtener la letra del DNI; yo he obtado por una variable
//de tipo local llamada (letras)
    let letras ="TRWAGMYFPDXBNJZSQVHLCKET";
//guardamos el ID del elemento en una variable llamada (tarjetas)
//y guardamos su valor, que es el que se le pide al usuario por pantalla, en una variable llamada (DNI)
   let tarjeta=document.getElementById("card")
  let DNI=tarjeta.value
//calculamos la letra del DNI con las variables (DNI y letras ) y  la guardamos en una variable con este nombre
//(letra)
  let  posicion = DNI % 23;
  let  letra = letras.charAt(posicion);
//mostramos por pantalla el valor de la variable (letra) compuesto por (DNI) y (letra) que hemos calculado
    tarjeta.value=( DNI+"-"+letra);

}
