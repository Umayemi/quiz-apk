const question = document.querySelector("#questions");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const timeCounter = document.querySelector("#timer-left");
const progress = document.querySelector("#progress");
const end = document.querySelector("#wrapper");
const numberScored = document.querySelector("#number_scored");
const mark = document.querySelector("#mark");
const compliment = document.querySelector(".result-text");
const percent = document.querySelector("#percent");
const putScore =document.querySelector(".put_score");
let currentQuestion = {};

let score = 0;
let questionCounter = 0;
let availableQuestion=[];
let questions =[
    {
        question:"What does HTML stand for?",
        choice1:"Hyper Text Preprocessor",
        choice2:"Hyper Text Markup Language",
        choice3:"Hyper Text Multiple Language",
        choice4:"Hyper Tool Multi Language",
        answer: 3
    },
    {
        question: "What does CSS stand for?",
        choice1:"Common Style Sheet",
        choice2:"Colorful Style Sheet",
        choice3:"Computer Style Sheet",
        choice4:"Cascading Style Sheet",
        answer: 4
    },
    {
        question: "What does PHP stand for?",
        choice1:"Hypertext Preprocessor",
        choice2:"Hypertext Programming",
        choice3:"Hypertext Preprogramming",
        choice4:"Hometext Preprocessor",
        answer: 1
    },
    {
        question: "What does SQL stand for?",
        choice1:"Stylish Question Language",
        choice2:"Stylesheet Query Language",
        choice3:"Statement Question Language",
        choice4:"Structured Query Language",
        answer: 4
    },
    
    {
        question: "What temperature does water boil at?",
        choice1: "50 degrees Celcius",
        choice2: "25 degrees Celcius",
        choice3: "100 degrees Celcius",
        choice4: "150 degrees Celcius",
        answer: 3
    },

    {
        question: "Who wrote Julius Caesar, Macbeth and Hamlet?",
        choice1: "Wole Soyinka",
        choice2: "William Shakespeare",
        choice3: "Ngozi Chimamanda Adichie",
        choice4: "Dan Brown",
        answer: 2
    },

    {
        question: "What did the crocodile swallow in Peter Pan?",
        choice1: "A Book",
        choice2: "A Computer",
        choice3: "A pair of shoes",
        choice4: "Alarm Clock",
        answer: 4
    },

    {
        question: "Which is the only mammal that can’t jump?",
        choice1: "Dog",
        choice2: "Elephant",
        choice3: "Goat",
        choice4: "Lion",
        answer: 2
    },

    {
        question: "Who lived at 221B, Baker Street, London?",
        choice1: "Tony Stark",
        choice2: "Morgan Freeman",
        choice3: "Sherlock Holmes",
        choice4: "Samuel L. Jackson",
        answer: 3
    },

    {
        question: "What colour is a panda?",
        choice1: "Green and Yellow",
        choice2: "Blue and Red",
        choice3: "Green and White",
        choice4: "Black and White",
        answer: 4
    },

    {
        question: "Where is the smallest bone in the human body?",
        choice1: "The Chest",
        choice2: "The Ear",
        choice3: "The Legs",
        choice4: "The Hands",
        answer: 2
    },

    {
        question: "What does the roman numeral C represent?",
        choice1: "100",
        choice2: "10",
        choice3: "10,000",
        choice4: "1,000,000",
        answer: "100"
    },

    {
        question: "What takes place in Hong Kong's Happy Valley?",
        choice1: "Chicken Wrestling",
        choice2: "Horse racing",
        choice3: "Street Racing",
        choice4: "Arm Wrestling",
        answer: "Horse racing"
    },

    {
        question: "Who painted the Mona Lisa?",
        choice1: "Alexander Graham Bell",
        choice2: "Sir Isaac Newton",
        choice3: "Leonardo Da Vinci",
        choice4: "Albert Einstein",
        answer: 3
    },

    {
        question: "What’s the most important book in the Moslem religion?",
        choice1: "The Koran",
        choice2: "The Dictionary",
        choice3: "The Bible",
        choice4: "The Chemistry text Book",
        answer: 1
    },

    {
        question: "What’s the capital of Ethiopia?",
        choice1: "Cape Town",
        choice2: "San Francisco",
        choice3: "Abuja",
        choice4: "Syndey",
        answer: "Addis Ababa"
    },

    {
        question: "How many squares are there on a chess board?",
        choice1: "128",
        choice2: "64",
        choice3: "32",
        choice4: "256",
        answer: "64"
    },

    {
        question: "Who invented the electric light bulb?",
        choice1: "Tom Cruise",
        choice2: "Barack Obama",
        choice3: "Wole Soyinka",
        choice4: "Thomas Edison",
        answer: "Thomas Edison"
    },

    {
        question: "What are the first three words of the bible?",
        choice1: "be with everyone",
        choice2: "Again Jesus asked",
        choice3: "In the beginning",
        choice4: "At that time",
        answer: "In the beginning"
    } 
]

const CORRECT_BONUS = 0;
const max_que=19;
startGame =()=>{
    questionCounter= 0;
    score = 0;
    availableQuestion = [...questions];
    setTimer()
    getNewQuestion();
};
getNewQuestion= ()=>{
    questionCounter++;
    progress.innerHTML = "Question"+":"+questionCounter+"/"+questions.length;
    if (availableQuestion.length==0 || questionCounter>= max_que) {
        end.style.zIndex='5';
    }
    const questionIndex =Math.floor(Math.random()*availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;
    
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
        
    });
    availableQuestion.splice(questionIndex,1);
     
};
choices.forEach( choice => {
   choice.addEventListener("click",e=>{
     const selectedChoice = e.target;
     const selectedAnswer = selectedChoice.dataset["number"];
     let correctAnswer = currentQuestion.answer;
     const classToApply = selectedAnswer == correctAnswer? 'correct' : 'incorrect';
     if (selectedAnswer == correctAnswer) {
        score=score+1;
        putScore.innerText = score+" "+"correct";
        percent.innerHTML = (Math.round((score/questions.length)*100))+"%"+" "+"Scored";
        console.log(score)
     }
     if (score<9) {
     }
     selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(()=>{
    selectedChoice.parentElement.classList.remove(classToApply)
    getNewQuestion()
    },200);
     
   });
   }   
);
function setTimer() {
    var sec = 60;
    var timer;
    timer = setInterval(()=>{
        timeCounter.innerHTML = 'Time: '+sec+'s';
        sec--;
    if (sec==0) {
        end.style.zIndex='5';
    }
    if (sec<10) {
        timeCounter.innerHTML = 'Time: '+'0'+sec+'s';

    }
    },1000)
}
startGame()
