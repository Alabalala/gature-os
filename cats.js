const img = document.getElementById("gif");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=QWzzqeKYGdLJrCbWy8aT72WhcMwEYTno&s=cats",
  {
    mode: "cors",
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });

const findButton = document.getElementById("buscar");
const searchBox = document.querySelector(".text");
findButton.addEventListener("click", findCat);

function findCat() {
  searchInput = searchBox.value;
  console.log(searchInput);
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=QWzzqeKYGdLJrCbWy8aT72WhcMwEYTno&s=${searchInput}+cat`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}
