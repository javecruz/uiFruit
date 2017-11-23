/**
 * @author Prof020
 */


function Fruta(n,c){
	this.nombre=n;
	this.cantidad=c;
	this.ui = new uiFruta(c);	


}

function uiFruta(cantidad){

	this.input = document.createElement("input");
	this.input.setAttribute("value",cantidad);
	this.input.setAttribute("readonly",1);
	this.imgAdd = document.createElement("img");
	this.imgRemove = document.createElement("img");
	this.imgAdd.setImage = setImage;
	this.imgAdd.setImage("1382562167_1.png")
	this.imgRemove.setImage = setImage;
	this.imgRemove.setImage("1382562185_2.png")
	this.imgEdit = document.createElement("img");
	this.imgEdit.setImage = setImage;
	this.imgEdit.setImage("editar.png");
	this.imgEdit.setAttribute("width",16)
	this.imgEdit.setAttribute("heigth",16)
	this.imgEliminate = document.createElement("img");
	this.imgEliminate.setImage = setImage;
	this.imgEliminate.setImage("1382562185_2.png");


	// 1 closure

	javi = this.input;

	this.imgAdd.addEventListener("click",function(){

		var loli = javi;
		var jeje = function(){

			loli.value++;
			document.getElementById("total").value++

		}
		return jeje;

	}())	


	//2 closure


	this.imgRemove.addEventListener("click",(function(macarena){

		return function(){

			macarena.value--;
			document.getElementById("total").value--;
		}



	})(this.input))


	//modificar boton 3º closure

	this.imgEdit.addEventListener("click",function(){

		var loli = javi;

		return function(){
			
			loli.removeAttribute("readonly")
			var x = loli.parentNode;

			// y es el td donde está el name de la fruta
			var y = x.previousSibling;

			// primero lo pongo en blanco
			y.innerHTML = "";

			//añado un boton a ese td...

			var input = document.createElement("input");
			y.appendChild(input);


			// y ahora? xd AQUIIIIIIIIIIIIIIII



			



		}

	}())



	function setImage(ruta){
		this.setAttribute("src",ruta);

	}


}




function crearArray(){

	var frutas = [];

	frutas[frutas.length] = new Fruta("fresa",23);
	frutas[frutas.length] = new Fruta("melón",10);
	frutas[frutas.length] = new Fruta("kiwi",6);
	frutas[frutas.length] = new Fruta("melocotón",55);
	return frutas;
}




function MiTabla(frutas) {
	
miTabla = document.createElement("table");
// atributos para la tabla	
miTabla.setAttribute("width", "300px");
miTabla.setAttribute("border", "1");

tbBody = document.createElement("tbody");


for (i=0;i<frutas.length;i++){

tr = document.createElement("tr");
td1 = document.createElement("td");
td2 = document.createElement("td");
td3 = document.createElement("td");
td4 = document.createElement("td");

	
// atributos para la primera celda
td1.setAttribute("align", "center");	
td1.setAttribute("width", "200px");
// atributos para la segunda celda	
td2.setAttribute("width", "100px");
td1.innerHTML = frutas[i].nombre;	





td2.appendChild(frutas[i].ui.input);
td3.appendChild(frutas[i].ui.imgAdd);
td3.appendChild(frutas[i].ui.imgRemove);
td4.appendChild(frutas[i].ui.imgEdit)
td4.appendChild(frutas[i].ui.imgEliminate)
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tbBody.appendChild(tr);	

}

	miTabla.appendChild(tbBody);
	miCapa = document.getElementById('resultado');



//muestra tabla
this.show = function(){

	
	miCapa.appendChild(miTabla);

}

}





//calcula el total
function calculaTotal(frutas){

	var total = 0;

	for(var i = 0;i<frutas.length;i++) total += frutas[i].ui.input.value * 1

	document.getElementById("total").value = total;	

}

	
frutas = crearArray();
t=new MiTabla(frutas);
t.show();
calculaTotal(frutas);


				