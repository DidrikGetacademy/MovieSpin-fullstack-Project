const genresList = document.querySelector(".listWheelOutLay");
const spinBtn = document.getElementById("spin-btn");
const resetBtn = document.getElementById("reset-btn");
genresList.style.background = "linear-gradient(90deg, #ff0000, #00ff00)";
let spinning = false;
let spinAnimation;
let timeouts = [];
let InventoryList = [];
let randomGenreIndex;
let loopTime;
const time = 110;
function resetWheel() {
  cancelAnimationFrame(spinAnimation);
  timeouts.forEach(clearTimeout);
  timeouts = [];
  randomGenreIndex = undefined;

  setTimeout(() => {
    genresList.style.transition = "";
  }, 10);
  spinning = false;
  spinBtn.disabled = false;
}

function spin() {
  if (!spinning) {
    spinning = true;
    const genres = genresList.querySelectorAll("ul");
    randomGenreIndex = Math.floor(Math.random() * genres.length);
    loopTime = Math.floor(Math.random() * 10) + 1;
    genresList.style.background = "linear-gradient(90deg, #ff0000, #00ff00)";

    let genreIndex = 0;
    let startTime;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentIndex = Math.floor(progress / time) % genres.length;

      const currentGenre = genres[currentIndex];

      if (currentIndex !== genreIndex) {
        if (genreIndex !== -1) {
          genres[genreIndex].style.backgroundColor = "";
        }
        currentGenre.style.backgroundColor = "green";
        genreIndex = currentIndex;
      }

      if (
        spinning &&
        (currentIndex !== randomGenreIndex || progress < loopTime * 600)
      ) {
        spinAnimation = requestAnimationFrame(animate);
      } else {
        genres[genreIndex].style.backgroundColor = "";
        if (randomGenreIndex !== undefined) {
          const genreTitle = genres[randomGenreIndex].textContent;
          InventoryList.push(genreTitle);
          displayInventoryList();
          resetWheel();
        }
        spinBtn.disabled = false;
      }
    }
    animate(0);
    spinBtn.disabled = true;
  }
}
spinBtn.addEventListener("click", spin);

function displayInventoryList() {
  const genreListDiv = document.getElementById("GenreList");
  genreListDiv.innerHTML = `
        <ul>
            ${InventoryList.map((item) => `  <li>${item}</li>`).join("")}
        </ul>
    `;
  resetBtn.addEventListener("click", ResetGenre);
}

function ResetGenre() {
  InventoryList = []; // Tøm listen
  // Nullstill randomGenreIndex
  displayInventoryList(); // Oppdater visningen
}
