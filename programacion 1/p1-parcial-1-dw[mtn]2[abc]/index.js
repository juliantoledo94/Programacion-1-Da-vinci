

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



}

class Pista{
    #nombre;
    #duracion;

    constructor(nombre,duracion){
        this.#nombre = nombre;
        this.#duracion = duracion;
    }

    set setNombrePista(nombre){
        this.#nombre = nombre;
        
    }

    set setDuracion(duracion){
        this.#duracion = duracion;
    }

    
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
            mensaje=prompt("ingrese nuevamente pero sin numeros")
            flag=false;
            
        }
    }while(flag==false){}

}

function Cargar(){
    
    disco.setNombre=validarStrings(prompt("ingrese nombre del disco:"));
    disco.setAutor=prompt("ingrese autor")
    disco.setCodigo=parseInt(prompt("ingrese codigo")); 
    /*
    pista.setNombrePista=prompt("ingrese nombre de la pista: ");
    pista.setDuracion=parseInt(prompt("ingrese duracion en segundos"));
    disco.agregarPista(pista);
    */
   CrearPistas();

      
    

    

    lista_discos.push(disco);

    return lista_discos;

}


function Mostrar(){
    
}

function CrearPistas(){

    confirmacion=prompt("crear nueva pista? s/n");

    while(confirmacion!="n"){
        
        pista.setNombrePista=prompt("ingrese nombre de la pista: ");
        pista.setDuracion=parseInt(prompt("ingrese duracion en segundos"));
        disco.agregarPista(pista);
        confirmacion=prompt("crear nueva pista? s/n");

        if(confirmacion == "n"){
            break;
        }
    }

}


// let disco = new Disco(setNombre=prompt("ingrese nombre del disco:"),setAutor=prompt("ingrese autor"),setCodigo=parseInt(prompt("ingrese codigo")));

// let pista = new Pista(setNombrePista=prompt("ingrese nombre de la pista: "),setDuracion=parseInt(prompt("ingrese duracion en minutos")));

// disco.agregarPista(pista)

let disco= new Disco();

let pista = new Pista();

let lista_discos= [];
