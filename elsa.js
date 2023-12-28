
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

const quiz = document.getElementById("quiz")
const quizVal= document.getElementById("quizVal")


quiz.addEventListener("submit", (event) =>{
    
    event.preventDefault()

    const answerQ1 = document.querySelector('input[name="q1"]:checked')
    const answerQ2 = document.querySelectorAll('input[name="q2"]:checked')
    const answerQ3 = document.getElementById("q3")
    const answerQ4 = document.querySelector('input[name="q4"]:checked')
    const answerQ5 = document.querySelector('input[name="q5"]:checked')

    // counting score 
    let score = 0
    if (answerQ1 && answerQ1.value === "godric" ){score++}
    if (answerQ2 && answerQ2.length === 3){score++}
    if (answerQ3 && answerQ3.value.includes("james") === true){score++}
    if (answerQ3 && answerQ3.value.includes("James") === true){score++}
    if (answerQ4 && answerQ4.value === "otter" ){score++}
    if (answerQ5 && answerQ5.value === "six" ){score++}
    console.log("antal rätt", score)

    // valdiation 
    if (answerQ1){quizVal.textContent = "Your Quiz has been submitted"
    } else {quizVal.textContent="q1 är inte besvarad"}

    


})

