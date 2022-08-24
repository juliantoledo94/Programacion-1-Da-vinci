/*
Se recogen los siguientes datos para una encuesta: ciudad, sexo (H o M) y edad (0 a 110)

Calcule e informe los siguientes datos:

Promedio de edad general
Promedio de edad de las mujeres
Promedio de edad de los hombres
Porcentaje de mujeres menores a 21 años
Porcentaje de hombres mayores a 21 años
La mayor edad ingresada de las mujeres
La menor edad ingresada de los hombres
Los tres valores ingresados deben ser validados según corresponda
*/


var sexo = prompt("ingrese sexo (H o M): ").toLocaleLowerCase();


var acumEdad = 0;
var contEdad= 0;

var AcumEdadH=0;
var contEdadH=0;

var AcumEdadM=0;
var contEdadM=0;

var listah=[];
var listam=[];



while(sexo!=-1){
    
    if(sexo=="h"){
        var edad = parseInt(prompt("ingrese edad: "));
        var ciudad =prompt("ingrese ciudad: ");
        if(edad>0 && edad< 110){
            AcumEdadH=AcumEdadH+edad;
            contEdadH+=1
            listah.push(edad);
            
            while(!isNaN(ciudad)){
                alert("ciudad error");
                var ciudad =prompt("ingrese ciudad n: ");
                if(isNaN(ciudad)){
                    break;
                }
            }
            sexo = prompt("ingrese sexo (H o M): ").toLocaleLowerCase();
        
            

        }
        else{
            alert("edad no es correcta ingrese nuevamente la edad")
            //var edad = parseInt(prompt("ingrese edad nuevamente: "));
        }
    
        
    }

    else if(sexo=="m"){
        var edad = parseInt(prompt("ingrese edad: "));
        var ciudad =prompt("ingrese ciudad: ");
        if(edad>0 && edad< 110){
            AcumEdadM=AcumEdadM+edad;
            contEdadM+=1
            listam.push(edad);

            while(!isNaN(ciudad)){
                alert("ciudad error");
                var ciudad =prompt("ingrese ciudad n: ");
                if(isNaN(ciudad)){
                    break;
                }
            }
            sexo = prompt("ingrese sexo (H o M): ").toLocaleLowerCase();
            

        }
        else{
            alert("edad no es correcta ingrese nuevamente la edad")
            //var edad = parseInt(prompt("ingrese edad nuevamente: "));
        }

    }

    else{
        alert("sexo ingresado no valido ingrese sexo  nuevamente")
        sexo = prompt("ingrese sexo (H o M) nuevamente: ").toLocaleLowerCase();
        
    }

    

   

    

    
}

var promedioH = AcumEdadH/contEdadH;
document.write("El promedio de la edad de los hombres es: "+" "+promedioH.toFixed(1)+"<br>");

var promedioM=AcumEdadM/contEdadM;
document.write("El promedio de la edad de los mujeres es: "+" "+promedioM.toFixed(1));


var promedioGeneral=(AcumEdadH+AcumEdadM)/(contEdadH+contEdadM);

document.write("<br>"+"el promedio general es : "+" "+promedioGeneral.toFixed(1)+"<br>");




var contMh=0;


for(var i =0; i<listah.length;i++){
    if(listah[i]<21){
        
        contMh+=1;
        
    }
    

}


document.write("Porcentaje hombres menores a 21: "+" "+((contMh*100)/listah.length).toFixed(2));

document.write("<br>");
var contMM=0;
for(var j =0; j<listam.length;j++){
    if(listam[j]<21){
        
        contMM+=1;
        
    }
    

}


document.write("Porcentaje mujeres menores a 21: "+" "+((contMM*100)/listam.length).toFixed(2));

var menorEdad=listam[0];
document.write("<br>");

for(var i =0; i<listam.length;i++){
    if(listam[i]<menorEdad){
        menorEdad=listam[i];
    }
}

document.write("Menor edad de las mujeres: "+menorEdad);


var mayorEdad=listah[0];



for(var i =0; i<listah.length;i++){
    if(mayorEdad<listah[i]){
        mayorEdad=listah[i];
    }
}
document.write("<br>");
document.write("Mayor edad de las hombres: "+mayorEdad);