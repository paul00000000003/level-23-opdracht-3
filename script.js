async function verkrijgData() {
    let genres = await getData();
    let namen = genres[0];
    let ids = genres[1];
    //console.log(genres[0]);
    return genres;
}

async function postMoviesGenres(namen, ids) {
    namen.forEach((element, index) => {
        regel = document.createElement("li");
        regel.innerHTML = "genre naam : " + element + " ,id " + ids[index];
        genresLijst.appendChild(regel);
    })

}

async function postGetTopRatedMovies() {
    console.log("binnen postGetTopRatedMovies");
}

async function postGetTopRatedActionMovies() {
    console.log("binnen postGetTopRatedActionMovies");
}
let str = "";
let text = "";
let genresLijst = document.getElementById("genres");
let topRatedMovies = document.getElementById("top_rated_movies");
let movies1975 = document.getElementById("movies1975");
let regel = "";
let arr3 = [];
let posterbasis = "http://image.tmdb.org/t/p/w185/";
let figure = "";
let figcaption = "";
let plaatje = "";
let h1 = document.getElementsByTagName("h1")[0];

verkrijgData().then(result => {
    let genres = result;
    let namen = genres[0];
    let ids = genres[1];
    //let ids = genres[1];
    postMoviesGenres(namen, ids);
    arr3 = result;
});

let my_top_movie = document.getElementById("my_top_movie");
fetchFavouriteMovie().then((result) => {
    plaatje = document.createElement("img");
    plaatje.setAttribute("src", result[0]);
    plaatje.setAttribute("width", "150px");
    plaatje.setAttribute("alt", "filmposter");
    figuur = document.createElement("figure");
    figcaption = document.createElement("figcaption");
    figcaption.innerHTML = result[1];
    figuur.appendChild(plaatje);
    figuur.appendChild(figcaption);
    my_top_movie.appendChild(figuur);
})

namen = [];
let popularities = [];
let posters = [];
let releasdates = [];
genres = [];
let teller = 0;
let keuze = 37;
getTopRatedMovies().then((result) => {
    //  ids.forEach((element, index) => { if (element == keuze) { h1.innerHTML = "Top rated " + namen[index].toUpperCase() + " movies" } });
    //h1.innerHTML = "Top 20 most popular movies";
    genres.forEach((item, index) => {
        //       if (item.includes(37)) {
        if (teller < 10) {
            plaatje = document.createElement("img");
            plaatje.setAttribute("src", posters[index]);
            plaatje.setAttribute("width", "60px");
            plaatje.setAttribute("alt", "filmposter");
            figuur = document.createElement("figure");
            figcaption = document.createElement("figcaption");
            figcaption.innerHTML = namen[index];
            figuur.appendChild(plaatje);
            figuur.appendChild(figcaption);
            topRatedMovies.appendChild(figuur);
            teller += 1;
        }
        //       }
    })
})

getMovies1975().then(() => {
    teller = 0;
    releasedates.forEach((item, index) => {
        if (teller < 10) {
            plaatje = document.createElement("img");
            plaatje.setAttribute("src", posters[index]);
            console.log("poster : " + posters[index]);
            plaatje.setAttribute("width", "60px");
            plaatje.setAttribute("alt", "filmposter");
            figuur = document.createElement("figure");
            figcaption = document.createElement("figcaption");
            figcaption.innerHTML = namen[index] + " " + item;
            figuur.appendChild(plaatje);
            figuur.appendChild(figcaption);
            movies1975.appendChild(figuur);
            teller += 1;
        }
    })
})