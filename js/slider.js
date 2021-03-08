const sliderUl = document.querySelector(".slider-ul");
const item = document.querySelectorAll(".item");
const content = document.querySelectorAll(".slider-content");
const inf = document.querySelectorAll(".inf-itm");
const prew = document.querySelector(".prew-arrow");
const next = document.querySelector(".next-arrow");

let num = 0;
const inc = () => {
    if (num < sliderUl.children.length - 1) {
        num++;
    }
};
const dec = () => {
    if (num !== 0) {
        num--;
    }
};

const controlArrow = () => {
    content.forEach((cont) => {
        if (num == cont.id) cont.style.display = "block";
        else {
            cont.style.display = "none";
        }
    });
};

next.addEventListener("click", () => {
    inc();
    controlArrow();
});
prew.addEventListener("click", () => {
    dec();
    controlArrow();
});

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
        inf.forEach((x) => {
            if (x.id === e.id) {
                x.classList.add("activated-mood");
            } else {
                x.classList.remove("activated-mood");
            }
        });
    });
});