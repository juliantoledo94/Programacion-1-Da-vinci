"use strict";

/*
1- Calcular e informar un sueldo sabiendo que:

La categoria define el sueldo basico mensual (1: u$s 1000, 2: u$s 1500, 3: u$s 2000)
La subcategoria define el multiplicador (A: x1.5, B: x2, C: x2.5)
Ambos datos son ingresados por el usuario
3- Informar dentro de que rango esta el sueldo:

Rango inicial: entre u$s 1500 inclusive y u$s 3000 inclusive
Rango intermedio: entre u$s 3000 exclusive y u$s 4000 inclusive
Rango avanzado: si supera los u$s 4000
*/

var categoria;
var subcategoria;

categoria=[1000,1500,2000];
subcategoria=[1.5,2,2.5];
//var diccionario=[{1:"1000"},{2:"1500"},{3:"2000"}];
var dict ={};

dict [1]=1000;
dict [2]=1500;
dict [3]=2000;

var dict2={};

dict2 ["a"]=1.5;
dict2 ["b"]=2;
dict2 ["c"]=2.5;


var elegir_categoria = parseInt(prompt("elegir categoria del 1 al 3"));
var elegir_subcategoria =prompt("elegir categoria a ,b,c");

while(true){
    if(elegir_categoria == 1 || elegir_categoria== 2 || elegir_categoria ==3){
        for(var clave in dict){
            
            if(elegir_categoria == clave){
                //alert(clave + " : "+ dict[clave]);
                categoria=dict[clave];
                //alert(categoria);

            }

        
        }
        break;
    }
    else{
        alert("el numero de categoria no es valido vuelva a seleccionar su categoria recordando que solo son validos los numeros '1 ',' 2 'y '3'");
        var elegir_categoria = parseInt(prompt("elegir categoria del 1 al 3"));
    }
}

while(true){
    if(elegir_subcategoria == "a" || elegir_subcategoria== "b" || elegir_subcategoria =="c"){
        for(var clave2 in dict2){

            if(elegir_subcategoria==clave2){
                subcategoria=dict2[clave2]
                //alert(subcategoria);
            }


        }
        break;
    }
    else{
        alert("La letra de su subcategoria no es valida, recuerde que solo puede seleccionar las letras 'a','b','c'");
        var elegir_subcategoria =prompt("elegir categoria a ,b,c");

    }
}
var sueldo_basico_mensual= categoria*subcategoria
if(sueldo_basico_mensual>=1500 && sueldo_basico_mensual<=3000){
    alert("El sueldo basico mensual es de: u$s"+sueldo_basico_mensual+" -->"+" Rango Inicial");

}

else if(sueldo_basico_mensual>3000 && sueldo_basico_mensual<=4000){
    alert("El sueldo basico mensual es de: u$s"+sueldo_basico_mensual+" -->"+" Rango Intermedio");
}

else{
    alert("El sueldo basico mensual es de: u$s"+sueldo_basico_mensual+" -->"+" Rango Avanzado");
}
 
