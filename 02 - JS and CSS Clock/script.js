let allNum = document.querySelectorAll('.number');
for(let num of allNum){
    num.style.transform = `rotate(${30*num.innerText}deg)`;
}

/* Bos' works
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
*/

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
console.log(secondHand, minuteHand, hourHand);

function setClock(){
    const now = new Date();

    const seconds = now.getSeconds();
  //  const secondsRatio = (seconds / 60);
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
  //  const minutesRatio = (((seconds / 60) + minutes) / 60);
   //Bos' const minuteDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    const minutesDegrees = ((((seconds / 60) + minutes) / 60) * 360) + 91;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    /* Bos' method
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
   */

    const hours = now.getHours();
    const hoursDegrees = ((((minutes / 60) + hours) / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

 /* Can't figure out why this won't work... Figured it out was an errant ')', and now going with simpler code above 
    const hours = now.getHours();
    const hoursRatio = ((minutes / 60) + hours) / 12;
    const hoursDegrees = (hoursRatio * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    */

//    console.log(`${hours}:${minutes}:${seconds}`);
 //   console.log(hoursDegrees, minutesDegrees, secondsDegrees);

    /* Alternate Method ... but more complicated
    secondHand.style.setProperty('transform', `rotate(${secondsDegrees}deg)`);
    minuteHand.style.setProperty('transform', `rotate(${minutesDegrees}deg)`);
    hourHand.style.setProperty('transform', `rotate(${hoursDegrees}deg)`);
    */

    if (secondsDegrees <= 90){
        secondHand.style.transition = "none";
    } else {
        secondHand.style.transition = "all 0.05s";
        secondHand.style["transition-timing-function"] = "cubic-bezier(0, 1.44, 0, 1.87)";
    }
}

setInterval(setClock, 1000);

setClock();
