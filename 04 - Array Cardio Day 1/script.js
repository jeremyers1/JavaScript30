// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const years = inventors.filter(inventor => inventor.year < 1600 && inventor.year > 1499);
console.log(years);
console.table(years);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const names = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
/*
const birthYear = inventors.sort(function(inventor1, inventor2) {
  if(inventor1.year > inventor2.year){
      return 1;
  } else {
      return -1;
  };});
  */
const birthYear = inventors.sort((inventor1, inventor2) => inventor1.year > inventor2.year ? 1 : -1)
console.table(birthYear);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((inventor1, inventor2) => {
    if ((inventor1.passed - inventor1.year) > (inventor2.passed - inventor2.year)) {
        return 1;
    } else {
        return -1;
    }
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/* NOTE: This needs to be done on the wikipedia page above in the console... 
      const category = document.querySelector('.mw-category');
      const links = Array.from(category.querySelector('a'));
    //const links = [...category.querySelector('a')]; // does same as above, but other more readable
    //reason an array is needed is because querySelector returns a NodeList, 
    //which does not contain most array methods, such as .map()
      const de = links
                    .map(link => link.textContent)
                    .filter(streetName = streetname.includes('de'));
  */
// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleLN = people.sort((name1, name2) => (name1 > name2) ? 1 : -1);
console.table(peopleLN);

// He decided to split and destructor them first .... 
const peopleLN2 = people.sort((name1, name2) => {
    const [last1, first1] = name1.split(', ');
    const [last2, first2] = name2.split(', ');
    return (last1 > last2) ? 1 : -1;
});
console.table(peopleLN2);

// But my approach turned out to be more accurate (and easy), 
// Since his method did not account for identical last names
// such as Blair, Robert and Blair, Tony. 

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transportation = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0; // if the object doesn't exist, create it and set it to 0 
    }
    obj[item]++;
    return obj;
    }, {}//Start with a blank object
);
console.log(transportation);