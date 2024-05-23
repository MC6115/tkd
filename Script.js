const nomb = prompt("Hola, Cual es tu nombre?");
function insertcontent(){
if (nomb !==null && nomb !== "") {
    const HelloElement = document.getElementById("Hello");
    HelloElement.innerHTML = "<strong>Hola " + nomb + ", aqui informacion que te pueda interesar<strong>";
}else{
    const HelloElement=document.getElementById("Hello")
    HelloElement.innerHTML="Hola!, aqui info que te pueda interesar"}
}


//Function colorChange(){
    
//}




