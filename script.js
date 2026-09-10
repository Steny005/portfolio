// ==========================
// CURRENT DATE
// ==========================

const dateElement = document.getElementById("currentDate");

const date = new Date();

const formattedDate =
  date.getFullYear() +
  " / " +
  String(date.getMonth() + 1).padStart(2, "0") +
  " / " +
  String(date.getDate()).padStart(2, "0");

dateElement.textContent = formattedDate;


// ==========================
// PROJECT CLICK EFFECT
// ==========================

const projects = document.querySelectorAll(".project-card");

projects.forEach((project) => {

  project.addEventListener("click", () => {

    project.classList.add("clicked");

    setTimeout(() => {
      project.classList.remove("clicked");
    }, 250);

  });

});


// ==========================
// NAV ACTIVE SECTION
// ==========================

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 180) {
      currentSection = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }

  });

});


// ==========================
// SMOOTH PROJECT HOVER
// ==========================

projects.forEach((project) => {

  project.addEventListener("mouseenter", () => {
    project.style.paddingLeft = "5px";
  });

  project.addEventListener("mouseleave", () => {
    project.style.paddingLeft = "0";
  });

});