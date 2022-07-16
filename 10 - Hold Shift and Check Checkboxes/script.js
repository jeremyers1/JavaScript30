const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
console.log(checkboxes);

let lastChecked;

function boxChecked(e) {
    // Check if shiftKey is down AND that they are NOT unchecking a box
    let inBetween = false;
    if (e.shiftKey && this.checked){
       checkboxes.forEach(checkbox => {
        if(checkbox === this || checkbox === lastChecked){
            inBetween = !inBetween;
        }
        if (inBetween){ // if inbetween two checked boxes, check it
            checkbox.checked = true;
        }
       });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', boxChecked));
