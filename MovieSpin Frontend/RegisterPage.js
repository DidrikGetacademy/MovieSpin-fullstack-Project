function RegisterView() {
  const app = document.getElementById("app");
  app.innerHTML = /*HTML*/ `
  <div id="FrontLogin"></div>
  <div class="frontpageRegister">${register()}</div>
  
    `;
}

function register() {
  return /*html*/ `
  <h4 class="Alert" id="registerdiv"></h4>
  <h1 class="RegisterHeadTitle">Create new account</h1>
  <div id="registrationForm">

  <label for="regUsername">Username:</label>
  <input  id="regUsername" name="regUsername" required /><br/><br/>

  <label for="regPassword">Password:</label>
  <input type="password" id="regPassword"  name="regPassword" required/><br/><br/>

  <label for="email">Email:</label>
  <input  id="email" name ="email" /><br/><br/>

<button class="RegisterBox"  onclick="registerUser()">Register</button>
</div>
`;
}


function registerUser() {
  const regUsername = document.getElementById("regUsername").value;
  const regPassword = document.getElementById("regPassword").value;
  const email = document.getElementById("email").value;

  const userData = {
    Username: regUsername,
    Password: regPassword,
    Email: email,
  };

  fetch("https://t1movie.azurewebsites.net/api/Users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((response) => {
    if (response.ok) {
      LoginView();
    } else if (response.status === 409) {
      UsernameOrEmailExists(); 
    } else {
      console.log("wrong details");
    }
  });
}

function UsernameOrEmailExists() {
  var alertRegisterDiv = document.getElementById("registerdiv");
  alertRegisterDiv.innerHTML = "Username or email already exi  sts";
}
