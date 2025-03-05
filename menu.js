const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close");
const list = document.querySelector("#list");
const left = document.querySelector("#left");
const interval = document.querySelector("#interval");

//Hamburger Toggle Section

hamburger.addEventListener("click", (e) => {
  hamburger.classList.add("hidden");
  closeIcon.classList.remove("opacity-0");
  closeIcon.classList.remove("rotate-[90deg]");
  left.classList.remove("translate-x-[-150%]");
});

//Close Icon Toggle Section

closeIcon.addEventListener("click", (e) => {
  hamburger.classList.remove("hidden");
  closeIcon.classList.add("opacity-0");
  closeIcon.classList.add("rotate-[90deg]");
  left.classList.add("translate-x-[-150%]");
});
