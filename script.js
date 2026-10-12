//DOM ELEMENTS 
const setUp = document.getElementById("setup");
const punchLine = document.getElementById("punchline");
const jokeBtn = document.getElementById("jokebtn");

//EVENT LISTENER FOR BUTTON 
jokeBtn.addEventListener("click", function () {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setUp.textContent = data.setup;
            punchLine.textContent = data.punchline;
        })
        .catch(function(){
            setUp.textContent = "Couldn't load joke, try again";
            punchLine.textContent = "";
        });
});

