
const roles = [
    "Python Developer",
    "Software Developer",
    "AI/ML Enthusiast",
    "C++ & DSA Learner"
];

const roleElement = document.getElementById("role");

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    roleElement.textContent =
        currentRole.substring(0, characterIndex);

    let delay = deleting ? 45 : 90;

    if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        delay = 1200;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 300;
    }

    setTimeout(typeRole, delay);
}

typeRole();

document.getElementById("year").textContent =
    new Date().getFullYear();

const avatarGreeting = document.getElementById("avatarGreeting");
const closeGreeting = document.getElementById("closeGreeting");
const avatarToggle = document.getElementById("avatarToggle");

if (closeGreeting && avatarGreeting) {
  closeGreeting.addEventListener("click", () => {
    avatarGreeting.style.display = "none";
  });
}

if (avatarToggle && avatarGreeting) {
  avatarToggle.addEventListener("click", () => {
    avatarGreeting.style.display =
      avatarGreeting.style.display === "none" ? "block" : "none";
  });
}

/* ===== ANIMATED DEVELOPER ROLE ===== */
(() => {
  const roleElement = document.getElementById("role");

  if (!roleElement) return;

  const roles = [
    "Python Developer",
    "Software Developer",
    "AI/ML Enthusiast",
    "C++ & DSA Learner"
  ];

  let currentRole = 0;

  setInterval(() => {
    currentRole = (currentRole + 1) % roles.length;

    roleElement.style.opacity = "0";

    setTimeout(() => {
      roleElement.textContent = roles[currentRole];
      roleElement.style.opacity = "1";
    }, 250);
  }, 2500);
})();

/* ===== SCROLL REVEAL ANIMATION ===== */
(() => {
  const sections = document.querySelectorAll(
    "#about, #projects, #skills, #contact"
  );

  if (!sections.length) return;

  sections.forEach((section) => {
    section.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((section) => observer.observe(section));
})();

/* ===== BACK TO TOP FUNCTIONALITY ===== */
(() => {
  const button = document.getElementById("backToTop");

  if (!button) return;

  window.addEventListener("scroll", () => {
    button.classList.toggle("show", window.scrollY > 300);
  });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
})();

/* ===== AUTOMATIC FOOTER YEAR ===== */
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
