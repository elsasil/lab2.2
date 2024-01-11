
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

const q1M= document.getElementById("q1M")
const q2M= document.getElementById("q2M")
const q3M= document.getElementById("q3M")


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

   
// mandatory
    let mustanswer = 3

    if (answerQ1){mustanswer--
        q1M.textContent=" "}
    else {q1M.textContent="Mandatory question "}

    if (answerQ2.length>0){mustanswer--
        q2M.textContent=" "}
    else {q2M.textContent="Mandatory question  "}

    if (answerQ3.value.match(letters)){mustanswer--
            q3Val.textContent=" "
            q3M.textContent=" "

        } else{q3Val.textContent="You have to write a name, letters only!"
                q3M.textContent="Mandatory question   "
                q3Val.style.color="rgba(255, 0, 0, 0.689)"
      }
    
    
// Sucess (+ right answers) vs error message

    if (mustanswer>0){quizVal.textContent="Please answer all the mandatory questions before submitting the quiz"
        quizVal.style.color="rgba(255, 0, 0, 0.689)"
        quizScore.textContent=" "

        q1R.textContent=" "
        q2R.textContent=" "
        q3R.textContent=" "
        q4R.textContent=" "
        q5R.textContent=" "
        
        } 
        
        else {quizVal.textContent="You have answered all manadatory questions, your score is..."
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

