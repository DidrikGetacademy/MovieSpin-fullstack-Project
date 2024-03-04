function showHomePage() {
  const app = document.getElementById("app");
  app.innerHTML = /*HTML*/ `
      <div>${HomePageButtons()}</div>
      <div>${Title()}</div>
      <div>${images()}</div>
  

  `;
}



function HomePageButtons() {
  return /*html*/ `
  <button class="MyListButton">My List</button>
  <button class="HomeButton">Home</button>
  <button class="Logoutbutton" onclick="Logout()">Logout</button>
`;
}

function Logout() {
  LoginView();
}

