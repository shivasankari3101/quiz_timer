var countdownNumberEl = document.getElementById('countdown-number');
var countdown =3;

countdownNumberEl.textContent = countdown;

setInterval(function() {
  countdown--;
  if(countdown>=0){
    countdownNumberEl.textContent = countdown;
  }
}, 1000);
