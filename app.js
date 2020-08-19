const text = document.querySelector("h2");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  text.classList.toggle("animation");
});
