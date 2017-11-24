/**
 * @author Prof020
 */


function Fruta(n,c){
	this.nombre=n;
	this.cantidad=c;

	var _fruta = this;

	this.ui = new uiFruta(_fruta);	


}

function uiFruta(_fruta){

	this.input = document.createElement("input");
	this.input.setAttribute("value",_fruta.cantidad);
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
	"1382562185_2.png"


	// 1 closure

	var javi = this.input;

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


			// y ahora creo el boton aceptar

			var botonConfirmar = document.createElement("input");
			botonConfirmar.setAttribute("type","button");
			botonConfirmar.setAttribute("value","Confirmar Modificacion");
			miTabla.appendChild(botonConfirmar);

			var cantidadPrevia = _fruta.ui.input.value;
				// evento de boton confirmar
				botonConfirmar.addEventListener("click",function(){

					//console.log(input.value) // el nombre
					//console.log(_fruta.ui.input.value) // la cantidad


					// modifico el array
					_fruta.nombre = input.value;
					_fruta.cantidad = _fruta.ui.input.value * 1; // sino parseo, lo mete en string......<3 js

					// elimino el input del nombre y lo pongo con innerHTML, admeás activo el readonly del input de cantidad
					var td = input.parentNode;
					td.innerHTML = _fruta.nombre;
					input.remove();
					_fruta.ui.input.setAttribute("readonly",true);




					// actualiza el boton total sin llammar al método de esta forma ahorro costé ya que no recorre todo el array
					document.getElementById("total").value = document.getElementById("total").value - (cantidadPrevia*1) + (_fruta.ui.input.value*1);
					botonConfirmar.remove();

				})
			



		}

	}())


	//QUEDA AKI
	// closure boton eliminar
	/*var frutaClosure = _fruta;

	this.imgEliminate.addEventListener("click",function(){


		var fruta = frutaClosure;

		//elimino del array primero
		var flag = false;

		for(var i = 0;i<frutas.length && !flag;i++){

			if(fruta.nombre === frutas[i].nombre){

				frutas.splice(i,1);
				flag = true;
			}



		}

		//ahora elimino el tr


		this.closest("tr").remove();

		calculaTotal(frutas);









	})*/



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

//creo el boton de borrar EN LA TABLA

var borrarImg = document.createElement("img");
borrarImg.setAttribute("src","1382562185_2.png")
td4.appendChild(borrarImg)
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tbBody.appendChild(tr);	



//creo el closure para el eliminar DENTRO DE LA TABLA


borrarImg.addEventListener("click",function(){

	var frutaClosure = frutas[i];
	var trClosure = tr;
	var flag = false;
	
	return function(){

		//borro la fruta del array
		for(var i=0;i<frutas.length && !flag;i++){

			if(frutas[i].nombre == frutaClosure.nombre){

				frutas.splice(i,1);
				flag = true;
			}



		}

		//borro la row de la tabla
		trClosure.remove();

		calculaTotal(frutas);

	}
	

}())




}

	miTabla.appendChild(tbBody);
	miCapa = document.getElementById('resultado');



//muestra tabla
this.show = function(){

	
	miCapa.appendChild(miTabla);

}


//añadir fruta
document.getElementById("addFruit").addEventListener("click",function(){


	var tr = document.createElement("tr");
	var td0 = document.createElement("td");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");

	var inputName = document.createElement("input");
	var inputCantidad = document.createElement("input");

	td0.appendChild(inputName);
	td1.appendChild(inputCantidad);
	tr.appendChild(td0);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);

	miTabla.appendChild(tr);

	// creo boton confirmar

	var confirmar = document.createElement("input");
	confirmar.setAttribute("type","button");
	confirmar.setAttribute("value","Confirmar Nueva Fruta")

	miTabla.appendChild(confirmar);


		confirmar.addEventListener("click", function(){

			//creo fruta
			fruta = new Fruta(inputName.value+"",inputCantidad.value *1)
			//quito inputs de añadir nueva
			inputName.remove();
			inputCantidad.remove();

			//meto una row de la nueva fruta
			td0.innerHTML = fruta.nombre;
			td1.appendChild(fruta.ui.input);
			td2.appendChild(fruta.ui.imgAdd);
			td2.appendChild(fruta.ui.imgRemove);
			td3.appendChild(fruta.ui.imgEdit);

			//meto la imagen de eliminar....

			var imgEliminar = document.createElement("img");
			imgEliminar.setAttribute("src","1382562185_2.png")



			imgEliminar.addEventListener("click",function(){

				// lo sé, deberia hacer un método,  este trozo está duplicado...
				var frutaClos = fruta;
				var trClos = tr;
				var flag = false;
				return function(){
					
					for(var i=0;i<frutas.length && !flag;i++){

						if(frutas[i].nombre == frutaClos.nombre){

							frutas.splice(i,1);
							flag = true;
							}

 

						}

							//borro la row de la tabla
							trClos.remove();

							calculaTotal(frutas);



				}


			}())

			td3.appendChild(imgEliminar);
			

			//la meto en el array

			frutas.push(fruta);

			//actualizo canntidad
			document.getElementById("total").value = (document.getElementById("total").value*1) + (fruta.ui.input.value*1);


			confirmar.remove();

		})




})




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


				