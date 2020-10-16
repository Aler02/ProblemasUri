function esfera()
			{

				var numero = document.getElementById("numero").value;
			 	var PI= 3.14159;
			 	var a = (4/3.0) * PI * numero*numero*numero;
			 	alert("VOLUME = " + a.toFixed(3));
				      return false;
 			}