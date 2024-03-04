

updateView()
function updateView() {
  const app = document.getElementById("app");
  app.innerHTML = /*HTML*/ `
  <div class="container">
  <div>${Title()}</div>
  <div>${images()}</div>
  <div>${spinwheel()}</div>
  <div>${list()}</div>
  <div>${MenuButtons()}</div>
  <div>${RandomGenerator()}</div>
  <div>${fetchGenres()}</div>
  
  </div>

    `;
}

function Title() {
  return /*HTML*/ `
  <h1 class="FrontPageTitle">T1Movie</h1>
  `;
}

function MenuButtons() {
  return /*HTML*/ `
  <button class="Logginn" onclick="LoginView()">Sign in</button>
  <button Class="register" onclick="RegisterView()">Register</button>
  <button Class="streamingWebsites" onclick="streamingWebsites()">Streaming Websites</button>
 <button class="Top10Button" onclick="Top10View()">Top 10</button>
 <button class="Forum" onclick="Cinema()">Cinema</button>
 <button class="FrontPage" onclick="updateView()">FrontPage</button>
  `;
}

function images() {
  return /*HTML*/ `
        <img class="frontimage" src="image/CinemaScreen.jpg" alt="">
        <img class="overskriftRamme" src="image/cinemaScreen.webp">
        <img class="overskriftbilde1" src="image/cinema.webp">
        <img class="overskriftbilde2" src="image/family.jpg">
    `;
}



function list() {
  return /*HTML*/ `
  <h3 class="SpinRandomGenre">Spin RandomGenre</h3>
     <ul class="listWheelOutLay"></ul>
     <div id="GenreList" class="InventoryList"></div>
     `;
}








  
  let spinning = false;
  let InventoryList = [];
  let randomGenreIndex;
  const time = 110;
  let loopTime;
  function spin() {
    const genresList = document.querySelector(".listWheelOutLay");
    if (!spinning) {
      spinning = true;
      const genres = genresList.querySelectorAll("ul");
      randomGenreIndex = Math.floor(Math.random() * genres.length);
      loopTime = Math.floor(Math.random() * 10) + 1;
      let genreIndex = -1;
      let startTime;
  
      function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const currentIndex = Math.floor(progress / time) % genres.length;
        const currentGenre = genres[currentIndex];
        currentGenre.style.backgroundColor = "green";

        if (currentIndex !== genreIndex) {
          if (genreIndex !== -1){
            genres[genreIndex].style.backgroundColor = "";
          }
          currentGenre.style.backgroundColor = "green";
          genreIndex = currentIndex;
          
        }
  
  
        if (spinning && (currentIndex !== randomGenreIndex || progress < loopTime * 600)) 
        {
        requestAnimationFrame(animate);
        }else {
    
          if (randomGenreIndex !== undefined) {
            genres[genreIndex].style.backgroundColor = ""; // denne kode linjen kødder til animasjonen
            const genreTitle = genres[randomGenreIndex].textContent;
            InventoryList.push(genreTitle);
            displayInventoryList();
            randomGenreIndex = undefined;
            spinning = false;
          }
        }
   };
      animate(0);
    }
  }




  function fetchGenres() {
    const urlGenre = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const headers = {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2U0OTFmYmU3NjRlZDc5OWZiYmNhZmYxNDQ1YjI3ZCIsInN1YiI6IjY1ODY2OWRhNjg4Y2QwNTdlYjg0MGVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v6Z0aoULqb_ewCojYezo_ZZ8whFIrVzkTvMrilwJIqo",
    };
  
    fetch(urlGenre, {
        method: "GET",
        headers: headers,
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Response:", data);
        const genres = data.genres;
        const List = document.querySelector(".listWheelOutLay");
        
  
        if (List) {
            List.innerHTML = ""; 
            for (let i = 0; i < genres.length; i++) {
                List.innerHTML += `<ul>${genres[i].name}</ul>`;
            }
        }
    })
    .catch((error) => console.error("Error:", error));
    
  }

  function displayInventoryList() {
    const genreListDiv = document.getElementById("GenreList");
    genreListDiv.innerHTML = `
          <ul>
              ${InventoryList.map((item) => `  <li>${item}</li>`).join("")}
          </ul>
      `;
  }
  

function spinwheel() {
    return /*HTML*/ `
          <div class="wheel-container">
              <button class="spinbutton"  onclick="spin()">spin</button>
              <button class="resetbtn"  onclick="ResetGenre()">Reset</button>
          </div>
      `;
  }

  function ResetGenre() {
    InventoryList = []; 
    displayInventoryList(); 
  }






  
function RandomGenerator(){
  return /*HTML*/ `
  <div class="RandomList"></div>
  <h3 class="TitleGenerator">RandomGenerator</h3>
  <div class="generatorBox">
      <div class="Generatorbox2">
          <h3>Platform</h3>
          <select id="selectboxPlatform" class="selectbox">
              <option>Viaplay</option>
              <option>Netflix</option>
              <option>PopcornTime</option>
              <option>Hbo</option>
              <option>Disney +</option>
          </select>
          <h3>Type</h3>
          <select id="selectboxType" class="selectbox">
              <option>Movie</option>
              <option>series</option>
          </select>
          <h3>Select Genre</h3>
          <select id="SelectboxGenre" class="selectbox">
              <option>Action</option>
              <option>Adventure</option>
              <option>Animation</option>
              <option>Comedy</option>
              <option>Crime</option>
              <option>Documentary</option>
              <option>Drama</option>
              <option>Family</option>
              <option>Fantasy</option>
              <option>History</option>
              <option>Horror</option>
              <option>Mystery</option>
              <option>Romance</option>
              <option>Sciene Fiction</option>
              <option>Thriller</option>
              <option>War</option>
              <option>Western</option>
          </select>
          <button class="GeneratorBtn" onclick="GenerateRandomType()">Random</button>
          <button class="EmptyList" onclick="ResetList()">Reset List</button>
         
  </div>
  `;}
  
  function ResetList(){
    var listElement = document.querySelector(".RandomList");
    listElement.innerHTML = "";
  }
  
  function GenerateRandomType(){
  let MovieTitle = ["Narnia", "Pirates of the carribian", "The Matrix"];
  let seriesTitle = ["Suits", "Stranger Things","Game of Thrones"];
  var Platform = document.getElementById("selectboxPlatform").value;
  var type = document.getElementById("selectboxType").value;
  var genre = document.getElementById("SelectboxGenre").value;
  var listElement = document.querySelector(".RandomList");
  if(type == "Movie"){
    let randomMovieNumber = Math.floor(Math.random() * MovieTitle.length);
   var randomMovie = MovieTitle[randomMovieNumber]
   RandomTitle = randomMovie;
  } 
  listElement.innerHTML += /*html*/ `<li>${RandomTitle}</li>`;
  }
   

  // ordne sånn at samme genre ikke kan bli valgt 2 ganger i spin randomgenre
  // ordne sånn at randomgenerator gir ut en valgt serie eller film  når  random trykkes
