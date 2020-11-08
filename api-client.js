const API_KEY = "602151ee0515babb6cbb286da27be73b";

async function getData() {
    try {
        //let apiUrl = "   ?api_key=" + API_KEY;
        //let text = await fetch("https://jsonplaceholder.typicode.com/users");
        text = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY);
        result = await text.json();
        const namen = result["genres"].map(element => element.name);
        const ids = result["genres"].map(element => element.id);
        return [namen, ids];
    } catch (err) { console.log(err) }
}

async function fetchFavouriteMovie() {
    try {
        str = "https://api.themoviedb.org/3/find/tt2548208?";
        str += "api_key=" + API_KEY;
        str += "&language=en-US";
        str += "&external_source=imdb_id";
        text = await fetch(str)
        result = await text.json();
        let titel = result["movie_results"][0].original_title;
        const poster = posterbasis + result["movie_results"][0].poster_path;
        return [poster, titel];
    } catch (err) { console.log(err) };
}

async function getTopRatedMovies() {
    try {
        let i = 1;
        str = "https://api.themoviedb.org/3/discover/tv?";
        str += "api_key=" + API_KEY;
        str += "&language=en-US";
        str += "&sort_by=popularity.desc";
        str += "&page=" + i.toString();
        str += "&timezone=America%2FNew_York";
        str += "&include_null_first_air_dates=false";
        text = await fetch(str)
        result = await text.json();
        arr2 = result["results"];
        namen = [];
        popularities = [];
        posters = [];
        genres = [];
        console.log(arr2);
        arr2.forEach(element => {
            namen.push(element.name);
            popularities.push(element.popularity);
            posters.push(posterbasis + element.poster_path);
            genres.push(element.genre_ids);
        })
    } catch (err) { console.log(err) }
}

async function getMovies1975() {
    try {
        let i = 1;
        str = "https://api.themoviedb.org/3/discover/movie?";
        str += "api_key=" + API_KEY;
        str += "&language=en-US";
        str += "&sort_by=popularity.desc";
        str += "&page=" + i.toString();
        str += "&include_adult=false";
        str += "&include_video=false";
        str += "&primary_release_year=1975";
        text = await fetch(str)
        result = await text.json();
        arr2 = result["results"];
        namen = [];
        popularities = [];
        posters = [];
        genres = [];
        releasedates = [];
        arr2.forEach(element => {
            namen.push(element.title);
            popularities.push(element.popularity);
            posters.push(posterbasis + element.poster_path);
            genres.push(element.genre_ids);
            releasedates.push(element.release_date);
        })
    } catch (err) { console.log(err) }
}

async function getGenreMovies(soortGenre) {
    try {
        let i = 1;
        str = "https://api.themoviedb.org/3/discover/movie?";
        str += "api_key=" + API_KEY;
        str += "&language=en-US";
        str += "&sort_by=popularity.desc";
        str += "&page=" + i.toString();
        str += "&include_adult=false";
        str += "&include_video=false";
        str += "&with_genres=" + soortGenre;
        text = await fetch(str)
        result = await text.json();
        arr2 = result["results"];
        namen = [];
        popularities = [];
        posters = [];
        genres = [];
        releasedates = [];
        arr2.forEach(element => {
            namen.push(element.title);
            popularities.push(element.popularity);
            posters.push(posterbasis + element.poster_path);
            genres.push(element.genre_ids);
            releasedates.push(element.release_date);
        })
    } catch (err) { console.log(err) }
}