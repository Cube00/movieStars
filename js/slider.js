const sliderUl = document.querySelector(".slider-ul");
const item = document.querySelectorAll(".item");
const content = document.querySelectorAll(".slider-content");
const funcMove = (e) => {
    if (e.id <= item.length - 2) {
        const x = e.getBoundingClientRect().width;
        let pageScroll = e.id * x - x;
        sliderUl.style.marginLeft = `-${pageScroll}px`;
    }
    content.forEach((cont) => {
        if (cont.id === e.id) {
            cont.style.display = "block";
        } else {
            cont.style.display = "none";
        }
    });
};
item.forEach((each) => {
    each.addEventListener("click", (e) => {
        e = each;
        funcMove(e);
    });
});