function calcularDiaSemana1(){

    let num = parseInt(prompt("Introduce un número entre 1 y 7: "));

    if(num === 1){
        alert("El día 1 de la semana es Lunes");

    }else if(num === 2){
        alert("El día 2 de la semana es Martes");
    }else if(num === 3){
        alert("El día 3 de la semana es Miércoles");
    }else if(num === 4){
        alert("El día 4 de la semana es Jueves");
    }else if(num === 5){
        alert("El día 5 de la semana es Viernes");
    }else if(num === 6){
        alert("El día 6 de la semana es Sábado");
    }else{
        alert("El día 7 de la semana es Domingo");
    }
}

function calcularDiaSemana2(){

    let num = parseInt(prompt("Introduce un número entre 1 y 7: "));

    switch (num) {
        case 1:
            alert("El día 1 de la semana es Lunes");
            break;
        case 2:
            alert("El día 2 de la semana es Martes");
            break;
        case 3:
            alert("El día 3 de la semana es Miércoles");
            break;
        case 4:
            alert("El día 4 de la semana es Jueves");
            break;
        case 5:
            alert("El día 5 de la semana es Viernes");
            break;
        case 6:
            alert("El día 6 de la semana es Sábado");
            break;
        case 7:
            alert("El día 7 de la semana es Domingo");
            break;
    
        default:
            alert("No es un número válido.")
            break;
    }

}

function calcularDiaSemana3(){

    let num = parseInt(document.getElementById("numero_ejercicio3").value);

    if(num === 1){
        alert("El día 1 de la semana es Lunes");

    }else if(num === 2){
        alert("El día 2 de la semana es Martes");
    }else if(num === 3){
        alert("El día 3 de la semana es Miércoles");
    }else if(num === 4){
        alert("El día 4 de la semana es Jueves");
    }else if(num === 5){
        alert("El día 5 de la semana es Viernes");
    }else if(num === 6){
        alert("El día 6 de la semana es Sábado");
    }else{
        alert("El día 7 de la semana es Domingo");
    }

}

function calcularDiaSemana4(){
    let num = parseInt(document.getElementById("numero_ejercicio4").value);

    switch (num) {
        case 1:
            alert("El día 1 de la semana es Lunes");
            break;
        case 2:
            alert("El día 2 de la semana es Martes");
            break;
        case 3:
            alert("El día 3 de la semana es Miércoles");
            break;
        case 4:
            alert("El día 4 de la semana es Jueves");
            break;
        case 5:
            alert("El día 5 de la semana es Viernes");
            break;
        case 6:
            alert("El día 6 de la semana es Sábado");
            break;
        case 7:
            alert("El día 7 de la semana es Domingo");
            break;
    
        default:
            alert("No es un número válido.")
            break;
    }
}