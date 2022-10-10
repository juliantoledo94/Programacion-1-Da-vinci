/*
1- Crear una clase Domicilio con las 
propiedades publicas: calle, numero, departamento, localidad, provincia codigo_postal.
2-Cambiar las propiedades publicas del item anterior por privadas y agregar setters para cada una.
3-Crear una clase Persona con las propiedades publicas: nombre, apellido, fecha_nacimiento, dni.
4- Agregar una propiedad privada con su setter que se llame domicilio (para guardar un objeto del tipo Domicilio).
5- Crear una clase Familia. Crear un metodo publico agregarIntegrante que reciba una Persona y la agregue a una propiedad privada (Array).
6- Agregar un metodo publico obtenerCantidadIntegrantes que devuelva la cantidad de personas en esa familia.
7- Agregar un metodo publico listarIntegrantes que devuelva un Array de Strings con los nombres de todos los integrantes.
8- Agregar un metodo publico obtenerDomicilio que devuelva un String con la calle y numero de la familia.
*/

class Domicilio{
    #calle;
    #numero;
    #departamento;
    #localidad;
    #provincia;
    #codigo_postal;
    constructor(calle, numero, departamento, localidad, provincia, codigo_postal){
        this.#calle = calle;
        this.#numero = numero;
        this.#departamento = departamento;
        this.#localidad = localidad;
        this.#provincia = provincia;
        this.#codigo_postal = codigo_postal;

    }

    set setCalle(calle){
        this.#calle=calle;
    }

    set setNumero(numero){
        this.#numero = numero;
    }

    set setDepartamento(departamento){
        this.#departamento = departamento;
    }

    set setLocalidada(localidad){
        this.#localidad= localidad;
    }

    set setProvincia(provincia){
        this.#provincia=provincia;
    }

    set setCodigo_posta(codigo_postal){
        this.#codigo_postal=codigo_postal;
    }

    get getCalle(){
        return this.#calle;
    }

    get getNumero(){
        return this.#numero;
    }

    get getDepartamento(){
        return this.#departamento;
    }

    get getLocalidad(){
        return this.#localidad;
    }

    get getProvincia(){
        return this.#provincia;
    }
    
    get getCodigoPostal(){
        return this.#codigo_postal;
    }

}

class Persona{

    #domicilio;

    constructor(nombre, apellido, fecha_nacimiento, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.dni = dni;
        this.#domicilio = domicilio;
    }

    set setDomicilio(domicilio){
        this.#domicilio= domicilio;

    }

    get getDomicilio(){
        return this.#domicilio;
    }

    


}

// 5- Crear una clase Familia. Crear un metodo publico agregarIntegrante que reciba una Persona y la agregue a una propiedad privada (Array).

class Familia{
    #integrantes
    constructor(){
        this.#integrantes=[];
        

    }

    agregarIntegrantes(persona){
        this.#integrantes.push(persona);
    }


    //ListarPersonas es el metodo publico "listarIntegrantes" solicitado.
    
    listarPersonas(){
        let listaIntegrantes =[];
        for(persona of this.#integrantes){
            listaIntegrantes.push(persona);

        }
        return listaIntegrantes;
    }

    obtenerCantidadIntegrantes(){
        
        return this.#integrantes.length;

    }


    
    


}

let domicilio = new Domicilio("Alvear",748,0,"Lomas de Zamora","Buenos Aires",1832);

let persona = new Persona("Juan", "Romero", "13/07/1994",38406388);

persona.setDomicilio;
persona.getDomicilio;

let familia = new Familia();

familia.agregarIntegrantes(persona);

persona = new Persona("pepe","romero","13/07/1988",30303030);




familia.agregarIntegrantes(persona);

persona = new Persona("Julio","Romero","14/08/2000",404040);

familia.agregarIntegrantes(persona);






