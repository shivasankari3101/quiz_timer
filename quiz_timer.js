var countdownNumberEl = document.getElementById('countdown-number');
var countdown =30;

countdownNumberEl.textContent = countdown;

setInterval(function() {
  countdown--;
  countdown=String(countdown).padStart("2","0");
  if(countdown>=0){
    countdownNumberEl.textContent = countdown;
  }
}, 1000);
