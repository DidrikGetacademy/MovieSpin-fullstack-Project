
updateView();
function updateView() {
  const app = document.getElementById("app");
  app.innerHTML = /*HTML*/ `
        <div>${Title()}</div>
        <div>${images()}</div>
        <div>${listInventory()}</div>
        <div>${spinwheel()}</div> 
        <div>${list()}</div>
        <div>${MenuButtons()}</div>


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
  `;
}

function images() {
  return /*HTML*/ `
        <img class="frontimage" src="image/Front.jpg" alt="">
        <img class="overskriftRamme" src="image/cinemaScreen.webp">
        <img class="overskriftbilde1" src="image/cinema.webp">
        <img class="overskriftbilde2" src="image/family.jpg">
    `;
}

function spinwheel() {
  return /*HTML*/ `
        <div class="wheel-container">
            <button class="spinbutton" id="spin-btn">Spin</button>
            <button class="spinbutton2" id="reset-btn">Reset</button>
        </div>
    `;
}

function list() {
  return /*HTML*/ `
     <ol class="listWheelOutLay"></ol>
     `;
}

function listInventory() {
  return /*HTML*/ `
        <div id="GenreList" class="InventoryList"></div>
          `;
}
