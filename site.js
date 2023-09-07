
function movieSearch() {
    //console.log("were inside the input", inputSearch.value)
    var inputSearch = document.querySelector("#search-movie");
    var movieinputsearch = inputSearch.value; 
    if(movieinputsearch.length>0)
    {
    document.getElementById("movie_dropdown").style.display="block";}
    
    else
{document.getElementById("movie_dropdown").style.display="none";}
loadMovies(movieinputsearch);
}

function loadMovies(movieinputsearch) {
var url =`https://www.omdbapi.com/?s=${movieinputsearch}&apikey=f05fad6f`;


fetch(url).then(response=>response.json())
.then(data=>{console.log(data);
for (let index = 0; index < 10; index++) {
    console.log(data.Search[index].Title);  
    var ul = document.getElementById("listofmovies")
    var li =document.createElement("li")
    var image =document.createElement("img")
    var break1 = document.createElement("br")
    ul.appendChild(li)
    ul.appendChild(image)
    ul.appendChild(break1)
    li.innerHTML=data.Search[index].Title
    image.src=data.Search[index].Poster
}
})}


