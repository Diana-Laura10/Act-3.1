function palindromo(cadena) {
  
   // Pasar a minusculas la cadena
    var cadenaOriginal = cadena.toLowerCase();
  
    // Convertir la cadena en un array
    var letrasEspacios = cadenaOriginal.split("");
  
    // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
    var cadenaSinEspacios = "";
    for(i in letrasEspacios)
      if(letrasEspacios[i] != " ")
            cadenaSinEspacios += letrasEspacios[i];
  
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
  
    // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
    var iguales = true;
    for(i in letras)
      if(letras[i] != letrasReves[i])
           iguales = false;

   if(iguales)
        document.getElementById("resul").innerHTML ="La cadena "+"<p>"+cadena+"</p>"+" SÍ es un palíndromo";
    else
    document.getElementById("resul").innerHTML ="La cadena "+"<p>"+cadena+"</p>"+" NO es un palíndromo";
}

function entradaCadena(){
     palindromo( prompt("Ingresa una cadena") );
}
