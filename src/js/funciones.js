// function comparar(a, b) { return a - b; }



// cuando esta global la variable no se declara en la funcion
function  generar90Bolas(array) {
    for (let i = 1; i <= 90; i++){
        array.push(i);
    }
    console.log(array);
    return array;
}

function mezclaBolas(array){
    bolasArray = _.shuffle(array);

    console.log(bolasArray);
    return bolasArray;
}

function saca24Bolas(array){
    cartonBolas24 = []; //borra cartonBolas
    for (let i = 0; i < 24; i++) {
        cartonBolas24.push(array[i]);
    }
    console.log(cartonBolas24);

    return cartonBolas24;
}

function pedirCartonBingo(){
    bolasArray = [];
    generar90Bolas(bolasArray);
    mezclaBolas(bolasArray);
    saca24Bolas(bolasArray);

    let bolas = cartonBolas24;
    let id = "square";
    //borra carton
    for (let i = 0; i <=23; i++) {
        id = "square" + i;
        document.getElementById(id).innerText = '';
    }
    for (let i = 0; i <=23; i++) {
        id = "square"  + i;
        document.getElementById(id).innerText = bolas[i];
    }
}

function iniciarBotones(){
    btnPedirCartaBingo.addEventListener('click', pedirCartonBingo);
    //btnEmpezarJUego.addEventListener();
}


function inicio(){

}

