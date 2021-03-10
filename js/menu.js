const nav = document.querySelector(".menu-responsive");
const menu = document.querySelector(".active-nav");
const x = document.querySelector(".close-x");

nav.addEventListener("click", () => {
    menu.classList.add("on");
});
x.addEventListener("click", () => {
    menu.classList.remove("on");
});
window.onclick = (event) => {
    if (event.target == menu) menu.classList.remove("on");
};

const profile = document.querySelector(".profile");
const opts = document.querySelector(".profile-options");
profile.addEventListener("click", () => {
    if (window.innerWidth > 1024) {
        opts.classList.toggle("active-profile");
    }
    if (window.innerWidth <= 1024) {
        menu.classList.add("on");
        console.log("rame");
    }
});