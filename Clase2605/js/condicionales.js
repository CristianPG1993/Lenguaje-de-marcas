//CONDICIONALES


let a = 10;
let b = 5;

//Escriba un programa en JS el cual tenga que calcular 
// si a es mayor que b, o si b es mayor que a, o si a y b son iguales

if(a > b){
    console.log("a es mayor que b");
}else if(a === b){
    console.log("a es lo mismo que b");
}else{
    console.log("a no es lo mismo que b, y a es menor que b");
}


let dia = "Lunes";

switch(dia){
    case "Lunes":
        console.log("Voy a estudia JS");
        break;
    case "Martes":
        console.log("Voy a estudiar Java");
        break;
    case "Miercoles":
        console.log("Voy a estudiar SQL");
        break;
    default:
        console.log("Voy a descansar");
}