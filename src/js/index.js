
let totalIntentos = 0, totalCorrectos = 0;
let min = 0, sec = 0, cronometro = 0;
let primeraCarta= null, segundaCarta= null;
let primeraSeleccion=null, segundaSeleccion=null;

let array_imagenes=["img/1.jpg","img/1.jpg","img/2.jpg","img/2.jpg","img/3.jpg","img/3.jpg","img/4.jpg","img/4.jpg",
        "img/5.jpg","img/5.jpg","img/6.jpg","img/6.jpg","img/7.jpg","img/7.jpg","img/8.jpg","img/8.jpg"];

const $carta = document.querySelectorAll(".carta img")
const $cronometro = document.querySelector('#cronometro');
const $btnEmpezar = document.querySelector("#btn-empezar");
const $tableroCartas = document.querySelector('#tablero');
const $movimientos = document.querySelector("#movimientos");


$btnEmpezar.onclick = function(){
  if(document.getElementById("btn-empezar").value === "Parar"){
    parar();    
  }
  else{
    jugar();
  }
}

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


$tableroCartas.onclick = function(e) {
    let $elemento = e.target;
    if ($elemento.classList.contains('img-fluid')) {
      manejarCartaSeleccionada($elemento);
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
  }, 750);

}

function mostrarCarta(carta,imagen){
   carta.src = imagen;
}

function ocultarTodasLasCartas(){
  for (let i = 0; i < array_imagenes.length ; i++) {
      $carta[i].src = 'img/dc.png';
  }
}

function mezclarImagenes() {
  let i, j, temp;
  
   for (i = array_imagenes.length - 1; i > 0; i--) {

    j = Math.floor(Math.random() * (i + 1));
    temp = array_imagenes[i];
    array_imagenes[i] = array_imagenes[j];
    array_imagenes[j] = temp;
  //  $carta[i].src = 'img/dc.png';
  }
  return array_imagenes;    
}

function iniciarCronometro() {
  let secFormat, minFormat;
  sec++;

  if (sec === 60){sec = 0;min++;}
  
  if (sec<10){secFormat="0"+sec;}else{secFormat=sec;}
  if (min<10){minFormat="0"+min;}else{minFormat=min;}
  
  $cronometro.textContent = minFormat + ":" + secFormat;
}

function pararCronometro(){
  sec=0;
  min=0;
  clearInterval(cronometro);
  $cronometro.textContent= "00:00";
}

function actualizarMovimientos(intentos){
  $movimientos.innerText=intentos;
}
