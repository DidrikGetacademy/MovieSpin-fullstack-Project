function Top10View(){
    const app = document.getElementById("app");
    app.innerHTML = /*HTML*/`
    <div>${images()}</div>
    <div>${HeadLineTop10()}</div>
    <div>${MenuButtons()}</div>
    <div>${InfoBox()}</div>
    <div>${slideImageFunction()}</div>
    `;
     SlideShow(slideIndex); 
    }


      

function HeadLineTop10(){
return /*HTML*/ `
<h1 class="Top10ViewTitle">Top 10</h1>
`;
}

function imagesBackground(){
    return /*HTML*/ `
          <img class="frontimage" src="image/blacks.jpg" alt="">
          <img class="overskriftRamme" src="image/cinemaScreen.webp">
          <img class="overskriftbilde1" src="image/cinema.webp">
          <img class="overskriftbilde2" src="image/family.jpg">
      `;
  }
