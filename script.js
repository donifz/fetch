let url =
  "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=LKri6hXvoQfyOCqLABku6i9fOgIokbfC&limit=5";

let container = document.querySelector(".container");
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let submit = document.querySelector(".submit-btn");
let gifs = document.querySelector(".gifs");

function get(url) {
  fetch(url)
    .then((data) => data.json())
    .catch((error) => console.error(error))
    .then((data) => {
      data.data.forEach((item) => {
        if (gifs.children.length < 6) {
          let img = document.createElement("img");
          img.src = item.images.original.url;
          return gifs.appendChild(img);
        } else {
          return (gifs.innerHTML = "");
        }
      });
    });
}

form.addEventListener("click", function (e) {
  e.preventDefault();
  let target = e.target;
  let inputText = input.value;
  url =
    "https://api.giphy.com/v1/gifs/search?q=" +
    inputText.split(" ").join("+") +
    "&api_key=LKri6hXvoQfyOCqLABku6i9fOgIokbfC&limit=5";
  if (target.type == "submit") {
    get(url);
  }
});
