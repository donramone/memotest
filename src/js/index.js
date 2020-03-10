
let totalIntentos = 0;
let totalCorrectos = 0;
let primeraCarta= null;
let segundaCarta= null;
let primeraSeleccion=null;
let segundaSeleccion=null;


let min = 0,
    sec = 0;
    hora = 0;
var cronometro = 0;

let array_imagenes=
  ["img/1.jpg",
	"img/1.jpg",
	"img/2.jpg",
  "img/2.jpg",
  "img/3.jpg",
	"img/3.jpg",
  "img/4.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/5.jpg",
	"img/6.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/8.jpg"
	]




const $front = document.querySelectorAll(".carta img")
const $timer = document.querySelector('.temporizador');
const $btnEmpezar = document.querySelector("#btn-empezar");
const $tablero = document.querySelector('#tablero');
const $movimientos = document.querySelector(".movimientos");



function parar(){
  document.getElementById("btn-empezar").value = "Jugar";
  document.getElementById("btn-empezar").innerText = "Jugar";
  pararCronometro();
  ocultarTodasLasCartas();
  totalIntentos=0;
  actualizarMovimientos(totalIntentos);
}

function jugar(){
  document.getElementById("btn-empezar").value = "Parar";
  document.getElementById("btn-empezar").innerText = "Parar";
  cronometro = setInterval(iniciarCronometro,1000);
  mezclarImagenes();
}

$btnEmpezar.onclick = function(){
  if(document.getElementById("btn-empezar").value === "Parar"){
    parar();    
  }
  else{
    jugar();
  }
}

$tablero.onclick = function(e) {
    let $elementoSeleccionado = e.target;
    if ($elementoSeleccionado.classList.contains('img-fluid')) {
      manejarCartaSeleccionada($elementoSeleccionado);
    }
}

function manejarCartaSeleccionada($cartaSeleccionada) {

  if($cartaSeleccionada.getAttribute('src') === 'img/dc.png'){
    if(primeraSeleccion === null) {
      primeraCarta = $cartaSeleccionada;
      primeraSeleccion= array_imagenes[$cartaSeleccionada.getAttribute('id')];
      mostrarCarta(primeraCarta,primeraSeleccion);
   
    }else if(segundaSeleccion === null){
      segundaCarta = $cartaSeleccionada;
      segundaSeleccion= array_imagenes[$cartaSeleccionada.getAttribute('id')];
      mostrarCarta(segundaCarta,segundaSeleccion);
      totalIntentos++;
      actualizarMovimientos(totalIntentos);
    }
  }
  
  if(segundaSeleccion !== null){
    if(compararCarta(primeraSeleccion,segundaSeleccion)){
      ocultarCarta(primeraCarta,segundaCarta);
    }else if(totalCorrectos===8){
      alert("WINNER!!! con tantos intentos: " + totalIntentos);
      parar();
    }
    primeraSeleccion = null;
    segundaSeleccion = null;
    

  }
}
function compararCarta(carta1, carta2){

    if(carta1 === carta2){
      totalCorrectos++;
      return false;
    }else{
      return true;
    }
}

function ocultarCarta(carta1,carta2){
  setTimeout(function () {
  carta1.src= 'img/dc.png';
  carta2.src= 'img/dc.png';
  }, 800);

}

function mostrarCarta(carta,imagen){
   carta.src = imagen;
  
}

function ocultarTodasLasCartas(){
  for (let i = 0; i < array_imagenes.length ; i++) {
      $front[i].src = 'img/dc.png';
  
  }
}

function mezclarImagenes() {
  let i, j, temp;
  for (i = array_imagenes.length - 1; i > 0; i--) {
  
    j = Math.floor(Math.random() * (i + 1));
    temp = array_imagenes[i];
    array_imagenes[i] = array_imagenes[j];
    array_imagenes[j] = temp;
  }
  return array_imagenes;    

}

function iniciarCronometro() {
  sec++;
  if (sec <= 60) {
      if (sec === 60) {
          sec = 0;
          min++;
          if (min === 60) {
              min = 0;
              hora++;
          }
      }
  }
  else {
      sec = 0;
  }
  $timer.textContent = mostrarDosDigitos(min) + ":" + mostrarDosDigitos(sec);
}

function pararCronometro(){
sec=0;
min=0;
hora=0;
clearInterval(cronometro);
$timer.textContent= "00:00";

}

function mostrarDosDigitos(numero){
  if(numero<10){
      numero = "0" + numero;
      return numero;
  }else{
      return numero;
  };
}

function actualizarMovimientos(intentos){
  $movimientos.innerText=intentos;
}
