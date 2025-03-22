// Data Hero Mobile Legends
const heroes = [
  {
    name: "Aamon",
    role: "assassin",
    image: "aamon.png",
  },
  {
    name: "Akai",
    role: "tank",
    image: "akai.png",
  },
  {
    name: "Aldous",
    role: "fighter",
    image: "aldous.png",
  },
  {
    name: "Alice",
    role: "mage",
    image: "alice.png",
  },
  {
    name: "Alpha",
    role: "fighter",
    image: "alpha.png",
  },
  {
    name: "Alucard",
    role: "fighter",
    image: "alucard.png",
  },
  {
    name: "Angela",
    role: "support",
    image: "angela.png",
  },
  {
    name: "Argus",
    role: "fighter",
    image: "argus.png",
  },
  {
    name: "Arlott",
    role: "fighter",
    image: "arlott.png",
  },
  {
    name: "Atlas",
    role: "tank",
    image: "atlas.png",
  },
  {
    name: "Aulus",
    role: "fighter",
    image: "aulus.png",
  },
  {
    name: "Aurora",
    role: "mage",
    image: "aurora.png",
  },
  {
    name: "Badang",
    role: "fighter",
    image: "badang.png",
  },
  {
    name: "Balmond",
    role: "fighter",
    image: "balmond.png",
  },
  {
    name: "Bane",
    role: "fighter",
    image: "bane.png",
  },
  {
    name: "Barats",
    role: "tank",
    image: "barats.png",
  },
  {
    name: "Baxia",
    role: "fighter",
    image: "baxia.png",
  },
  {
    name: "Beatrix",
    role: "marksman",
    image: "beatrix.png",
  },
  {
    name: "Belerick",
    role: "tank",
    image: "belerick.png",
  },
  {
    name: "Benedetta",
    role: "assassin",
    image: "benedetta.png",
  },
  {
    name: "Brody",
    role: "marksman",
    image: "brody.png",
  },
  {
    name: "Bruno",
    role: "marksman",
    image: "bruno.png",
  },
  {
    name: "Carmilla",
    role: "support",
    image: "carmilla.png",
  },
  {
    name: "Cecilion",
    role: "mage",
    image: "cecilion.png",
  },
  {
    name: "Chang'e",
    role: "mage",
    image: "chang'e.png",
  },
  {
    name: "Chip",
    role: "support",
    image: "chip.png",
  },
  {
    name: "Chou",
    role: "fighter",
    image: "chou.png",
  },
  {
    name: "Cici",
    role: "fighter",
    image: "cici.png",
  },
  {
    name: "Claude",
    role: "marksman",
    image: "claude.png",
  },
  {
    name: "Clint",
    role: "marksman",
    image: "clint.png",
  },
  {
    name: "Cyclops",
    role: "mage",
    image: "cyclops.png",
  },
  {
    name: "Diggie",
    role: "support",
    image: "diggie.png",
  },
  {
    name: "Dyrroth",
    role: "fighter",
    image: "dyrroth.png",
  },
  {
    name: "Edith",
    role: "tank",
    image: "edith.png",
  },
  {
    name: "Esmeralda",
    role: "tank",
    image: "esmeralda.png",
  },
  {
    name: "Estes",
    role: "support",
    image: "estes.png",
  },
  {
    name: "Eudora",
    role: "mage",
    image: "eudora.png",
  },
  {
    name: "Fanny",
    role: "assassin",
    image: "fanny.png",
  },
  {
    name: "Faramis",
    role: "support",
    image: "faramis.png",
  },
  {
    name: "Floryn",
    role: "support",
    image: "floryn.png",
  },
  {
    name: "Franco",
    role: "tank",
    image: "franco.png",
  },
  {
    name: "Fredrinn",
    role: "fighter",
    image: "fredrinn.png",
  },
  {
    name: "Freya",
    role: "fighter",
    image: "freya.png",
  },
  {
    name: "Gatotkaca",
    role: "tank",
    image: "gatotkaca.png",
  },
  {
    name: "Gloo",
    role: "tank",
    image: "gloo.png",
  },
  {
    name: "Gord",
    role: "mage",
    image: "Gord_2025.png",
  },
  {
    name: "Granger",
    role: "marksman",
    image: "granger_2024.png",
  },
  {
    name: "Grock",
    role: "tank",
    image: "grock.png",
  },
  {
    name: "Guinevere",
    role: "fighter",
    image: "guinevere.png",
  },
  {
    name: "Gusion",
    role: "assassin",
    image: "gusion.png",
  },
  {
    name: "Hanabi",
    role: "marksman",
    image: "hanabi.png",
  },
  {
    name: "Hanzo",
    role: "assassin",
    image: "Hanzo_2025.png",
  },
  {
    name: "Harith",
    role: "mage",
    image: "harith.png",
  },
  {
    name: "Harley",
    role: "assassin",
    image: "harley.png",
  },
  {
    name: "Hayabusa",
    role: "assassin",
    image: "hayabusa.png",
  },
  {
    name: "Helcurt",
    role: "assassin",
    image: "helcurt.png",
  },
  {
    name: "Hilda",
    role: "fighter",
    image: "hilda.png",
  },
  {
    name: "Hylos",
    role: "tank",
    image: "hylos.png",
  },
  {
    name: "Irithel",
    role: "marksman",
    image: "irithel.png",
  },
  {
    name: "Ixia",
    role: "marksman",
    image: "ixia.png",
  },
  {
    name: "Jawhead",
    role: "fighter",
    image: "jawhead.png",
  },
  {
    name: "Jhonson",
    role: "tank",
    image: "johnson.png",
  },
  {
    name: "Joy",
    role: "assassin",
    image: "joy.png",
  },
  {
    name: "Julian",
    role: "fighter",
    image: "julian.png",
  },
  {
    name: "Kadita",
    role: "mage",
    image: "kadita.png",
  },
  {
    name: "Kagura",
    role: "mage",
    image: "kagura.png",
  },
  {
    name: "Kaja",
    role: "support",
    image: "kaja.png",
  },
  {
    name: "Kalea",
    role: "support",
    image: "Kalea.png",
  },
  {
    name: "Karina",
    role: "assassin",
    image: "karina.png",
  },
  {
    name: "Karrie",
    role: "marksman",
    image: "karrie.png",
  },
  {
    name: "Khaleed",
    role: "fighter",
    image: "khaleed.png",
  },
  {
    name: "Khufra",
    role: "tank",
    image: "khufra.png",
  },
  {
    name: "Kimmy",
    role: "marksman",
    image: "kimmy.png",
  },
  {
    name: "Lancelot",
    role: "assassin",
    image: "lancelot.png",
  },
  {
    name: "Lapu-Lapu",
    role: "fighter",
    image: "lapu-lapu.png",
  },
  {
    name: "Layla",
    role: "marksman",
    image: "layla.png",
  },
  {
    name: "Leomord",
    role: "fighter",
    image: "leomord.png",
  },
  {
    name: "Lesley",
    role: "marksman",
    image: "lesley.png",
  },
  {
    name: "Ling",
    role: "assassin",
    image: "ling.png",
  },
  {
    name: "Lolita",
    role: "support",
    image: "lolita.png",
  },
  {
    name: "Lukas",
    role: "fighter",
    image: "Lukas.png",
  },
  {
    name: "Lunox",
    role: "mage",
    image: "lunox.png",
  },
  {
    name: "Luo Yi",
    role: "mage",
    image: "luo_yi.png",
  },
  {
    name: "Lylia",
    role: "mage",
    image: "lylia.png",
  },
  {
    name: "Martis",
    role: "fighter",
    image: "martis.png",
  },
  {
    name: "Masha",
    role: "fighter",
    image: "masha.png",
  },
  {
    name: "Mathilda",
    role: "support",
    image: "mathilda.png",
  },
  {
    name: "Melissa",
    role: "marksman",
    image: "melissa.png",
  },
  {
    name: "Minotaur",
    role: "tank",
    image: "minotaur.png",
  },
  {
    name: "Minsitthar",
    role: "fighter",
    image: "minsitthar.png",
  },
  {
    name: "Miya",
    role: "marksman",
    image: "miya.png",
  },
  {
    name: "Moskov",
    role: "marksman",
    image: "moskov.png",
  },
  {
    name: "Nana",
    role: "mage",
    image: "nana.png",
  },
  {
    name: "Natalia",
    role: "assassin",
    image: "natalia.png",
  },
  {
    name: "Natan",
    role: "marksman",
    image: "natan.png",
  },
  {
    name: "Nolan",
    role: "assassin",
    image: "nolan.png",
  },
  {
    name: "Novaria",
    role: "mage",
    image: "novaria.png",
  },
  {
    name: "Odette",
    role: "mage",
    image: "odette.png",
  },
  {
    name: "Paquito",
    role: "fighter",
    image: "paquito.png",
  },
  {
    name: "Pharsa",
    role: "mage",
    image: "pharsa.png",
  },
  {
    name: "Phoveus",
    role: "fighter",
    image: "phoveus.png",
  },
  {
    name: "Popol and Kupa",
    role: "marksman",
    image: "popol_and_kupa.png",
  },
  {
    name: "Rafaela",
    role: "support",
    image: "rafaela.png",
  },
  {
    name: "Roger",
    role: "marksman",
    image: "roger.png",
  },
  {
    name: "Ruby",
    role: "fighter",
    image: "ruby.png",
  },
  {
    name: "Saber",
    role: "assassin",
    image: "saber.png",
  },
  {
    name: "Selena",
    role: "assassin",
    image: "selena.png",
  },
  {
    name: "Silvana",
    role: "fighter",
    image: "silvanna.png",
  },
  {
    name: "Sun",
    role: "fighter",
    image: "sun.png",
  },
  {
    name: "Suyou",
    role: "assassin",
    image: "suyou.png",
  },
  {
    name: "Terizla",
    role: "fighter",
    image: "terizla.png",
  },
  {
    name: "Thamuz",
    role: "fighter",
    image: "thamuz.png",
  },
  {
    name: "Tigreal",
    role: "tank",
    image: "tigreal.png",
  },
  {
    name: "Uranus",
    role: "tank",
    image: "uranus.png",
  },
  {
    name: "Vale",
    role: "mage",
    image: "vale.png",
  },
  {
    name: "Valentina",
    role: "mage",
    image: "valentina.png",
  },
  {
    name: "Valir",
    role: "mage",
    image: "valir.png",
  },
  {
    name: "Vexana",
    role: "mage",
    image: "vexana.png",
  },
  {
    name: "Wanwan",
    role: "marksman",
    image: "wanwan.png",
  },
  {
    name: "X.Borg",
    role: "fighter",
    image: "x.borg.png",
  },
  {
    name: "Xavier",
    role: "mage",
    image: "xavier.png",
  },
  {
    name: "Yi Sun-Shin",
    role: "assassin",
    image: "yi_sun-shin.png",
  },
  {
    name: "Yin",
    role: "fighter",
    image: "yin.png",
  },
  {
    name: "Yu Zhong",
    role: "fighter",
    image: "yu_zhong.png",
  },
  {
    name: "Yve",
    role: "mage",
    image: "yve.png",
  },
  {
    name: "Zhask",
    role: "mage",
    image: "zhask.png",
  },
  {
    name: "Zhuxin",
    role: "mage",
    image: "zhuxin.png",
  },
  {
    name: "Zilong",
    role: "fighter",
    image: "zilong.png",
  },
];

const heroesGrid = document.getElementById("heroesGrid");
const roleButtons = document.querySelectorAll(".role-btn");
let selectedHero = null;

// Fungsi untuk membuat kartu hero
function createHeroCard(hero) {
  const card = document.createElement("div");
  card.className = "hero-card";
  card.innerHTML = `
        <img src="${hero.image}" alt="${hero.name}" class="hero-image">
        <h3 class="hero-name">${hero.name}</h3>
        <p class="hero-role">${
          hero.role.charAt(0).toUpperCase() + hero.role.slice(1)
        }</p>
    `;

  card.addEventListener("click", () => {
    if (selectedHero) {
      selectedHero.classList.remove("selected");
    }
    card.classList.add("selected");
    selectedHero = card;
  });

  return card;
}

// Fungsi untuk menampilkan hero
function displayHeroes(role = "all") {
  heroesGrid.innerHTML = "";
  const filteredHeroes =
    role === "all" ? heroes : heroes.filter((hero) => hero.role === role);

  filteredHeroes.forEach((hero) => {
    heroesGrid.appendChild(createHeroCard(hero));
  });
}

// // Fungsi pencarian hero
// function searchHeroes() {
//   const searchInput = document
//     .getElementById("searchInput")
//     .value.toLowerCase();
//   const filteredHeroes = heroes.filter(
//     (hero) =>
//       hero.name.toLowerCase().includes(searchInput) ||
//       hero.role.toLowerCase().includes(searchInput)
//   );
//   displayHeroes(filteredHeroes);
// }

// // Event listener untuk pencarian
// document.getElementById("searchInput").addEventListener("input", searchHeroes);

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    roleButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    displayHeroes(button.dataset.role);
  });
});

// Tampilkan semua hero saat halaman dimuat
displayHeroes();

/* Suara */
/*const audio = new Audio();
audio.src = "click/clickmlbb.mp3";*/
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
