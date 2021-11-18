var btnStart = document.getElementById("start");
var countdownDisplay = document.getElementById("counter-display");
var qstnDisplay = document.querySelector("#question-header");
var ansrBtns = document.querySelector("#question-selection")
timer = 60;
points = 0;
indexValue = 0;

var questionObj = 
[{
  question: "Who is the most powerful villain?",
  selection: ["Darth Vader", "King Shark", "Thanos", "Hannibal Lecter"],
  answer: "Thanos"
},
{
  question: "Which of the following is my dog?",
  selection: ["Sparkles", "Elmo", "Dribbles", "Speedbump"],
  answer: "Elmo"
},
{
  question: "What is my favorite food?",
  selection: ["Pizza", "Ice Cream", "Asian Pears", "Swedish Dumplings"],
  answer: "Elmo"
},
{
  question: "How do you open a jar lid?",
  selection: ["Twist it", "Pull it", "Break it", "Bop it"],
  answer: "Elmo"
},
{
  question: "Which of the following is NOT a TA or Instructor of this course?",
  selection: ["Mike", "Karina", "Anthony", "David"],
  answer: "David"
}];


function chooseQstn() {
  if(timer === 0 || indexValue === questionObj.length) {
    qstnDisplay.style.display = "none";
    // clear all the stuff on the page to allow the score information to pop up
  }
  var generateQstn = questionObj[indexValue];
  qstnDisplay.textContent = generateQstn.question;
  for (var i = 0; i < question.selection.length; i++){
    var element = questionObj.selection[i];
    console.log(element);
    var chsBtn = document.createElement("button");
    chsBtn.textContent = element;
    chsBtn.setAttribute("value", element);
    chsBtn.onclick=checkQuestion;
    
  }
};


var Countdown = function(){

  var CountdownDetails = setInterval(function() {
    if (timer > 0) {
      countdownDisplay.textContent = timer + " seconds remaining!";
      timer--;
      console.log(timer + " seconds remaining");
    }
    else if(timer === 0) {
      clearInterval(CountdownDetails);
      countdownDisplay.textContent = "Game Over, Loser!"
      // endgame();
    }
    }, 1000);
};

btnStart.addEventListener('click', function(){
  document.getElementById("preGame").hidden = true;
  document.getElementById("postGame").hidden = false;
  document.getElementById("start").hidden = true;
  // Countdown();
}, false);

