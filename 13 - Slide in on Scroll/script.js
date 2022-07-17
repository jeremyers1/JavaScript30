const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
    sliderImages.forEach(sliderImage => {
        console.log(window.scrollY); // to see scroll location
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
        console.log('SlideInAt is ' + slideInAt);
       // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        console.log('imageBottom is ' + imageBottom);
        const isHalfShown = slideInAt > sliderImage.offsetTop; // Shorthand boolean variable assignment
        console.log('isHalfShown is ' + isHalfShown);
        const isNotScrolledPast = window.scrollY < imageBottom; // Shorthand boolean variable assignment
        console.log('isNotScrolledPast is ' + isNotScrolledPast);

        if (isHalfShown && isNotScrolledPast){
            console.log('sliding in image');
            sliderImage.classList.add('active');
        } else {
            console.log('hiding image');
            sliderImage.classList.remove('active');
        }
            

    })
}

window.addEventListener('scroll', debounce(checkSlide)); // runs far too often without debounce 

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
