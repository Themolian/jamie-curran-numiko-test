let header = document.querySelector(".header");
let headerNav = document.querySelector(".header-nav");
let headerNavItems = document.querySelectorAll(".header-nav ul li a");
let places = document.querySelectorAll(".place h3");

headerNavItems.forEach(function (i) {
  places.forEach(function (p) {
    if (p.innerHTML == i.innerHTML) {
      i.addEventListener("click", function (e) {
        e.preventDefault();
        if (headerNav.classList.contains("showing")) {
          headerNav.classList.remove("showing");
        }
        let offset = p.getBoundingClientRect().top + window.pageYOffset + -540;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      });
    }
  });
});

const scroller = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionVisible = entry.isIntersecting;
    const intersectedText = entry.target.innerHTML;
    if (sectionVisible) {
      headerNavItems.forEach((i) => {
        if (intersectedText == i.innerHTML) {
          i.classList.add("active");
          document.querySelector(".currentItem").innerHTML = i.innerHTML;
        } else {
          i.classList.remove("active");
        }
      });
      if (!entry.target.parentNode.parentNode.nextElementSibling) {
        header.style.visibility = "hidden";
      } else {
        header.style.visibility = "visible";
      }
    }
  });
});

places.forEach((place) => {
  scroller.observe(place);
});

function openMenu() {
  headerNav.classList.toggle("showing");
}
