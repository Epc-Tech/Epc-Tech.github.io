const allElems = document.querySelectorAll("[data-allListItems]");
const toggleNavbarColor = document.querySelectorAll("#toggleBtn");
toggleNavbarColor.forEach((elems) => {
  elems.addEventListener("click", (e) => {
    allElems.forEach((items) => {
      if (document.body.classList.contains("bg-white")) {
        items.classList.remove("hover:after:bg-Accent");
        items.classList.add("hover:after:bg-Primary");
      } else {
        items.classList.add("hover:after:bg-Accent");
        items.classList.remove("hover:after:bg-Primary");
      }
    });
  });
});
