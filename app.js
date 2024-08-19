const menuIcon = document.querySelector(".fa-solid");
menuIcon.addEventListener("click", showDropDown);

function showDropDown() {
  const dropDown = document.querySelector(".dropDown");
  if (dropDown.hasAttribute("hidden")) {
    dropDown.removeAttribute("hidden");
    menuIcon.classList.remove("fa-solid");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-solid");
    menuIcon.classList.add("fa-x");
    document.addEventListener("click", (event) => {
      if (
        !dropDown.contains(event.target) &&
        !dropDown.hasAttribute("hidden") &&
        !menuIcon.contains(event.target)
      ) {
        dropDown.setAttribute("hidden", "");
        menuIcon.classList.remove("fa-solid");
        menuIcon.classList.remove("fa-x");
        menuIcon.classList.add("fa-solid");
        menuIcon.classList.add("fa-bars");
      } else {
        return;
      }
    });
  } else {
    dropDown.setAttribute("hidden", "");
    menuIcon.classList.remove("fa-solid");
    menuIcon.classList.remove("fa-x");
    menuIcon.classList.add("fa-solid");
    menuIcon.classList.add("fa-bars");
  }
}
