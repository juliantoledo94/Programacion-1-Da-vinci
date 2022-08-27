"use strict";

/*
Hay dos botones:

El primero dice “Ingresar un número”, que al hacerle click una función debe ingresar un número entero
El segundo dice “Mostrar paridad del número”, que al hacerle click una función debe mostrar mediante console.info si el número es par, impar o cero
Se deben validar los valores ingresados
Se debe considerar la posibilidad de que el usuario quiera ver antes de ingresar, realizar lavalidación
*/

var numero;


function ingresar(){
    let ingresar=parseInt(prompt("ingrese un numero: "));
    if(!isNaN(ingresar)){
        numero=ingresar;
    }
    //let ingresar=parseInt(prompt("ingrese un numero: "));
    else{
        alert("no esta ingresando un numero intente nuevamente")
    }
    return numero;
    
    
}

function mostrar(){
    
    if(numero%2==0){
        console.log("el núimero: "+numero+" es par");
    }

    else{
        console.log("El número: "+numero+" es impar");

    }
        

}













