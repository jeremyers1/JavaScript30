/* Also was helpful: 
https://www.youtube.com/watch?v=Ki0XXrlKlHY
https://github.com/WebDevSimplified/JavaScript-Clock
He uses a custom property --rotation to place numbers and hand rotation
See https://developer.mozilla.org/en-US/docs/Web/CSS/--* 
*/

let allNum = document.querySelectorAll('.number');
for(let num of allNum){
    num.style.transform = `rotate(${30*num.innerText}deg)`;
}

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
console.log(secondHand, minuteHand, hourHand);

function setClock(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
//    console.log(`${hours}:${minutes}:${seconds}`);

    const secondsRatio = (seconds / 60);
    const minutesRatio = (secondsRatio + minutes) / 60;
    const hoursRatio = (minutesRatio + hours) / 12;

    const secondsDegrees = (secondsRatio * 360) + 90;
    const minutesDegrees = (minutesRatio * 360) + 91;
    const hoursDegrees = (hoursRatio * 360) + 90;

 //   console.log(hoursDegrees, minutesDegrees, secondsDegrees);

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees})deg)`;

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
