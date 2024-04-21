const img = document.getElementById("gengar");

img.addEventListener("mouseenter", () => {
    img.setAttribute("src", "./assets/gengar-move.gif");
});

img.addEventListener("mouseleave", () => {
    img.setAttribute("src", "./assets/gengar.png");
});