var setaDireita = document.getElementById("seta-direita");
var Leonardo = document.getElementById("Leonardo");
var Bruna = document.getElementById("Bruna");
var Samantha = document.getElementById("Samantha");
var setaEsquerda = document.getElementById("seta-esquerda");

function RolarParaDireita() {
   Leonardo.style.display = "none";
   Samantha.style.display = "flex";
   setaEsquerda.style.display = "flex";
   setaDireita.style.display = "none";
}

function RolarParaEsquerda() {
    Bruna.style.display = "flex"
    Samantha.style.display = "none"
    Leonardo.style.display = "flex"
    setaDireita.style.display = "flex"
    setaEsquerda.style.display = "none"
}