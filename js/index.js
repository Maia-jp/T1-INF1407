//Array de compositores
let facil = [beethoven,mozart,vivaldi]
let medio = [paganini,bach,chopin]
let todos = [bach,beethoven,brahms,chopin,handel,liszt,mozart,paganini,rachmaninoff,tchailovski,vivaldi]

//Variaveis de jogo
var escolidos = []
var correto = -1
var usuarioEscolheu = -1
var modo = 2 //0-> Facil | 1->Medio | 2->Dificil


document.addEventListener("DOMContentLoaded", function () {
    carregarJogo()
});



function carregarJogo(){
    if (modo==0) {
        escolidos = facil
    }
    if (modo==1) {
        escolidos = medio
    }
    if (modo==2) {
        choose()
    }

    var i = 1
    escolidos.forEach(element => {
        element.loadIn(document,i)
        i+=1
    });

    correto = Math.floor(Math.random() * escolidos.length);

    escolidos[correto].loadAudio(document)

}

function finalizarJogo(){
    console.log(usuarioEscolheu,correto)
    if(usuarioEscolheu == correto){
        document.getElementById("resultaudoTitle").innerHTML = "Parabens !"
        document.getElementById("resultaudo").innerHTML = "Voce escolheu o compositor correto !"
    }else{
        document.getElementById("resultaudoTitle").innerHTML = "Ahhh não"
        var resultado = String("Voce escolheu o compositor errado. O correto era " + escolidos[correto].nome)
        document.getElementById("resultaudo").innerHTML = resultado
    }
    
    
    openModal()
}

function recomecarJogo(){
    var select = document.querySelector('#dificuldade');
    modo = -1
    for (var i = 0; i < select.options.length; i++) {
        modo +=1
        if(select.options[i].selected){
            break
        }
    }

    modal.style.display = "none";

    escolidos = []
    correto = -1
    usuarioEscolheu = -1
    carregarJogo()
}

//-----Botoes-----
var btnEscolha1 = document.getElementById("escolha1").onclick = function() {
    usuarioEscolheu = 0
    finalizarJogo()
}

var btnEscolha2 = document.getElementById("escolha2").onclick = function() {
    usuarioEscolheu = 1
    finalizarJogo()
}

var btnEscolha3 = document.getElementById("escolha3").onclick = function() {
    usuarioEscolheu = 2
    finalizarJogo()
}

//-----MODAL-----
var modal = document.getElementById("myModal");

//Modal
function openModal(){
    modal.style.display = "block";
}



//-----AUX-----
function choose() {
    var a = Math.floor(Math.random() * todos.length);
    var b = Math.floor(Math.random() * todos.length);
    var c = Math.floor(Math.random() * todos.length);

    while(b == a){
        b = Math.floor(Math.random() * todos.length);
    }

    while(c == b || c == a){
        c = Math.floor(Math.random() * todos.length);
    }

    escolidos.push(todos[a])
    escolidos.push(todos[b])
    escolidos.push(todos[c])
    
  }
