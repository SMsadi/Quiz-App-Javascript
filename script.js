const questions = [
    {
        question: "What is the capital of France ?",
        answers:[
            { text:"London", correct: false},
            { text:"Paris", correct: true},
            { text:"Berlin", correct: false},
            { text:"Madrid", correct: false},
        ]
    },

    {
        question: "Which planet is known as red planet ?",
        answers:[
            { text:"Earth", correct: false},
            { text:"Mars", correct: true},
            { text:"Venus", correct: false},
            { text:"Jupiter", correct: false},
        ]
    },

    {
        question: "Which is the largest mammal in the world ?",
        answers:[
            { text:"Elephant", correct: false},
            { text:"Blue Whale", correct: true},
            { text:"Lion", correct: false},
            { text:"Tiger", correct: false},
        ]
    },

      {
        question: "Which is the chemical symbol for Gold?",
        answers:[
            { text:"Ge", correct: false},
            { text:"Au", correct: true},
            { text:"Ag", correct: false},
            { text:"Cu", correct: false},
        ]
    }
];



const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex=0;
let score = 0;



function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + ". " +currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);    
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer)
    });
}



function startQuiz(){
    currentQuestionIndex=0;
    score = 0;
    nextButton.innerHTML="Next";
    nextButton.style.display="";
    showQuestion();
}



startQuiz();



function resetState(){
    nextButton.style.display="block";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}



function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect=selectedBtn.dataset.correct === "true"; 
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.childern).forEach((button)=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true; 
    });

    nextButton.style.display="block";
}

 

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length} ! `;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display="block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}




nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

  









