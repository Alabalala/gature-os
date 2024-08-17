//slides

setInterval(gallerytoRight, 3000);

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
showSlide(slideIndex);
renderDots();
updateDots();

function showSlide() {
  slides.forEach(function (slide, index) {
    if (index == slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  for (let i = 0; i < dots.length; i++) {
    if (i == slideIndex) {
      dots[i].classList.add("selectedDot");
    } else {
      dots[i].classList.remove("selectedDot");
    }
  }
}

function renderDots() {
  const dotGroup = document.querySelector(".dotGroup");
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("data-index", i);

    dotGroup.appendChild(dot);
    dot.addEventListener("click", imageDot);
  }
}

function imageDot(event) {
  const clickedDot = event.target;
  const dotIndex = clickedDot.getAttribute("data-index");
  slideIndex = dotIndex;
  showSlide();
}

const rightArrow = document.querySelector(".fa-chevron-right");
rightArrow.addEventListener("click", gallerytoRight);

function gallerytoRight() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
    showSlide(slideIndex);
  } else {
    slideIndex = 0;
    showSlide();
  }
}

const leftArrow = document.querySelector(".fa-chevron-left");
leftArrow.addEventListener("click", gallerytoLeft);

function gallerytoLeft() {
  if (slideIndex > 0) {
    slideIndex--;
    showSlide(slideIndex);
  } else {
    slideIndex = slides.length - 1;
    showSlide();
  }
}

const frame = document.querySelector(".frame");
let startX;

frame.addEventListener("touchstart", (e) => {
  // Record the initial touch position
  startX = e.touches[0].pageX;
});

frame.addEventListener("touchend", (e) => {
  // Calculate the distance moved
  const endX = e.changedTouches[0].pageX;
  const distance = endX - startX;

  // Determine the direction of the swipe
  if (distance > 50) {
    // Swipe right (move to the previous image)
    gallerytoLeft(); // Replace with your existing function
  } else if (distance < -50) {
    // Swipe left (move to the next image)
    gallerytoRight(); // Replace with your existing function
  }
});
