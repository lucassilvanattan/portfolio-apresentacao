const imagemProjetoagua = document.querySelector("#projeto__agua");
const imagemProjetoPsiquico = document.querySelector("#projeto__psiquico");
const imagemProjetoGrama = document.querySelector("#projeto__grama");
const nomeDoProjeto = document.querySelector(".titulo__projeto");
const mudaBorda = document.querySelector(".descricao__projeto");
const textoDescritivo = document.querySelector((".texto__projeto"))

imagemProjetoPsiquico.addEventListener("mouseenter", () => {
    nomeDoProjeto.classList.remove("titulo__agua")
    nomeDoProjeto.classList.remove("titulo__grama")
    nomeDoProjeto.classList.add("titulo__psiquico")
    mudaBorda.classList.remove("agua__desc")
    mudaBorda.classList.remove("grama__desc")
    mudaBorda.classList.add("psiquico__desc")

    nomeDoProjeto.textContent = "Primeiro Portfólio"
    textoDescritivo.textContent = "Este portfólio, foi  feito com objetivo de treinar algumas propriedades Keyframes, ou seja, algumas animações básicas."
    
    
});

imagemProjetoGrama.addEventListener("mouseenter", () => {
    nomeDoProjeto.classList.remove("titulo__agua")
    nomeDoProjeto.classList.remove("titulo__psiquico")
    nomeDoProjeto.classList.add("titulo__grama")
    mudaBorda.classList.remove("agua__desc")
    mudaBorda.classList.remove("psiquico__desc")
    mudaBorda.classList.add("grama__desc")

    nomeDoProjeto.textContent = "Game Atravessa A Rua"
    textoDescritivo.textContent = "Neste projeto, pega-se de base um jogo chamado Crosy Road, um jogo antigo onde o objetivo era fazer com que uma galinha atravessasse uma avenida repleta de carros em diferenntes velocidades. Este jogo tem a mesma ideia, porém com uma temática diferente."
    
    
});

imagemProjetoagua.addEventListener("mouseenter", () => {
    nomeDoProjeto.classList.remove("titulo__psiquico")
    nomeDoProjeto.classList.remove("titulo__grama")
    nomeDoProjeto.classList.add("titulo__agua")
    mudaBorda.classList.remove("psiquico__desc")
    mudaBorda.classList.remove("grama__desc")
    mudaBorda.classList.add("agua__desc")

    nomeDoProjeto.textContent = "Mobile First"
    textoDescritivo.textContent = "Nós como progamadores, temos o dever de deixar o projeto responsivo para que ele possa ser aberto e coeso em diferentes telas, normalmente, o projeto é feito na versão de computador e posteriormente feito a responsividade seja pra mobile ou tablet, no Mobile First este processo é feito ao contrário, primeiro é feito a versão mobile e assim adiante."
    
    
});