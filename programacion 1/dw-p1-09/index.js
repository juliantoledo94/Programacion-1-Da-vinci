// httpsgithub.comdavinci-jsp1-ej-09

/*
1- Crear una matriz de 2x3 (dos filas, tres columnas) los datos no importan. Mostrarla en la consola (sin iterar)

matriz=[
    [],[],[]
]

console.log(matriz);
*/

/*2- Crear una matriz de 3x4 (tres filas, tres columnas) e imprimir en la consola por filas.

let matriz=[
    [1,2,3],[4,5,6,],[7,8,9]
]


for(let filas of matriz){
    console.log(filas);
}
*/

/*3- Crear una matriz de 3x2 (tres filas, dos columnas) e imprimir en la consola cada elemento.

let matriz= [
    [1,2],[3,4],[5,6]
]



for(let filas of matriz){
    
    
    for(let columna of filas){
        console.log(columna);
    }
}

console.log("------------------METODO 2-----------------------------");


filas=matriz.length;

for(let i = 0; i< filas;i++){
    let fila=matriz[i];
    let columna=fila.length;
    for(let j = 0; j<columna;j++){
        console.log(fila[j]);
    }
}


*/


/*4- Crear una matriz de 3x3 e inicializar todos sus elementos en null con un bucle. Mostrarla entera en consola. Deberia quedar: 



matriz=[
    [],[],[]
]

for(let filas of matriz){
    
    let i=0;
    columnas=filas.lenght;
    while(i < 3){
        filas[i]=null;
        i++;
    }
}
console.log(matriz);

*/


/*5- Crear una matriz de 3x3 vacia (valores null por defecto), pedir por prompt para cargar solo la primer fila y mostrar la matriz entera. Ejemplo: 


matriz=[];

filas=3;
columnas=3;

for(let i=0;i<filas;i++){
    let fila=[];
    for(let j= 0; j<columnas;j++){
        fila.push(null);
    }
    matriz.push(fila);
}
console.log(matriz);

for(let j=0; j<columnas; j++){
    matriz[0][j]=prompt("ingrese elemento [0][j] de la matriz ");
}

*/

/*6- Crear una matriz de 3x3 vacia (valores null por defecto), pedir por prompt para cargar solo la primer columna y mostrar la matriz entera.



matriz=[];

filas=3;
columnas=3;

for(let i=0;i<filas;i++){
    let fila=[];
    for(let j= 0; j<columnas;j++){
        fila.push(null);
    }
    matriz.push(fila);
}
console.log(matriz);

for(let i=0; i<filas;i++){
    matriz[i][0]=prompt("ingrese elementos[i][0]: ");
}

*/

/*7- Crear una matriz de 3x3 vacia (valores null por defecto), pedir por prompt para cargar solo la diagonal y mostrar la matriz entera.

let matriz=[];
let filas=3;
let columnas= 3;

for(let i=0;i< filas; i++){
    let fila=[];
    for(let j= 0 ; j<columnas; j++){
        fila.push(null);
    }
    matriz.push(fila);
}

console.log(matriz);

for(let i=0; i< filas;i++){
    matriz[i][i]=prompt("ingrese elementos de la matriz[i][i]: ");
}

console.log("----------------METODO 2 --------------------------")

for(let i in matriz){
    matriz[i][i]=prompt("ingrese elementos matriz[i][i]: ")
}
*/

/*8- Pedir por prompt una cantidad de filas y de columnas, crear una matriz de esas dimensiones.


let matriz=[];
let filas=parseInt(prompt("ingrese numero de flias: "));
let columnas=parseInt(prompt("ingrese numero de columnas: "));
let relleno= 1;

for(let i= 0; i<filas;i++){
    let fila=[];
    for(let j = 0; j<columnas;j++){
        fila.push(relleno);
        relleno++;
        
    }
    
    
    matriz.push(fila);
}
console.log(matriz);

*/

/*9- Crear una matriz de 3x3 vacia (valores null por defecto), pedir por prompt una fila, columna y un valor. Introducir ese valor en la posicion correcta de la matriz. Se puede hacer esto indeterminada cantidad de veces.

let matriz=[]

let filas=3
let columnas=3

let ingreso_fila=parseInt(prompt("ingrese a la fila: "));


for(let i =0; i<filas;i++){
    let fila=[]
    for(let j=0;j<columnas;j++){
        fila.push(null);
    }
    matriz.push(fila);
}
console.log(matriz);



let flag=false;

while(ingreso_fila!=-1){ 

    if(ingreso_fila!=-1){
        
        let ingreso_columna=parseInt(prompt("ingrese a la columna: "));
        let valor=prompt("ingrese el valor deseado: ")
        matriz[ingreso_fila][ingreso_columna]=valor;
        ingreso_fila=parseInt(prompt("ingrese a la fila: "));

        

    }
    else{
        break;
    }
         
}
*/


/*10- Pedir por prompt una cantidad de filas y columnas, crear una matriz de esas dimensiones y luego pedir al usuario por prompt los valores para llenar la matriz.

let matriz=[]

let filas=parseInt(prompt("ingrese cantidad de filas: "));
let columnas=parseInt(prompt("ingrese cantidad de columnas: "));




for(let i =0; i<filas;i++){
    let fila=[]
    for(let j=0;j<columnas;j++){
        fila.push(prompt("ingrese los valores para llenar la matriz: "));
    }
    matriz.push(fila);
}
console.log(matriz);

*/

/* 11- Pedir por prompt una cantidad de filas y columnas, crear dos matrices de esas dimensiones y luego pedir al usuario por prompt los valores para llenar la matriz (deben ser numeros), sumar ambas matrices y mostrar la matriz resultante. Ejemplo:


let a=[]
let b=[]
let filas=parseInt(prompt("ingrese cantidad de filas: "));
let columnas=parseInt(prompt("ingrese cantidad de columnas: "));
let c=[];




for(let i =0; i<filas;i++){
    let fila=[]
    for(let j=0;j<columnas;j++){
        fila.push(parseInt(prompt("ingrese los valores para llenar la matriz a: ")));
    }
    a.push(fila);
}
console.log(a);


for(let i =0; i<filas;i++){
    let fila=[]
    for(let j=0;j<columnas;j++){
        fila.push(parseInt(prompt("ingrese los valores para llenar la matriz b: ")));
    }
    b.push(fila);
}
console.log(b);


for(let i =0; i<filas;i++){
    let fila=[]
    for(let j=0; j<columnas;j++){
    fila.push(a[i][j]+b[i][j]);
    }
    c.push(fila);
    
}

console.log(c);

*/