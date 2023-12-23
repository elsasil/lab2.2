
// visitor iformation

const nameForm = document.getElementById('nameForm');
const nameVal = document.getElementById("nameVal")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")


nameForm.addEventListener("submit", (event) =>{
    
    event.preventDefault()

    let letters = /^[A-Za-z]+$/

    if ((email.value.includes("@" && ".") === true) && (fname.value.match(letters)) && (lname.value.match(letters)) ){
        setTimeout(() => {nameVal.textContent = "Your infromation has been submitted"}, 1000)
    } else {
        setTimeout(() => {nameVal.textContent = "Invalid information"}, 1000)
    }
    
    })


// QUIZ 


