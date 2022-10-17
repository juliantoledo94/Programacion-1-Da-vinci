
/*
Cualquier faltante de los requisitos que se presentan a continuación, hará que la entrega se considere desaprobada, aunque haya hecho cosas no solicitadas o del punto siguiente. Esta condición es mínima e innegociable.

Al hacer clic en el botón "Cargar nuevo disco" se debe disparar la función Cargar que solicita al usuario la siguiente información de un disco:
Nombre del disco.
Autor o banda del disco.
Código numérico único del disco:
Si el usuario ingresa un código numérico que ya fue cargado, se deberá pedir otro código (hasta ingresar uno que no haya sido utilizado anteriormente).
Todas las pistas del disco, donde cada pista tiene un nombre y una duración:
La cantidad de pistas a ingresar NO debe ser fija.
No se debe preguntar cuántas pistas hay que cargar, el dato se desconoce.
Al finalizar la carga de una pista, se debe confirmar si se desea ingresar otra más.
Cuando el usuario decide dejar de cargar pistas, finaliza la acción de la función.
En todo caso debe validarse que los datos ingresados sean válidos:
El nombre del disco, autor/banda y nombre de la pista no pueden quedar vacíos.
El código numérico único del disco no puede ser menor a 1, ni mayor a 999.
La duración de cada pista debe estar entre 0 y 7200 (segundos) inclusive.
Al hacer clic en el botón "Mostrar discos", la función Mostrar debe mostrar cada disco con su nombre, autor/banda, código único y todas las pistas con sus respectivos datos: nombre y duración.
Hay que destacar visualmente con rojo las duraciones mayores a 180.
*/

class Disco{
    #nombre;
    #autor
    #codigo;
    #pistas;

    constructor(nombre,autor,codigo){
        
        this.#nombre = nombre;
        this.#autor = autor;
        this.#codigo = codigo;
        this.#pistas = [];

    }

    set setNombre(nombre){
        this.#nombre = nombre;
    }

    set setAutor(autor){
        this.#autor = autor;
    
    }

    set setCodigo(codigo){
        this.#codigo = codigo;
    }

    agregarPista(pista){
        this.#pistas.push(pista);
    }

    listarPistas(){

        let listaPistas=[];

        for(pista of this.#pistas){
            listaNombres.push(pista);
        }

        return listaPistas;


    }



    validarCodigo(codigo){

        let valido = false;
       

    }
}

class Pista{
    #nombre
    #duracion

    constructor(nombre,duracion){
        this.#nombre = nombre;
        this.#duracion = duracion;
    }

    set setNombre(nombre){
        this.#nombre = nombre;
        
    }

    set setDuracion(duracion){
        this.#duracion = duracion;
    }
}



function Cargar(){

}

function validarStrings(mensaje){

    let flag=false;
    do{
        
        
        if(isNaN(mensaje)){
            flag=true;
            return mensaje;
        }
        else{
            alert("No esta ingresando un string");
            flag=false;
            
        }
    }while(flag==false){}

}


