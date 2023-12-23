

const form = document.getElementById('form');
const submes = document.getElementById("submes")

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    submes.textContent = "Your name has been submitted"}
    )