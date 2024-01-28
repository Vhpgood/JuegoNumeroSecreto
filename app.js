let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

    

function verificarIntento () {

        numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); 
      /* Como sabemos los === sirven para comparar que los parametros sean iguales en tipo y valor, si 
      se llega a complir entonces acertaste el numero. o sino se brinda ayuda*/
       if (numeroSecreto===numeroDeUsuario) {
        asignarTextoElemento(`p`, `Acertaste el numero en ${intentos} ${(intentos===1) ? `vez` : `veces`}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    
       } else   {
            if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
            } else   { 
            asignarTextoElemento("p", "El numero secreto es mayor");
            }
        }
        intentos++;
        limpiarcaja();
      

        return; 
        
}

function limpiarcaja(){
    document.querySelector(`#valorUsuario`).value= "";

}

function generarNumeroSecreto() { 
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");

      
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
          return generarNumeroSecreto();
        } else {
          listaNumerosSorteados.push(numeroGenerado);
          return numeroGenerado
        }
      }

}

function condicionesIniciales() {
    asignarTextoElemento ("h1", "Juego del numero secreto");
    asignarTextoElemento ("p","Indica un numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() { 
    limpiarcaja();
    condicionesIniciales();
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);
    }

condicionesIniciales();

