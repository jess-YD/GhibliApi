const baseURL = "https://ghibliapi.herokuapp.com"; //first endpoint
let url; //that it exists

//Movie Search
const movie = document.querySelector(".movie");   //movie searching in the html
const filmTitle = document.querySelector("#movie"); //grab element w/ id movie
let h4 = document.createElement("h4");       //
let pDir = document.createElement("p")
let pProd = document.createElement("p")
let pDesc = document.createElement("p")
let pRT = document.createElement("p")
let pRel = document.createElement("p")



//console.log(filmTitle.innerHTMl)            //seeing this on our screen when we want

const enter = document.querySelector("#enter");  //id is the # so its looking for it in html thats our submit button
enter.addEventListener('click', fetchMovie); 

function fetchMovie(x) {       //getting run as soon as we click submit button
    x.preventDefault();        
    url = baseURL + "/films";  //we know the url exists and just making it equal
    fetch(url)
    .then(function(result){     
        return result.json();
    }).then(function(json){
        console.log(json);
        findTitle(json);           
    });


}
function findTitle(json){            
    console.log(json)  
    for(i =0; i < json.length; i++) {  
     let movieName = json[i].title; 
    if(filmTitle.value.toLowerCase()==movieName.toLowerCase()){ 
        console.log(movieName)    
        movie.appendChild(h4);     
        movie.appendChild(pDir);
        movie.appendChild(pProd); 
        movie.appendChild(pRel);
        movie.appendChild(pRT);
        movie.appendChild(pDesc);

        pDesc.style.margin= "0vh 50vw 0vh 0vw";

h4.textContent = "Title: " + json[i].title
pDir.textContent ="Director: " + json[i].director
pProd.textContent ="Producer: " + json[i].producer
pRel.textContent ="Release Date: " + json[i].release_date
pRT.textContent ="Rotten Tomatoes: " + json[i].rt_score
pDesc.textContent ="Description: " + json[i].description




    }
    

    } 
}



