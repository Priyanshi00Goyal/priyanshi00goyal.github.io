
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
