// Creando el lienzo
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
context.fillStyle='#FFFFFF';

// Declarando variables
const ancho = context.canvas.width / 2;
const alto = context.canvas.height / 2;
let inicio = 0;
let posicion = 0;
let incremento;

function dibujar(){
  // Incremento esperado para cada iteración
  incremento = (posicion/100) * Math.PI * 2;
  
  // Cosntruyendo límites del circulo, color y ancho del borde
  context.clearRect(0, 0, 400, 400);
  context.lineWidth = 20;
  context.strokeStyle = '#4B0082';
  
  // Iniciamos el dibujo
  context.beginPath();
  /* Centro en ancho y alto, radio 50 px
  desde inicio "0" hasta el incremento esperado,
  sentido antihorario
  */
  context.arc(ancho, alto, 50, inicio, incremento+inicio, false);
  context.stroke();
  
  // Una vez que llegamos al 100% se detiene la ejecución
  if(incremento >= 100){
    clearTimeout(circulo);
  }

// Para avanzar
posicion++;
}


// La función setInterval permite ejecutar una función
// cada cierto tiempo, en este caso 10 ms
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
var circulo = setInterval(dibujar, 10);