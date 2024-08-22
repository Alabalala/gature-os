const menuIcon = document.querySelector(".fa-solid");
menuIcon.addEventListener("click", showDropDown);

function showDropDown() {
  const dropDown = document.querySelector(".dropDown");
  if (
    dropDown.classList.contains("dropDownOut") ||
    !dropDown.classList.contains("dropDownIn")
  ) {
    dropDown.classList.remove("dropDownOut");
    dropDown.classList.add("dropDownIn");
    menuIcon.classList.remove("fa-solid");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-solid");
    menuIcon.classList.add("fa-x");
    document.addEventListener("click", (event) => {
      if (
        !dropDown.contains(event.target) &&
        !dropDown.classList.contains("dropDownOut") &&
        !menuIcon.contains(event.target)
      ) {
        dropDown.classList.add("dropDownOut");
        dropDown.classList.remove("dropDownIn");

        menuIcon.classList.remove("fa-solid");
        menuIcon.classList.remove("fa-x");
        menuIcon.classList.add("fa-solid");
        menuIcon.classList.add("fa-bars");
      } else {
        return;
      }
    });
  } else {
    dropDown.classList.add("dropDownOut");
    menuIcon.classList.remove("fa-solid");
    menuIcon.classList.remove("fa-x");
    menuIcon.classList.add("fa-solid");
    menuIcon.classList.add("fa-bars");
  }
}

function calculateBar() {
  let oneHundred = 710;
  let partValue = 205;
  let partPercentage = Math.round((partValue / oneHundred) * 100);
  changeBar(partPercentage);
  console.log(partPercentage);
}

function changeBar(per) {
  console.log("this is called");
  const colorBar = document.querySelector(".colorBar");
  colorBar.style.width = `${per}%`;
}

calculateBar();
