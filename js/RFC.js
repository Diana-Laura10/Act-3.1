function valida(campo){
			var bRet = false;
			if (campo.value == "")
				alert("Faltan datos");
			else 	if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/))
					document.getElementById("resul").innerHTML="No tiene un formato de RFC";
				else
					document.getElementById("resul").innerHTML="Validado, esto si es un RFC";
		}