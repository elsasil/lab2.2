
// name form

const nameForm = document.getElementById('nameForm');
const nameVal = document.getElementById("nameVal")
const name = document.getElementById("name")
const fname = document.getElementById("fname")
const email = document.getElementById("email")


nameForm.addEventListener("submit", (event) =>{
    
    event.preventDefault()

    if (email.value.includes("@" && ".") === false) {
        nameVal.textContent = "Invalid information"
    
    } else {nameVal.textContent = "Your infromation has been submitted"}
    
    })


// något annat