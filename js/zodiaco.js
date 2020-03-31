function validaFechaMenor(campo){
    var bRet = false;
    var dHoy = new Date();
    var dCapt = null;
    if (campo.value == "")
      alert("Faltan datos");
    else{
      dCapt = validaFecha(campo.value);
      if (dCapt != null && dCapt < dHoy)
        bRet = true;
      else
        alert("La fecha debe ser menor a la fecha actual");
    }


    return bRet;
  }

    function validaFecha(valor){

        document.getElementById("fecha").value = "";

            var arrayFecha = valor.split("");
            var fecha;

            var fechafinal = arrayFecha[8]+arrayFecha[9]+"/";
                 fechafinal += arrayFecha [5]+arrayFecha[6]+"/";
                 fechafinal += arrayFecha[0] + arrayFecha[1] + arrayFecha[2] + arrayFecha[3];

            valor = fechafinal;

            var dConvertida = null;
            var sAnio = "";
            var sMes = "";
            var sDia = "";
            var nAnio=0, nMes=0, nDia = 0;

            if (valor.match(/^\d{2}\/\d{2}\/\d{4}$/)){
                 nDia= parseInt(valor.substring(0,2), 10);
                nMes = parseInt(valor.substring(3,5), 10);
                nAnio = parseInt(valor.substring(6,10), 10);

                if (nDia <1 || nDia>31)
                    alert("El día no es válido")
                else{
                    if (nMes <1 || nMes>12)
                        alert("El mes no es válido");
                    else{
                        if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
                             nMes==8 || nMes==10 || nMes==12) && nDia > 31)
                             alert("El mes tiene máximo 31 días");
                        else if ((nMes==4 || nMes==6 || nMes==9 ||
                                    nMes==11) && nDia > 30)
                             alert("El mes tiene máximo 30 días");
                        else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
                             alert("Febrero tiene 28 días o 29 en bisiesto");
                        else{
                            dConvertida = new Date();
                            dConvertida.setFullYear(nAnio, nMes-1, nDia);
                        }//fin validación día-mes
                    }//mes válido
                }//día válido
          creasigno(nDia,nMes);
            }//formato válido

            else{
                alert("No tiene formato de fecha");
            }
            return dConvertida;
    }



    function creasigno(nDia,nMes){

    var newDiv = document.createElement("div");

    if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
    document.getElementById("signo").innerHTML ="SIGNO ARIES <br> Número de la suerte: 4";
    document.getElementById("color").style.background="rgba(255, 0, 0, 0.7)";
    }
    else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5))
    {
        document.getElementById("signo").innerHTML ="SIGNO TAURO <br> Número de la suerte: 984";
        document.getElementById("color").style.background="rgba(0, 128, 0, 0.7)";
    }
      else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6))
      {
        document.getElementById("signo").innerHTML ="SIGNO GEMINIS <br> Número de la suerte: 558";
        document.getElementById("color").style.background="rgba(255, 255, 0, 0.7)";
    }
        else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7))
        {
            document.getElementById("signo").innerHTML ="SIGNO CANCER <br> Número de la suerte: 96";
            document.getElementById("color").style.background="rgba(139, 150, 152, 0.7)";
        }
          else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8))
          {
            document.getElementById("signo").innerHTML ="SIGNO LEO <br> Número de la suerte: 102";
            document.getElementById("color").style.background="rgba(255, 166, 0, 0.7)";
        }
            else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9))
            {
                document.getElementById("signo").innerHTML ="SIGNO VIRGO <br> Número de la suerte: 85";
                document.getElementById("color").style.background="rgba(165, 42, 42, 0.7)";
            }
              else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10))
              {
                document.getElementById("signo").innerHTML ="SIGNO LIBRA <br> Número de la suerte: 1";
                document.getElementById("color").style.background="rgba(255, 192, 203, 0.7)";
            }
                else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11))
                {
                    document.getElementById("signo").innerHTML ="SIGNO ESCORPIO <br> Número de la suerte: 65";
                    document.getElementById("color").style.background="rgb(87, 30, 30)";
                }
                  else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12))
                  {
                    document.getElementById("signo").innerHTML ="SIGNO SAGITARIO <br> Número de la suerte: 74";
                    document.getElementById("color").style.background="rgba(255, 0, 255, 0.7)";
                }
                    else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1))
                    {
                        document.getElementById("signo").innerHTML ="SIGNO CAPRICORNIO <br> Número de la suerte: 16";
                        document.getElementById("color").style.background="black";
                    }
                      else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2))
                      {
                        document.getElementById("signo").innerHTML ="SIGNO ACUARIO <br> Número de la suerte: 8";
                        document.getElementById("color").style.background="rgba(0, 0, 255, 0.7)";
                    }
                        else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3))
                        {
                            document.getElementById("signo").innerHTML ="SIGNO PICIS <br> Número de la suerte: 4";
                            document.getElementById("color").style.background="rgba(128, 0, 128, 0.7)";
                        }

    //var newContent = document.createTextNode("SIGNO");
    newDiv.appendChild(newContent); //añade texto al div creado.

     // añade el elemento creado y su contenido al DOM
     var currentDiv = document.getElementById("div");
     document.body.insertBefore(newDiv, currentDiv);
    newDiv.style="border: 3px solid #999999; background-color:#54b51e; width: 200px ;height:300px ";
}