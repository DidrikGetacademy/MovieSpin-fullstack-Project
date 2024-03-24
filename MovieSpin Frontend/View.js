
updateView()
function updateView() {
  const app = document.getElementById("app");
  app.innerHTML = /*HTML*/ `
  <div class="container">
  <div>${Title()}</div>
  <div>${images()}</div>
  <div>${spinwheel()}</div>
  <div>${list()}</div>
  <div>${RandomGenerator()}</div>
  <div>${fetchGenres()}</div>
  <div>${Reklame()}</div>
  <div>${dropdownmenu()}</div>
  </div>
    `;
}







function Title() {
  return /*HTML*/ `
  <h1 class="FrontPageTitle">T1Movie</h1>
  `;
}



function images() {
  return /*HTML*/ `
        <img class="frontimage" src="image/batman.jpg" alt="">
        <img class="overskriftRamme" src="image/cinemascreen.jpg">
        <img class="overskriftbilde1" src="image/cinema.webp">
        <img class="overskriftbilde2" src="image/family.jpg">
    `;
}



function list() {
  return /*HTML*/ `
  <div class=".container">
  <h3 class="SpinRandomGenre">Spin RandomGenre</h3>
  <ul class="listWheelOutLay"></ul>
  <div id="GenreList" class="InventoryList"></div>
  </div>
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




 
  function RandomGenerator() {
    return /*html */ `
    <div class="RandomList">  
    </div>
    <h3 class="TitleGenerator">RandomGenerator</h3>
    <div class="generatorBox">
        <div class="Generatorbox2">
        <h3 class="platform">Platform</h3>
        <select id="selectboxPlatform" class="selectbox nr1">
                <option>viaplay</option>
                <option>netflix</option>
                <option>popcornTime</option>
                <option>hbo</option>
                <option>disney +</option>
            </select>
            <h3 class="type">Type</h3>
            <select id="selectboxType" class="selectbox nr2">
                <option>movie</option>
                <option>series</option>
            </select>
            <h3 class="selectgenre" >Select Genre</h3>
            <select  id="SelectboxGenre" class="selectbox nr3">
                <option>action</option>
                <option>adventure</option>
                <option>animation</option>
                <option>comedy</option>
                <option>crime</option>
                <option>documentary</option>
                <option>drama</option>
                <option>family</option>
                <option>fantasy</option>
                <option>history</option>
                <option>horror</option>
                <option>mystery</option>
                <option>romance</option>
                <option>science Fiction</option>
                <option>thriller</option>
                <option>war</option>
                <option>western</option>
            </select>
            <button class="GeneratorBtn" onclick="GenerateRandomType()">Random</button>
            <button class="EmptyList" onclick="ResetList()">Reset List</button>
        </div>
    </div>
    
    `;
}


function ResetList() {
    var listElement = document.querySelector(".RandomList");
    listElement.innerHTML = "";
}
function GenerateRandomType() {
  var platform = document.getElementById("selectboxPlatform").value.toLowerCase();
  var genre = document.getElementById("SelectboxGenre").value.toLowerCase();
  var type = document.getElementById("selectboxType").value.toLowerCase();
  var listElement = document.querySelector(".RandomList");
  var selectedPlatform = model.genres[platform];
  var selectedGenre = selectedPlatform ? selectedPlatform[genre] : null;
  listElement.innerHTML = ""; 





  if (selectedGenre) {
      if (type === "movie") {
          let randomMovieNumber = Math.floor(Math.random() * selectedGenre.movies.length);
          var randomMovie = selectedGenre.movies[randomMovieNumber];
          listElement.innerHTML += `
          <li 
          class="randomSeriesRandomMovie">Title: ${randomMovie}
          </li>
       
          `;
       

      } else if (type === "series") {
     
          let randomSeriesNumber = Math.floor(Math.random() * selectedGenre.series.length);
          var randomSeries = selectedGenre.series[randomSeriesNumber];
          listElement.innerHTML += `
          <li class="randomSeriesRandomMovie">${randomSeries}</li>
          `;
      }
  } else {
      listElement.innerHTML += `<li class="randomSeriesRandomMovieerror" >No content available for the selected platform and genre</li>`;
  }
}

  
function Reklame(){
  return /*html*/ `
  <div class="container2">
  <div class="slideshow">
    <img class="bilde1" src="image/1.jpg" alt="Bilde 1">
    <img class="bilde2" src="image/2.jpg" alt="Bilde 2">
    <img class="bilde3" src="image/3.jpg" alt="Bilde 3">
    <img class="bilde4" src="image/4.jpg" alt="Bilde 4">
    <img class="bilde4" src="image/blacklist.jpg" alt="Bilde 5">
    <img class="bilde4" src="image/suits.jpg" alt="Bilde 5">
    <img class="bilde4" src="image/open.jpg" alt="Bilde 5">
    <img class="bilde4" src="image/dune2.jpg" alt="Bilde 5">
    <img class="bilde4" src="image/wakanda.jpg" alt="Bilde 5">
    <img class="bilde4" src="image/hearth.jpg" alt="Bilde 5">
    <img class="bilde4" src="image/lockedin.jpg" alt="Bilde 5">
    <img class="bilde4" src="image/ava.jpg" alt="Bilde 5">
    <img class="bilde4" src="image/spider.jpg" alt="Bilde 5">
    <img class="bilde4" src="image/narnia.jpg" alt="Bilde 5">
    <img class="bilde4" src="image/taken.jpg" alt="Bilde 5">
    <img class="bilde4" src="image/peaky.jpg" alt="Bilde 5">


  </div>
</div>

  
  `;
  
  }  
  function dropdownmenu(){
  return /*HTML*/ `

  <div class="dropdown-content">
  <button Class="streamingWebsites" onclick="streamingWebsites()">Streaming Websites</button>
  <button class="Top10Button" onclick="Top10View()">Cinema</button>
  <button class="FrontPage" onclick="updateView()">FrontPage</button>
  <button class="Logginn" onclick="LoginView()">Sign in</button>
  <button Class="register" onclick="RegisterView()">Register</button>
  </div>

  `;

}     function buttonClicked(buttonText) {
  alert("You clicked: " + buttonText);
  // You can add more functionality here
}