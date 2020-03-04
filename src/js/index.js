let $primeraCarta = null;

const $front = document.querySelectorAll(".carta img")
const TOTAL_CARTAS = 15;
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



const $btnEmpezar = document.querySelector("#btn-empezar");
const $tablero = document.querySelector('#tablero');


$btnEmpezar.onclick = function(){

  cargarImagenesCartas(mezclarImagenes());
  //iniciar timer.
  //desbloquear cartas
  // cargar imagenes al tablero

}

$tablero.onclick = function(e) {
    let $elemento = e.target;
    const idCarta = e.target.getAttribute('id');
    // let idDeCartaSeleccionada = e.attributes.id.value;
   
    if ($elemento.classList.contains('img-fluid')) {

      manejarClickCuadro($elemento,idCarta);
        // mostrarCarta($elemento, idCarta);
    }else{
    //  console.log("NO TIENE una carta js!");
    }

 //   console.log(mezclarImagenes());
}

function manejarClickCuadro($carta,idCarta) {

  if($carta.getAttribute('src') === 'img/dc.png'){

    mostrarCarta($carta, idCarta);
 
  }else{
    
    $carta.src= 'img/dc.png';
  }

}

function mostrarCarta($cartaActual, id){
//console.log($cartaActual);

  $cartaActual.src = array_imagenes[id];
  if($primeraCarta ===null) {
    $primeraCarta = $cartaActual;

  }else ($primeraCarta ===$cartaActual)
  {
    return;
  }
  //turnos++



  //$primeraCarta =null
}
  
function cargarImagenesCartas(array_desordenado){
  for (let i = 0; i < array_desordenado.length ; i++) {
   // $front[i].src =array_imagenes[i];
  
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
