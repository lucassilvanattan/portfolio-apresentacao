document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById("gengar");
    const imagemProjetoPsiquico = document.querySelector(".projeto__psiquico");
    const nomeDoProjeto = document.querySelector(".titulo__projeto");

    img.addEventListener("mouseenter", () => {
        img.setAttribute("src", "./assets/gengar-move.gif");
    });

    img.addEventListener("mouseleave", () => {
        img.setAttribute("src", "./assets/gengar.png");
    });

    if (imagemProjetoPsiquico) {
        imagemProjetoPsiquico.addEventListener("mouseenter", () => {
            nomeDoProjeto.classList.add("titulo__psiquico");
        });
    }
});