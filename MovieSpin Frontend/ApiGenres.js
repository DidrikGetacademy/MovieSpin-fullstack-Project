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
            for (let i = 0; i < genres.length; i++) {
                List.innerHTML += `<ul>${genres[i].name}</ul>`;
            }
        }
    })
    .catch((error) => console.error("Error:", error));





