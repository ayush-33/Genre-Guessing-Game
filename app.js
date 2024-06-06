const images = [
    {
        pic:  'action.jpg',
        answers: [
            {text: "parody", correct: false},
            {text: "horror", correct: false},
            {text: "adventure", correct: false},
            {text: "action", correct: true},
        ]
    },
    {
               pic:  'adventure.jpg',
        answers: [
            {text: "parody", correct: false},
            {text: "horror", correct: false},
            {text: "adventure", correct: true},
            {text: "action", correct: false},
        ]
    },
    {
                pic:  'horror.jpg',
        answers: [
            {text: "parody", correct: false},
            {text: "horror", correct: true},
            {text: "adventure", correct: false},
            {text: "action", correct: false},
        ]
    },
    {
                pic:  'parody.jpg',
        answers: [
            {text: "parody", correct: true},
            {text: "horror", correct: false},
            {text: "adventure", correct: false},
            {text: "action", correct: false},
        ]
    },
    {
                pic:  'comedy.jpg',
        answers: [
            {text: "parody", correct: false},
            {text: "horror", correct: false},
            {text: "adventure", correct: false},
            {text: "comedy", correct: true},
        ]
    },
    {
        pic:  'crime.jpg',
answers: [
    {text: "science-fiction", correct: false},
    {text: "fantasy", correct: false},
    {text: "war", correct: false},
    {text: "crime", correct: true},
 ]  
},
{
    pic:  'drama.jpg',
answers: [
    {text: "thriller", correct: false},
    {text: "horror", correct: false},
    {text: "adventure", correct: false},
    {text: "drama", correct: true},
 ]
},
{
    pic:    'thriller.jpg',
answers: [
    {text: "war", correct: false},
    {text: "science-fiction", correct: false},
    {text: "adventure", correct: false},
    {text: "thriller", correct: true},
 ]
},
{
    pic:  'science-fiction.jpg',
answers: [
    {text: "fantasy", correct: false},
    {text: "crime", correct: false},
    {text: "war", correct: false},
    {text: "science-fiction", correct: true},
 ]
},
{
    pic:  'romance.jpg',
answers: [
    {text: "parody", correct: false},
    {text: "drama", correct: false},
    {text: "adventure", correct: false},
    {text: "romance", correct: true},
 ]
},
{
    pic:  'war.jpg',
answers: [
    {text: "crime", correct: false},
    {text: "action", correct: false}, 
    {text: "adventure", correct: false},
    {text: "war", correct: true},
  ]
},
{
    pic:  'fantasy.jpg',
answers: [
    {text: "science-fiction", correct: false},
    {text: "drama", correct: false}, 
    {text: "adventure", correct: false},
    {text: "fantasy", correct: true},
  ]
}
];
const question = document.getElementById("question");
const container = document.getElementsByClassName("container")[0];
const answerBtns = document.getElementsByClassName("ans-btn")[0];
const nextBtn = document.getElementsByClassName("next-btn")[0];

let imageidx = 0;
let score = 0;

function startQuiz(){
    imageidx = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    nextBtn.style.display = "none";
    showImages();
};

function showImages(){
    resetstate();
    container.innerHTML = "";
    let currImg = images[imageidx];
    let img = document.createElement("img");
    img.src =  currImg.pic;
    container.appendChild(img);
 
    answerBtns.innerHTML = "";
    currImg.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerBtns.appendChild(button);
    });
};

function resetstate(){
    nextBtn.style.display = "none";
    question.innerHTML = "Guess the genre of the above picture";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
};

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    } ) ;
    nextBtn.style.display = "block";
};

function showscore(){
    resetstate();
    container.innerHTML = "<img src ='end.jpg'>" ;
    question.innerHTML = `You scored ${score} out of ${images.length}!`;
    nextBtn.innerHTML = "Play again";
    nextBtn.style.display = "block";
};

function handleNextBtn(){
    imageidx = imageidx + 1
    if(imageidx < images.length){
        showImages();
    }else {
        showscore();
    }
}

nextBtn.addEventListener("click", () => {
    if(imageidx < images.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
});

startQuiz();
