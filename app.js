const menuIcon = document.querySelector(".fa-solid");
menuIcon.addEventListener("click", showDropDown);

function showDropDown() {
  const dropDown = document.querySelector(".dropDown");
  if (dropDown.hasAttribute("hidden")) {
    dropDown.removeAttribute("hidden");
    document.addEventListener("click", (event) => {
      if (
        !dropDown.contains(event.target) &&
        !dropDown.hasAttribute("hidden") &&
        !menuIcon.contains(event.target)
      ) {
        dropDown.setAttribute("hidden", "");
      } else {
        return;
      }
    });
  } else {
    dropDown.setAttribute("hidden", "");
  }
}

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
