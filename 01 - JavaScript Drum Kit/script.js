/* YES! The following code is a mess and has not been cleaned or refactored. 
I do this on purpose so I can remember what I did and learn from it in the future.


Personal Learning Notes:
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
than data-key, such as, simply, e.key
https://stackoverflow.com/questions/1846599/how-to-find-out-what-character-key-is-pressed

*/


window.addEventListener('keydown', function(e){
    console.log(e);
    /* removed his approach because keyCode is deprecated
    he even complained in the video that keyCode was hard to remember
    so the HTML data-keys have been updated as well, 

    Note: e.key returns which key was pressed, but it does not access the 
    div or audio elements 

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    */
    const audio2 = document.querySelector(`audio[data-key="${e.key}"]`);
    const audio3 = e.key; // can't use to play audio
    console.log(audio2, audio3);
    if (!audio2) return; // if no proper key pressed, stop
    audio2.currentTime = 0; // allows immediate replay of audio
    audio2.play();

    const btnPlaying = document.querySelector(`div[data-key="${e.key}"]`);
    const btnPlaying2 = e.key; // can't use to update classes
    console.log(btnPlaying, btnPlaying2);

    btnPlaying.classList.add("playing");

    /* NOTE: for some reason, keyup has to go INSIDE 'keydown' eventListener 
    or else it throws error 
    See his approach below */
    window.addEventListener('keyup', function () {
         btnPlaying.classList.remove("playing");
    });

});

/* Leaving my attempt here to see if I can fix it later?
window.addEventListener('keyup', function(e) {
    const btnDone = document.querySelector(`div[data-key="${e.key}"]`);
    btnDone.classList.remove("playing");
});
*/

/* His method works, but is much more complicated ... is it more standard?
const keys = document.querySelectorAll('.key');
keys.forEach(element => element.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if no tranform
    this.classList.remove("playing");
} */