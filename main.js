const img = document.getElementById("gengar");
const imagemProjetoagua = document.querySelector(".projeto__agua");
const imagemProjetoPsiquico = document.querySelector(".projeto__psiquico");
const imagemProjetoGrama = document.querySelector(".projeto__grama");
const nomeDoProjeto = document.querySelector(".titulo__projeto");



img.addEventListener("mouseenter", () => {
    img.setAttribute("src", "./assets/gengar-move.gif");
});

img.addEventListener("mouseleave", () => {
    img.setAttribute("src", "./assets/gengar.png");
});


imagemProjetoPsiquico.addEventListener("mouseenter", () => {
    nomeDoProjeto.classList.remove("titulo__agua")
    nomeDoProjeto.classList.add("titulo__psiquico")
    
    
});
