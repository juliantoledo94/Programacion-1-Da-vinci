/*
Tenemos una especie de "calculadora", con 7 botones:

2 para ingresar valores numéricos; 4 para realizar una operación aritmética; Uno que muestra el resultado.
Ya tienen una función asignada a su onclick:

obtenerNumero1, obtenerNumero2, operacion, mostrar.
El funcionamiento debe ser el siguiente:

Ingresar dos valores.
Seleccionar una operación.
Mostrar el resultado.
Se debe verificar que los datos sean válidos (en caso contrario notificarlo). se deben utilizar variables globales.

Extra: crear una función para ingresar y validar un número.
*/

var num1;
var num2;



function validar_numeros(num){
    let flag=false;
    do{
        
        
        if(!isNaN(num)){
            flag=true;
            return num;
        }
        else{
            alert("el numero ingresado no es valido intente nuevamente");
            flag=false;
            num=parseInt(prompt("ingrese numero nuevamente: "));
        }
    }while(flag==false){}

}

function ingrese_primer_valor(){
    let ingresar=parseInt(prompt("ingrese numero 1 a validar: "));
    num1=validar_numeros(ingresar);
    console.log(num1);
    return num1;
    

}

function ingrese_segundo_valor(){
    let ingresar=parseInt(prompt("ingrese numero 2 a validar: "));
    num2=validar_numeros(ingresar);
    console.log(num2);
    return num2;

}

function suma(){
    let aux1;
    let aux2;
    aux1=num1;
    aux2=num2;
    let sumar=aux1+aux2
    
    return(sumar);
}

function resta(){
    let aux1;
    let aux2;
    aux1=num1;
    aux2=num2;
    let restar=aux1-aux2
    
    return(restar);
}

function multiplicacion(){
    let aux1;
    let aux2;
    aux1=num1;
    aux2=num2;
    let multiplicar=aux1*aux2
    
    return(multiplicar);
}

function division(){
    let aux1;
    let aux2;
    aux1=num1;
    aux2=num2;
    let dividir;
    let flag =false;
    do{
        if(aux2!=0){
            dividir=aux1/aux2;
            flag=true;
            
            return(dividir.toFixed(2));

        }
        else{
            alert("Error el divisor no puede ser 0 intente nuevamente");
            flag=false
            aux2=parseInt(prompt("ingrese el segundo numero nuevamente y que sea distinto de 0: "));
            
        }
    }while(flag==false){}
}


function resultado(){
    
    if (!isNaN(suma())){
        console.log("suma: "+suma());
    }
    else{
        console.log("no se registro ninguna suma ");
    }

    if(!isNaN(resta())){
        console.log("resta: "+resta());
    }
    else{
        console.log("no se registro ninguna resta");
    }

    if(!isNaN(multiplicacion())){
        console.log("multiplicacion: "+multiplicacion());
    }
    else{
        console.log("no se registro ninguna multiplicacion");
    }

    if(!isNaN(division())){
        console.log("division: "+division());
    }
    else{
        console.log("no se registro ninguna resta");
    }
    
}