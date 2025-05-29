function ejercicio1(){
    let string = document.getElementById("mensaje1").value;
    console.log(string)
}

function ejercicio2(){

    let string = document.getElementById("mensaje2").value;
    alert("String: "+string);

}

function ejercicio3(){

    let string = document.getElementById("mensaje3").value;
    document.getElementById("parrafo1").innerHTML = string;

}

function ejercicio4(){

    let string = prompt("Introduce un mensaje de texto: ");
    console.log(string);

}

function ejercicio5(){
    let string = prompt("Introduce un mensaje de texto: ");
    alert("Cuidado: "+string)
}

function ejercicio6(){

    let string = prompt("Introduce un mensaje de texto: ");
    document.getElementById("parrafo2").innerHTML = string;
    

}