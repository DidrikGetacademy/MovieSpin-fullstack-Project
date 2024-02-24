function Top10View(){
    const app = document.getElementById("app");
    app.innerHTML = /*HTML*/`
    <div>${images()}</div>
    <div>${HeadLineTop10()}</div>
    <div>${MenuButtons()}</div>
    `;
    }



function HeadLineTop10(){
return /*HTML*/ `
<h1 class="Top10ViewTitle">Top 10</h1>
`;
}

