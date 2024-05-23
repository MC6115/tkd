let pregunta = prompt("Responde! ¿Cuál es el bucle que no para hasta que se indique como false?");
let acccess = false;

while (!acccess) {
  if (pregunta === "while" || pregunta === "WHILE" || pregunta === "While") {
    acccess = true;
  } else {
    pregunta = prompt("Respuesta incorrecta. Inténtelo de nuevo. ¿Cuál es el bucle que no para hasta que se indique como false?");
  }
}

const popupButton = document.getElementById('popupButton');

popupButton.addEventListener('click', () => {
  const response = prompt('Rate it! 1-10');
  if (response !== null && response !== "") {
    alert('You rated it ' + response + ' out of 10!');
  }
});


