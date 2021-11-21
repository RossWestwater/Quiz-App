var btnStart = document.getElementById("start");
var countdownDisplay = document.getElementById("counter-display");
var qstnDisplay = document.getElementById("question-display");
var selectDisplay = document.getElementById("selection-display");
var answerDisplay = document.getElementById("answer-display");
var goodLuck = document.getElementById("good-luck");

timer = 60;
points = 0;
indexValue = 0;
myScore = {
  initials: [],
  score: [],
};

var questionObj = [
  {
    question: "Who is the most powerful villain?",
    selection: ["Darth Vader", "King Shark", "Thanos", "Hannibal Lecter"],
    answer: "Thanos",
  },
  {
    question: "Which of the following is my dog?",
    selection: ["Sparkles", "Elmo", "Dribbles", "Speedbump"],
    answer: "Elmo",
  },
  {
    question: "What is my favorite food?",
    selection: ["Pizza", "Ice Cream", "Asian Pears", "Swedish Dumplings"],
    answer: "Pizza",
  },
  {
    question: "How do you open a jar lid?",
    selection: ["Twist it", "Pull it", "Break it", "Bop it"],
    answer: "Twist it",
  },
  {
    question:
      "Which of the following is NOT a TA or Instructor of this course?",
    selection: ["Mike", "Karina", "Anthony", "David"],
    answer: "David",
  },
];

var Countdown = function () {
  var CountdownDetails = setInterval(function () {
    if (timer > 0 && indexValue === questionObj.length) {
      clearInterval(CountdownDetails);
      countdownDisplay.textContent = "Game Over! Let's see how you did!";
      endGame();
    } else if (timer > 0) {
      countdownDisplay.textContent = timer + " seconds remaining!";
      timer--;
      console.log(timer + " seconds remaining");
    } else if (timer <= 0) {
      clearInterval(CountdownDetails);
      countdownDisplay.textContent = "Game Over, Loser! Let's see how you did!";
      endGame();

    }
  }, 1000);
};

btnStart.addEventListener(
  "click",
  function () {
    document.getElementById("preGame").hidden = true;
    document.getElementById("postGame").hidden = false;
    document.getElementById("start").hidden = true;
    Countdown();
    chooseQstn();
    console.log(myScore);
  },
  false
);

function clearHTML() {
  goodLuck.innerHTML = "";
  qstnDisplay.innerHTML = "";
  selectDisplay.innerHTML = "";
  answerDisplay.innerHTML = "";
}

function chooseQstn() {
  if (indexValue === questionObj.length) {
    clearHTML();
    countdownDisplay.textContent = "Game Over! Let's see how you did!";
    return;
  }
  var generateQstn = questionObj[indexValue];
  qstnDisplay.innerHTML = "";
  selectDisplay.innerHTML = "";
  setTimeout(() => {
    answerDisplay.textContent = "";
  }, 1500);
  qstnDisplay.textContent = generateQstn.question;
  for (var i = 0; i < generateQstn.selection.length; i++) {
    var element = generateQstn.selection[i];
    var chsBtn = document.createElement("button");
    chsBtn.textContent = element;
    chsBtn.addEventListener("click", confirmAnswer);
    selectDisplay.appendChild(chsBtn);
  }
}

var confirmAnswer = function (event) {
  var target = event.target;
  if (target.innerText === questionObj[indexValue].answer) {
    points += 10;
    answerDisplay.textContent = "Correct!";
    console.log(answerDisplay.textContent);
  } else {
    timer -= 15;
    answerDisplay.textContent = "Incorrect!";
    console.log(answerDisplay.textContent);
  }
  indexValue++;
  chooseQstn();
};

var endGame = function () {
  clearHTML();
  var input = document.createElement("div");
  var initials = document.createElement("input");
  initials.setAttribute("type", "text");
  initials.setAttribute("placeholder","your initials");
  var submitInit = document.createElement("button");
  submitInit.setAttribute("type", "submit");
  submitInit.textContent = "Submit";
  submitInit.addEventListener("click", function(){
    myScore.initials.push(initials.value);
    myScore.score.push(points);
    saveScore();
    });
  input.textContent = "Your score is " + points + ". Please enter your initials to save your score!";
  input.append(initials, submitInit);
  qstnDisplay.append(input);

}
  var saveScore = function(){
  localStorage.setItem("scores", JSON.stringify(myScore));

  var myScoreDisplay = document.createElement("div");
  myScoreDisplay.className = "score-list-container";

  var myScoreOrder = document.createElement("ol");
  myScoreOrder.className = "ordered-list";

  for (i = 0; i < myScore.score.length; i++) {
    var myScoreList = document.createElement("li");
    myScoreList.className = "score-list";
    myScoreList.textContent = myScore.initials[i] + "--" + myScore.score[i];
    myScoreOrder.prepend(myScoreList);
  }
  myScoreDisplay.appendChild(myScoreOrder);
  qstnDisplay.appendChild(myScoreDisplay);
};

var loadScore = function () {
  var savedScore = localStorage.getItem("scores");
  if (!savedScore) {
    return false;
  }
  myScore = JSON.parse(savedScore);
};

loadScore();
