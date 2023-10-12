const jokeContainer = document.getElementById("joke")
const btn = document.getElementById("joke-btn")



let getJoke = () => {

    // function clearRadio(){
    //     let resetRado = document.querySelectorAll('input[id="rate"]')
    //     for(let i = 0; i < resetRado; i ++){
    //         resetRado[i].checked = false;
    //     }
    // }
    clearRadio();
    //this removes the fade effect after the joke is already displayed
    jokeContainer.classList.remove("fade")
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single")
    .then((res) => res.json())
    .then((data) => {
        jokeContainer.textContent = `${data.joke}`
        //this adds the fade as the joke is being displayed
        jokeContainer.classList.add("fade")
    })
    
    
    
}

btn.addEventListener("click", getJoke, clearRadio)
getJoke();

function clearRadio(){
    let resetRado = document.querySelectorAll('input[id="rate"]')
    for(let i = 0; i < resetRado; i ++){
        resetRado[i].checked = false;
    }
}

// btn.addEventListener("click", getJoke, clearRadio)
