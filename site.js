
function movieSearch() {
    //console.log("were inside the input", inputSearch.value)
    var inputSearch = document.querySelector("#search-movie");
    var movieinputsearch = inputSearch.value; 
    loadMovies(movieinputsearch);
}
function loadMovies(movieinputsearch) {
var url =`https://www.omdbapi.com/?s=${movieinputsearch}&apikey=f05fad6f`;


fetch(url).then(response=>response.json())
.then(data=>{console.log(data);
for (let index = 0; index < 10; index++) {
    console.log(data.Search[index].Title);
    
}

})}


