// JavaScript Document


function obtenerLetra(){
    let letras ="TRWAGMYFPDXBNJZSQVHLCKET";

   let tarjeta=document.getElementById("card")
   DNI=tarjeta.value
console.log(DNI)
    posicion = DNI % 23;
    letra = letras.charAt(posicion);
    tarjeta.value=( DNI+"-"+letra);

}
