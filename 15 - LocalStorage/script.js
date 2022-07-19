const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // get localStorage items if they exist, or empty array
const buttons = document.querySelectorAll('button');

function addItem(e) {
    e.preventDefault(); // prevents page reloading which happens by default when a form is submitted
    const text = (this.querySelector('[name=item]')).value;
    const item= {
        text, // ES6 Shorthand for text: text;
        done: false
    }
    // console.log(item);
    items.push(item);
    populateList(items, itemsList); // could cause performance issues, since it re-renders each time. React/Angular can fix this
    localStorage.setItem('items', JSON.stringify(items)); // can only store strings in localStorage
    this.reset(); // resets form
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? "checked" : ""} />
            <label for="item${i}">${plate.text}</label>
        </li>`;
    }).join(''); // takes entire array and returns one string of HTML code
}

function toggleDone(e) { // save item status in localStorage also
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

// Take it further assignment 
function updateList(e){
    if (e.target.matches('.delete')) {
        localStorage.clear();
        location.reload();
    } else if (e.target.matches('.check')) {
        items.forEach(plate => plate.done = true);
    } else if (e.target.matches('.uncheck')) {
        items.forEach(plate => plate.done = false);      
    }
    populateList(items, itemsList);
}

buttons.forEach(button => button.addEventListener('click', updateList));
addItems.addEventListener('submit', addItem); // submit covers both Enter button AND button click
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);
