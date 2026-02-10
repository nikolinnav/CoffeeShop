const header = document.querySelector("header");
const hero = document.getElementById("hero");

window.addEventListener("scroll", () => {
    if (window.scrollY >= hero.offsetHeight)
        header.classList.add("sticky")
    else
        header.classList.remove("sticky")
});