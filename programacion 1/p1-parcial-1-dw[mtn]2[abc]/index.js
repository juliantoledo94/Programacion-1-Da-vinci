let lista_discos = [];
let disco;
let pista;

class Disco {
    #nombre;
    #autor;
    #codigo;
    #pistas;

    constructor(nombre, autor, codigo) {

        this.#nombre = nombre;
        this.#autor = autor;
        this.#codigo = codigo;
        this.#pistas = [];

    }

    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    set setAutor(autor) {
        this.#autor = autor;

    }

    set setCodigo(codigo) {
        this.#codigo = codigo;
    }

    get getNombre(){
        return this.#nombre;
    }

    get getAutor(){
        return this.#autor;
    }


    get getCodigo(){
        return this.#codigo;
    }

    get getPistas(){
        return this.#pistas;
    }

    agregarPista(pista) {
        this.#pistas.push(pista);
    }

    listarPistas() {

        let listaPistas = [];

        for (pista of this.#pistas) {
            listaNombres.push(pista);
        }

        return listaPistas;


    }



}

class Pista {
    #nombre;
    #duracion;

    constructor(nombre, duracion) {
        this.#nombre = nombre;
        this.#duracion = duracion;
    }

    set setNombrePista(nombre) {
        this.#nombre = nombre;

    }

    set setDuracion(duracion) {
        this.#duracion = duracion;
    }

    get getNombrePista(){
        return this.#nombre;
    }

    get getDuracion(){
        return this.#duracion;
    }


}




function validarStrings(mensaje) {

    let flag = false;
    do {


        if (isNaN(mensaje)) {
            flag = true;
            return mensaje;
        } else {
            alert("No esta ingresando un string");
            mensaje = prompt("ingrese nuevamente pero sin numeros")
            flag = false;

        }
    } while (flag == false) {}

}

function validarNumeros(mensaje){

    let flag = false;
    do {


        if (!isNaN(mensaje)) {
            flag = true;
            return mensaje;
        } else {
            alert("No esta ingresando un numero");
            mensaje = prompt("ingrese nuevamente pero solo numeros")
            flag = false;

        }
    } while (flag == false) {}

}

function Cargar() {

    disco = new Disco();

    disco.setNombre = validarStrings(prompt("ingrese nombre del disco:"));
    disco.setAutor = validarStrings(prompt("ingrese autor"));
    //disco.setCodigo = validarNumeros(parseInt(prompt("ingrese codigo")));

    do {

        disco.setCodigo = validarNumeros(parseInt(prompt("ingrese codigo")));
    
        while(!(disco.getCodigo >= 1 && disco.getCodigo <= 999)){
          disco.setCodigo = prompt("Ingresa el codigo numérico único del disco (1-999)");
        }
    
        var check = chequearCodigoUnico(disco.getCodigo);

        
    
      } while (check);

    /*
    pista.setNombrePista=prompt("ingrese nombre de la pista: ");
    pista.setDuracion=parseInt(prompt("ingrese duracion en segundos"));
    disco.agregarPista(pista);
    */

    CrearPistas();

    lista_discos.push(disco);

    return lista_discos;

}


function Mostrar() {

    let info="";

    
        
        for(let datoObjeto of lista_discos){
            
            info+=`<p> Nombre del disco: ${datoObjeto.getNombre}</p>`;
            info+="<ul>";
            info+=`<li>Nombre del autor o banda: ${datoObjeto.getAutor}</li>`;
            info+=`<li>Codigo: ${datoObjeto.getCodigo}</li>`;
            for(pista of datoObjeto.getPistas){
                info+=`<li>Nombre de la pista: ${pista.getNombrePista} . Duracion : ${pista.getDuracion}</li>`;
                //info+=`<li>Duracion de la pista:${pista.getDuracion}</li>`;
            }
            //info+=`<li>Nombre de la pista:${datoObjeto.getNombrePista}</li>`;
            //info+=`<li>Duracion de la pista:${datoObjeto.getNombrePista}</li>`;
            info+="</ul>";          

        }
        
        document.getElementById("info").innerHTML =info;
    }
    



function CrearPistas() {


    do{
        pista = new Pista();
        pista.setNombrePista = validarStrings(prompt("ingrese nombre de la pista: "));
        pista.setDuracion = validarNumeros(parseInt(prompt("ingrese duracion en segundos")));
        disco.agregarPista(pista);
    }while(confirm("¿Queres agregar una nueva pista?"));


}


// let disco = new Disco(setNombre=prompt("ingrese nombre del disco:"),setAutor=prompt("ingrese autor"),setCodigo=parseInt(prompt("ingrese codigo")));

// let pista = new Pista(setNombrePista=prompt("ingrese nombre de la pista: "),setDuracion=parseInt(prompt("ingrese duracion en minutos")));

// disco.agregarPista(pista)

function chequearCodigoUnico(codigo){
    let flag;
    
    for (let i = 0; i < lista_discos.length; i++) {
        
        if (lista_discos[i].getCodigo == codigo) {
          flag = true;
          break;
        } else {
          flag = false;
        }
      }
      return flag;
}