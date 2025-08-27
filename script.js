const toggleList = document.querySelectorAll(".show-more");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const cross = document.querySelector(".cross");
const bar = document.querySelector(".bar");
const navbarTablet = document.querySelector(".navTab");

for (let list of toggleList) {
  list.addEventListener("click", (e) => {
    let arrowUp = list.querySelector(".arrow-up");
    let arrowDown = list.querySelector(".arrow-down");
    arrowUp.classList.toggle("hidden");
    arrowDown.classList.toggle("hidden");

    let ul = list.nextElementSibling;
    ul.classList.toggle("hidden");
  });
}

hamburger.addEventListener("click", (e) => {
  links.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  bar.classList.toggle("hidden");
});

navbarTablet.addEventListener("click", (e) => {
  let arrowUp = navbarTablet.querySelector(".arrow-up");
  let arrowDown = navbarTablet.querySelector(".arrow-down");
  arrowUp.classList.toggle("hidden");
  arrowDown.classList.toggle("hidden");

  if (navbarTablet.matches(":focus")) {
    if (arrowDown.classList.contains("hidden")) {
      navbarTablet.classList.add("underline");
    } else {
      navbarTablet.classList.remove("underline");
    }
  }

  links.classList.toggle("mlg:block");
});

navbarTablet.addEventListener("blur", (e) => {
  navbarTablet.classList.remove("underline");
});
