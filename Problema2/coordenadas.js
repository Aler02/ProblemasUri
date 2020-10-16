function coordenadas()
			{

				  var X = document.getElementById("numero").value;
				  var Y = document.getElementById("numero2").value;
			      if(Y==0 && X==0)
			      {
			      	alert("Origem");
			      }
			      else if(Y==0 && X!=0)
			      {
			      	alert("Eixo X");
			      }
			      else if(Y!=0 && X==0)
			      {
			      	alert("Eixo Y");
			      }
			      else if(Y>0 && X>0)
			      {
			      	alert("Q1");
			      }
			      else if(Y<0 && X>0)
			      {
			      	alert("Q4");
			      }
			      else if( Y>0 && X<0)
			      {
			      	alert("Q2");
			      }
			      else if(Y<0 && X<0)
			      {
			      	alert("Q3");
			      }
			}