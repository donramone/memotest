
 console.log("workingggjs!");

const $tablero = document.querySelector('#tablero');

$tablero.onclick = function(e) {
    const $elemento = e.target;
    if ($elemento.classList.contains('img-fluid')) {
     
      console.log("tiene una carta js!");
      manejarClickCuadro($elemento);
    }else{
      console.log("NO TIENE una carta js!");
    }
}

function manejarClickCuadro($carta) {
  console.log("la carta es: " + $carta.src);
  console.log($carta.getAttribute('src'));
  // $carta.style.opacity = '0';
  
  if($carta.getAttribute('src') === 'img/dc.png'){
    carta.className += "img-fluid";
    $carta.src="img/lantern.png";
  }else{
    
    $carta.src= 'img/dc.png';
  }
    // mostrarCuadro($cuadroActual);
  
    // if ($primerCuadro === null) {
    //   $primerCuadro = $cuadroActual;
    // } else {
  
    //   if ($primerCuadro === $cuadroActual) {
    //     return;
    //   }
  
    //   turnos++;
  
    //   if (cuadrosSonIguales($primerCuadro, $cuadroActual)) {
    //     eliminarCuadro($primerCuadro);
    //     eliminarCuadro($cuadroActual);
    //   } else {
    //     ocultarCuadro($primerCuadro);
    //     ocultarCuadro($cuadroActual);
    //   }
    //   $primerCuadro = null;
    // }
  }
  