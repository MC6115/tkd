const nomb = prompt("Hola, Cual es tu nombre?");
function insertcontent(){
if (nomb !==null && nomb !== "") {
    const HelloElement = document.getElementById("Hello");
    HelloElement.innerHTML = "<strong>Hola " + nomb + ", aqui informacion que te pueda interesar<strong>";
}else{}
}

insertcontent()

function solicitarnumero(){
    const numero = prompt("Ingrese un numero");
    return Number(numero);
}

function sumar(){
    const numero1 = solicitarnumero();
    const numero2 = solicitarnumero();
    if (!isNaN(numero1) && !isNaN(numero2)){
         return numero1 + numero2;
    } else {
        return"La suma no se pudo hacer. :c ";
    }
}

const resultado = sumar();
console.log("Resultado", resultado);

//Function colorChange(){
    
//}


