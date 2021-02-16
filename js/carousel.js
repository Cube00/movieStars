const slider = document.querySelectorAll(".sl-cr-owl");
const news = document.querySelectorAll(".news-owl");
const next = document.querySelectorAll(".next");
const prew = document.querySelectorAll(".prew");
let count = 0;
let x = 100;
const countDown = () => {
    if (count !== 0) {
        count--;
    }
};
const increase = (leng) => {
    if (count < leng / 4 - 1) {
        count++;
    }
};

prew[0].addEventListener("click", () => {
    countDown();
    slider[0].style.transform = `translateX( -${count * x}%)`;
});

next[0].addEventListener("click", () => {
    let leng = slider[0].children.length;
    increase(leng);
    slider[0].style.transform = `translateX( -${count * x}%)`;
});

prew[1].addEventListener("click", () => {
    countDown();
    slider[1].style.transform = `translateX( -${count * x}%)`;
});

next[1].addEventListener("click", () => {
    let leng = slider[1].children.length;
    increase(leng);
    slider[1].style.transform = `translateX( -${count * x}%)`;
});