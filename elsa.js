
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
        nameVal.textContent = "Your infromation has been submitted"
        nameVal.style.color = "green"

    } else {nameVal.textContent = "Invalid information, try again!"
            nameVal.style.color = "rgba(255, 0, 0, 0.689)"
    }
    
    
    })



// QUIZ 

const quiz = document.getElementById("quiz")
const quizVal= document.getElementById("quizVal")
const quizScore= document.getElementById("quizScore")
const q3Val = document.getElementById("q3Val")

const q1R= document.getElementById("q1R")
const q2R= document.getElementById("q2R")
const q3R= document.getElementById("q3R")
const q4R= document.getElementById("q4R")
const q5R= document.getElementById("q5R")


quiz.addEventListener("submit", (event) =>{
    
    event.preventDefault()

    const answerQ1 = document.querySelector('input[name="q1"]:checked')
    const answerQ2 = document.querySelectorAll('input[name="q2"]:checked')
    const answerQ3 = document.getElementById("q3")
    const answerQ4 = document.querySelector('input[name="q4"]:checked')
    const answerQ5 = document.querySelector('input[name="q5"]:checked')

    let letters = /^[A-Za-z]+$/

    // counting score 
    let score = 0
    if (answerQ1 && answerQ1.value === "godric" ){score++}
    if (answerQ2 && answerQ2.length === 3){score++}
    if (answerQ3 && answerQ3.value.includes("james") === true){score++}
    if (answerQ3 && answerQ3.value.includes("James") === true){score++}
    if (answerQ4 && answerQ4.value === "otter" ){score++}
    if (answerQ5 && answerQ5.value === "six" ){score++}

   
    // valdiation - show + count unanswered questions
    let answered = 5

    if (answerQ1){answered--}
    if (answerQ2.length>0){answered--}
    if (answerQ3.value.match(letters)){answered--} 
    if (answerQ4){answered--}
    if (answerQ5){answered--}

    if (answered<=5 && answered>0){quizVal.textContent="You have " + answered +" questions left to answer! All questions needs to be answered"
        quizVal.style.color="rgba(255, 0, 0, 0.689)"
        quizScore.textContent="   "
        q1R.textContent="  "
        q2R.textContent="   "
        q3R.textContent="   "
        q4R.textContent="  "
        q5R.textContent=" "
        } 
        
        else {quizVal.textContent="You have answered all questions, your score is..."
            quizVal.style.backgroundColor="rgb(21, 21, 21)"
            quizVal.style.color="white"
            quizScore.textContent=score+"/5"
            quizScore.style.color="green"

            q1R.textContent="Right answer: Godric"
            q2R.textContent="Right answer: All of them"
            q3R.textContent="Right answer: James"
            q4R.textContent="Right answer: An otter"
            q5R.textContent="Right answer: Six"
    }
    

})

