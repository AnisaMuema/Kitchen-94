

const jokeContainer = document.getElementById("joke")
const btn = document.getElementById("joke-btn")
const categories = document.getElementsByClassName("dropDown-content")





let getJoke = () => {
    //this removes the fade effect after the joke is already displayed
    jokeContainer.classList.remove("fade")
    fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single")
    .then((res) => res.json())
    .then((data) => {
        jokeContainer.textContent = `${data.joke}`
        //this adds the fade as the joke is being displayed
        jokeContainer.classList.add("fade")


    })
      
}
// categories.addEventListener("click", ())
btn.addEventListener("click", getJoke)
getJoke();


/* When the user clicks on the button, the different joke genres are displayed*/
function selectFunction(){
    document.getElementById("myDropDown").classList.toggle("show")
}

/* Close the dropdown when the user clicks outside*/
window.onclick = (e) =>{
    if(!e.target.matches(".dropBtn")){
        let dropDowns = document.getElementsByClassName("dropDown-content");
        let i; 
        for(i = 0; i < dropDowns; i++){
            let openDropDown = dropDowns[i];
            if (openDropDown.classList.contains("show")){
                openDropDown.classList.remove("show")
            }
        }
    }

}
