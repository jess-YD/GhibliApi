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
enter.addEventListener('click', fetchMovie); //its saying to enter and runs a function

function fetchMovie(x) {       //getting run as soon as we click submit button
    x.preventDefault();        //will stop from refreshing. 
    url = baseURL + "/films";  //we know the url exists and just making it equal
    fetch(url)
    .then(function(result){     //going to server and fetching the API and turning it to json
        return result.json();
    }).then(function(json){
        console.log(json);
        findTitle(json);           //will run our next function and displaying info to page
    });

//Summary from above, is go to films endpoint of studio api and return to readable format
}
function findTitle(json){            //this is a function called findTitle and we want it to take json. That's what it's saying
    console.log(json)  
    for(i =0; i < json.length; i++) {  //as long as the i is less than json, will run the loop and everytime finish we will add one to i
     let movieName = json[i].title; //digs in to find the title or of [i] movie
    if(filmTitle.value.toLowerCase()==movieName.toLowerCase()){ //variable that equals to the element that has the id
        console.log(movieName)     //so if the value input box equals to the title of the index of the json then if statement will perfom (bottom).
        movie.appendChild(h4);     //the section to the movie class we are adding ...
        movie.appendChild(pDir);
        movie.appendChild(pProd); //these are all the "children"
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



