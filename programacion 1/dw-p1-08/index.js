/*
Hay un boton que dice "Calcular Impuesto"
- Pedir al usuario al clickearlo: el precio de un producto y el IVA (21% por defecto) iva tiene que estar entre 0 y 100
- Pasar los datos a una funcion que calcule el impuesto y devuelva el mensaje con el formato: 
"Precio: valor - IVA: iva% - Total: precio total:

*/

// usar do while para validar ingresar precio, otra funcion para ingresar y validar iva,





function ingresar_precio(){
    let flag=false;
    do{
        
        let ingresar = parseFloat(prompt("ingrese el precio: "));
        
        if(!isNaN(ingresar) && ingresar>0){
            flag=true
            return ingresar;
        }

        else if(ingresar<=0){
            alert("el numero a ingresar debe ser mayor a 0");
        }

        else{
            alert("No ingreso un numero intente nuevamente.");
            flag=false;
        }
       


    }while(flag==false){}
}

function ingresar_iva(){
    let flag=false;

    do{
        let ingresar = parseInt(prompt("ingrese iva: "));

        if(!isNaN(ingresar) && ingresar>0 && ingresar<=100){
            flag=true;
            return ingresar;
        }
        
        else if(isNaN(ingresar)){
            ingresar=21;
            flag=true;
            return ingresar;
        }

        else{
            alert("el iva es menor a 0 o mayor a 100");
            flag=false;
        }
    }while(flag==false){}
}



function resolucion(num1,num2){
    let calculo=num1*(num2/100)+num1;
    return calculo; 
}


function calcularImpuesto(){

    precio=ingresar_precio()
    console.log("precio ingresado: "+precio);

    iva=ingresar_iva();
    console.log("iva ingresado: "+iva);

    let respuesta=resolucion(precio,iva);
    console.log("precio final: "+respuesta);
}