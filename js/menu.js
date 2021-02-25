const menu = document.querySelector(".menu-responsive");
const nav = document.getElementsByTagName("nav")[0];
const closes = document.querySelector(".close-x");

menu.addEventListener("click", () => {
    nav.setAttribute("class", "active-nav");
});
closes.addEventListener("click", () => {
    nav.classList.remove("active-nav");
});