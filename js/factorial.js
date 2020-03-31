function fac(){
var num = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
var resul = 1;

for(var i=1; i<=num; i++) {
  resul *= i;
}

var texto=document.getElementById('resul');
texto.innerHTML="El factorial de <p>"+ num +"</p> es: <p>"+ resul +"</p>";
}