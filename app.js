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
