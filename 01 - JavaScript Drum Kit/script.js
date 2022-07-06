/* Personal Learning Notes:
HTML5 introduced custom data attributes.
These are anything with data- for which there are no more 
appropriate attributes or elements. 
https://stackoverflow.com/questions/18227375/what-are-data-url-and-data-key-attributes-of-a-tag

To access with JS, query select the element,
then use element.dataset.***(data attribute in camelcase without dashes)
See my conosle.log below...  
https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

This lesson used e.keyCode which is deprecated. 
Furthermore, there are other more appropriate attributes
than data-key to access the key pressed during keydown,
such as, simply, the default e.key

*/



window.addEventListener('keydown', function (e) {
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}]`);
    const yellowKey = document.querySelector(`div[e.key=$'{e.key}']`);
    console.log(audio, e.key, `audio[${e.keyCode}]`);

    yellowKey.classList.add("playing");

});

/*

window.addEventListener('keyup', function (e) {
    const yellowKey = document.querySelector(`div[${e.key}]`);
    yellowKey.classList.remove("playing");
});
*/
