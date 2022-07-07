const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

let allNum = document.querySelectorAll('.number');
for(let num of allNum){
    num.style.transform = `rotate(${30*num.innerText}deg)`;
}

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    // console.log(`${hours}:${minutes}:${seconds}`);

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;
    console.log(minutesDegrees, hoursDegrees);

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if (secondsDegrees <= 90){
        secondHand.style.transition = "none";
    } else {
        secondHand.style.transition = "all 0.05s";
        secondHand.style["transition-timing-function"] = "cubic-bezier(0, 1.44, 0, 1.87)";
    }
}

setInterval(setDate, 1000);