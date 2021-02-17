const ratings = document.querySelectorAll(".rating");

ratings.forEach((rating) => {
    const ratingContent = rating.innerHTML;
    const ratingScore = parseInt(ratingContent, 10);
    const scoreClass =
        ratingScore < 5 ? "bad" : ratingScore < 10 ? "meh" : "good";

    rating.classList.add(scoreClass);

    const ratingColor = window.getComputedStyle(rating).backgroundColor;
    const gradient = `background: conic-gradient(${ratingColor} ${
    ratingScore * 10
  }%, transparent 0 100%)`;
    rating.setAttribute("style", gradient);
    rating.innerHTML = `<span>${ratingScore} ${
    ratingContent.indexOf("%") >= 0 ? "<small>%</small>" : ""
  }</span>`;
});