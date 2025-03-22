const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const thumbnail = document.querySelector(".thumbnail");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

/* Suara */
var home = new Audio();
home.src = "click/mixkit-water.mp3";
var about = new Audio();
about.src = "click/robot-click.mp3";
var contact = new Audio();
contact.src = "click/opening-software.mp3";
var audio = new Audio();
audio.src = "click/clickmlbb.mp3";

// Autoplay slider
/*let runAutoPlay = setTimeout(() => {
  next.click();
}, 9000);*/

next.addEventListener("click", () => {
  initslider("next");
});

prev.addEventListener("click", () => {
  initslider("prev");
});

const initslider = (type) => {
  const sliderItems = list.querySelectorAll(".item");
  const thumbnailItems = thumbnail.querySelectorAll(".item");

  if (type === "next") {
    list.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    const lastItemPosition = sliderItems.length - 1;
    list.prepend(sliderItems[lastItemPosition]);
    thumbnail.prepend(thumbnailItems[lastItemPosition]);
    slider.classList.add("prev");
  }

  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 2000);

  /*clearTimeout(runAutoPlay);
  runAutoPlay = setTimeout(() => {
    next.click();
  }, 9000);*/
};
