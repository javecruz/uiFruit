/**
 * @author Prof020
 */
//Primera forma
// este metodo solo funciona si tienes un elemento de tipo input con id="cantidad"
function add(){
	
	document.getElementById('cantidad').value++;
}

function minus(){
	
	document.getElementById('cantidad').value--;
}

//Segunda forma (no funciona ¿por que? mira la tercera forma)

function add2(o){
	
	o++;
}

function minus2(o){
	
	o--;
}
//Tercera forma, la importancia de este metodo radica en que debes de saber como debe de ser el objeto
// o para hacer la llamada
function add3(o){
	
	o.value++;
}
function minus3(o){
	
	o.value--;
}




function Fruta(n,c){
	this.nombre=n;
	this.cantidad=c;
	this.ui = new uiFruta(c);	


}

function uiFruta(cantidad){

	this.input = document.createElement("input");
	this.input.setAttribute("value",cantidad);
	this.imgAdd = document.createElement("img");
	this.imgRemove = document.createElement("img");
	this.imgAdd.setImage = setImage;
	this.imgAdd.setImage("1382562167_1.png")
	this.imgRemove.setImage = setImage;
	this.imgRemove.setImage("1382562185_2.png")

	// 1 closure

	javi = this.input;

	this.imgAdd.addEventListener("click",function(){

		var loli = javi;
		var jeje = function(){

			loli.value++;

		}
		return jeje;

	}())	


	//2 closure


	this.imgRemove.addEventListener("click",(function(macarena){

		return function(){

			macarena.value--;

		}



	})(this.input))


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


	
// atributos para la primera celda
td1.setAttribute("align", "center");	
td1.setAttribute("width", "200px");
// atributos para la segunda celda	
td2.setAttribute("width", "100px");
td1.innerHTML = frutas[i].nombre;	





td2.appendChild(frutas[i].ui.input);
td3.appendChild(frutas[i].ui.imgAdd);
td3.appendChild(frutas[i].ui.imgRemove);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tbBody.appendChild(tr);	

}

	miTabla.appendChild(tbBody);
	miCapa = document.getElementById('resultado');


this.show = function(){

	
	miCapa.appendChild(miTabla);

}




}

