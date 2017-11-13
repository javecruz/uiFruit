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
}

function uiFruta(id){

	this.id=id;


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
input1 = document.createElement("input");
input1.setAttribute("value",frutas[i].cantidad);

	
// atributos para la primera celda
td1.setAttribute("align", "center");	
td1.setAttribute("width", "200px");
// atributos para la segunda celda	
td2.setAttribute("width", "100px");
td1.innerHTML = frutas[i].nombre;	


//boton1
img1 = document.createElement("img");	
img1.src = "1382562167_1.png";









img1.addEventListener('click', (function(x){


	return function(){
		x.value++;
	}



})(input1))




//boton2 DE LA OTRA FORMA
img2 = document.createElement("img");	
img2.src = "1382562185_2.png";

img2.addEventListener('click', function(){

		var pepe = input1;

		var luisa = function(){

			pepe.value--;

		}

		return luisa;
		

}())



td2.appendChild(input1);
td3.appendChild(img1);
td3.appendChild(img2);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tbBody.appendChild(tr);	

}





tbBody.appendChild(tr);	
miTabla.appendChild(tbBody);
miCapa = document.getElementById('resultado');
miCapa.appendChild(miTabla);
}

