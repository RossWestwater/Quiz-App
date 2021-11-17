var btnStart = document.getElementById("start");
var countdownDisplay = document.getElementById("counter-display");
timer = 60;

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

btnStart.addEventListener('click', function(event){
  document.getElementById("preGame").hidden = true;
  document.getElementById("postGame").hidden = false;
  document.getElementById("start").hidden = true;
  Countdown();
}, false);
