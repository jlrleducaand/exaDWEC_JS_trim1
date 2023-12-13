
//Código que se pude utilizar en la función de empezar a jugar (llevarla a funciones.js)

//let indice = 1,
//    interval;
//
//interval = setInterval(() => {
//    //aqui irían todas mis instrucciones
//    //en este caso puse un console.log
//    console.log('ejecución ' + indice);
//
//    //sumo una ejecución al indice y verifico
//    //si ya no hay que seguir repitiendo la ejecución
//    indice += 1;
//    if (indice >= 9) {
//        clearInterval(interval);
//    }
//}, 1000) ;


//Variables globales (etiquetas y demás)
let bolasArray = [];
let cartonBolas24 = [];
let numerosAleatorios24 = [];

const containerTable = document.getElementById('number');
const btnPedirCartaBingo = document.getElementById('botonPedirCarta');
const btnEmpezarJUego = document.getElementById('start');



//Inicialización de bototes
//generar90Bolas(bolasArray);
//mezclaBolas(bolasArray);
//saca24Bolas(bolasArray);
iniciarBotones();


//Configuración de eventos (eventListeners)


//Comprobación localStorage
//  1. Información de jugador (parte 2)

//  2. Información de partida en juego (parte 3)