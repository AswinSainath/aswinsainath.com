// JavaScript to handle page refresh and scroll to the top of the page
window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});

// JavaScript to add the "show" class when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const intro = document.querySelector('.intro');
  intro.classList.add('show');
});


const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const controller = new ScrollMagic.Controller();



let scene = new ScrollMagic.Scene({
  duration: 4600,
  triggerElement: intro,
  triggerHook: 0
})
.setPin(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 1, { opacity: 1 }, { opacity: 0 });
const vidAnim = TweenMax.fromTo(video, 1, { opacity: 0 }, { opacity: 1 });

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

let scene3 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
.setTween(vidAnim)
.addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.33);

// function scrollToLast() {
//   const lastSection = document.querySelector('section:last-of-type');
//   const lastSectionPosition = lastSection.offsetTop;

//   // Scroll to the last section smoothly
//   window.scrollTo({
//     top: lastSectionPosition,
//     behavior: 'smooth'
//   });
// }


// JavaScript to handle the "Go to Last Section" button click
function scrollToLast() {
  const lastSection = document.querySelector('section:last-of-type');
  const lastSectionPosition = lastSection.offsetTop;

  // Scroll to the last section smoothly
  window.scrollTo({
    top: lastSectionPosition,
    behavior: 'smooth'
  });

  // Hide the button after it is clicked
  const button = document.querySelector('.scroll-to-last-btn');
  button.style.display = 'none';
}


// Your existing JavaScript code

// JavaScript to handle smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});



// function skipAnimation() {
//   // Hide the button after skipping animation
//   const skipButton = document.querySelector('.skip-animation-btn');
//   skipButton.style.display = 'none';

//   // Show the "Welcome" text by fading it in
//   gsap.to(text, { opacity: 1, duration: 1 });

//   // Pause the video and hide it
//   video.pause();
//   video.style.display = 'none';

//   // Remove the pinning effect and indicators when the animation is skipped
//   scene.remove();
//   controller.destroy(true);
// }
