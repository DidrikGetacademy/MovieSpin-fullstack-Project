function Cinema(){
const app = document.getElementById("app");
app.innerHTML = /*HTML*/`
<div>${images()}</div>
<div>${HeadLine()}</div>
<div>${MenuButtons()}</div>
`;
}

function HeadLine(){
return /*HTML*/ `
<h1 class="CinemaPageTitle">Future Cinema</h1>
`;}



