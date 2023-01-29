const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const pauseButton = document.getElementById('pause');   
let playing = true;
const intervalTime = 2000;
let slideInterval;



    const nextSlide = () =>{
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    if(activeSlide.nextElementSibling){
        activeSlide.nextElementSibling.classList.add('active');
    }
    else{
        slides[0].classList.add('active');
    }
}

    const prevSlide = () =>{
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    if(activeSlide.previousElementSibling){
        activeSlide.previousElementSibling.classList.add('active');
    }
    else{
        slides[slides.length-1].classList.add('active');
    }
}

    next.addEventListener('click',() =>{
    nextSlide();
    if(playing)
    { clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide,intervalTime);} 
    

});

    prev.addEventListener('click',() =>{
    prevSlide();
    if(playing){   
        clearInterval(slideInterval);
       slideInterval = setInterval(nextSlide,intervalTime);} 
   
});

//---Pause Bottun----------
    const pauseSlideshow = () =>{
	pauseButton.innerHTML = 'Play';
    playing = false;
	clearInterval(slideInterval);
}

//---Play Bottun
    const playSlideshow = () =>{
     pauseButton.innerHTML = 'Pause';
     playing = true;
     slideInterval = setInterval(nextSlide,intervalTime);

}

    pauseButton.addEventListener('click',() =>{
	if(playing){ pauseSlideshow(); }
      else{playSlideshow(); }
    });

//---Mouse HoverOn----
    const handleEvent = evt => {
        evt.stopPropagation();
        evt.preventDefault();
        evt.currentTarget= clearInterval(slideInterval);
    }
    const handleLeave = evt => {
        slideInterval = setInterval(nextSlide,intervalTime) ;

    }
    //---Mouse HoverOut----
    const init = () => {
        let elAll = Array.from(document.querySelectorAll('.slide'));

        for (let el of elAll) {
            el.addEventListener('mouseenter', handleEvent)
            el.addEventListener('mouseleave', handleLeave)

        }
    }
    document.addEventListener('DOMContentLoaded', init);
    
 //---Slider Auto Play---
    if(playing)
    {slideInterval = setInterval(nextSlide,intervalTime);}   

 
 

