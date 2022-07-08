// create a NodeList of all '.controls input' elements
const inputs = document.querySelectorAll('.controls input');
//to show which elements were selected and available methods for the NodeList
console.log(inputs); 

function handleUpdate() {
    // to show the value that is being selected by eventListeners below
    console.log(this.value);
    // select custom data-sizing suffix from element if it exists, or nothing
    const suffix = this.dataset.sizing || ''; 
    // show the full dataset ... sizing will be part of it
    console.log(this.dataset);
    // to show that suffix is assigned if it exists in the custom dataset object
    console.log(this.suffix);
    //to show that the proper name is selected
    console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
// Note: mousemove eventlistener does not work if Device Toolbar in Chrome Developer Tools is toggled on
// https://stackoverflow.com/questions/38352698/mousemove-event-not-triggering-in-chrome
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));