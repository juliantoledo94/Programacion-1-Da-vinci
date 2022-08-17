/*
    Se piden tres números
        - límite inferior
        - límite superior
        - número a analizar

    Si el número esta en el rango, informamos si es par
    Si no esta dentro de los rangos, informamos si es impar
*/

/* Obtengo los tres numeros por un prompt */

let limite_inferior= parseInt(prompt("ingrese el limite inferior"));
let limite_superior= parseInt(prompt("ingrese el limite superior"));
let numero = parseInt(prompt("Ingrese el numero"));

if(numero>=limite_inferior && numero<=limite_superior){
    if(numero%2==0){
        alert(numero+" "+"es par");

    }
    
}
else{
    if(numero%2!=0){
        alert(numero+" "+"es impar");
    }
}