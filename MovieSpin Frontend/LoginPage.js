

function LoginView() {
  const app = document.getElementById("app");
  app.innerHTML = /*HTML*/ `
  <div class="container">
  <img src="/image/back.png" class="GoBackimg" onclick="updateView()">
  <div id="FrontLogin"></div>
  <div>${Login()}</div>
  </div>
    `;
}

function visFeilmelding() {
  var alertLoginDiv = document.getElementById("alertLogin");
  alertLoginDiv.innerHTML =
    "Feil brukernavn eller passord. Vennligst prøv igjen.";
}

function Login() {
  return /*html*/ `
  <h4 class="Alert" id="alertLogin"></h4>
        <h1 class="loginTitle">LoginPage</h1>
        <form id="loginForm">
            <label  class="Usernamelabel" for="username">Username:</label>
            <input type="text" id="username" class="UsernameBox" name ="username" required/><br><br/>
            <label class="PasswordLabel" for="password">Password:</label>
            <input id="password" class="PasswordBox" type="password"   name="password" required  /><br><br/>
            <button type="button" onclick="LoginUser()"   class="LoginBox">Login</button>
        </form>
    `;
}

function LoginUser() {
  const LoginUsername = document.getElementById("username").value;
  const LoginPassWord = document.getElementById("password").value;
  if (LoginUsername.trim() === "" || LoginPassWord.trim() === "") {
    visFeilmelding();
    return;
  }
  const userdata = {
    // Oppretter et objekt som inneholder brukernavn og passord.
    Username: LoginUsername,
    Password: LoginPassWord,
  };
 
  fetch("http://moviespin.azurewebsites.net/api/Users/Login", {
    // Utfører en HTTP POST forespørsel til innloggingsendepunktet.
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Angir typen innholdet som sendes som JSON.
    },
    body: JSON.stringify(userdata),
  })
    .then((response) => {
      if (response.ok) {
        showHomePage(userdata.Username);
      } else {
        visFeilmelding();
      }
    })
    .catch((error) => {
      console.error("Error", error);
    });
}
