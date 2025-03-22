// Animasi dan interaktivitas dasar
document.getElementById("download-btn").addEventListener("click", function () {
  alert("Terimakasih! Anda akan dialihkan ke halaman download.");
});

// Efek animasi judul hero
const heroTitle = document.getElementById("hero-title");
const heroSubtitle = document.getElementById("hero-subtitle");

function animateText(element) {
  element.style.transform = "scale(1.05)";
  setTimeout(() => {
    element.style.transform = "scale(1)";
  }, 300);
}

setInterval(() => {
  animateText(heroTitle);
  setTimeout(() => {
    animateText(heroSubtitle);
  }, 150);
}, 3000);

/* Suara */
var home = new Audio();
home.src = "click/mixkit-water.mp3";
var about = new Audio();
about.src = "click/robot-click.mp3";
var contact = new Audio();
contact.src = "click/opening-software.mp3";
var audio = new Audio();
audio.src = "click/clickmlbb.mp3";
var audioPlaying = false;
function music() {
  var audio = document.getElementById("bgMusic");
  if (!audioPlaying) audio.play();
  else audio.pause();
  audioPlaying = !audioPlaying;
}
