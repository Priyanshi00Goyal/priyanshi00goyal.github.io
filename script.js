
/* =========================================
   PRIYANSHI GOYAL — PORTFOLIO INTERACTIONS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. ANIMATED DEVELOPER ROLES
  const roleElement = document.getElementById("role");

  if (roleElement) {
    const roles = [
      "Python Developer",
      "Software Developer",
      "AI/ML Enthusiast",
      "C++ & DSA Learner"
    ];

    let roleIndex = 0;

    window.setInterval(() => {
      roleElement.style.opacity = "0";

      window.setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleElement.textContent = roles[roleIndex];
        roleElement.style.opacity = "1";
      }, 200);
    }, 2500);
  }

  // 2. MOBILE NAVIGATION
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-link, .nav-cta");

  function closeMenu() {
    if (!menuToggle || !navLinks) return;

    menuToggle.classList.remove("open");
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    navItems.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      const clickedInsideMenu =
        navLinks.contains(event.target) ||
        menuToggle.contains(event.target);

      if (!clickedInsideMenu) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navLinks.classList.contains("open")) {
        closeMenu();
        menuToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    });
  }

  // 3. REVEAL ELEMENTS WHEN THEY ENTER THE VIEWPORT
  const revealElements = document.querySelectorAll(".reveal");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("revealed");
    });
  }

  // 4. ACTIVE NAVIGATION LINK
  const sections = document.querySelectorAll("main section[id]");
  const sectionLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );

  if ("IntersectionObserver" in window && sections.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          sectionLinks.forEach((link) => {
            const isActive =
              link.getAttribute("href") === `#${entry.target.id}`;

            link.classList.toggle("active", isActive);
          });
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  // 5. BACK TO TOP BUTTON
  const backToTop = document.getElementById("back-to-top");

  if (backToTop) {
    const updateBackToTop = () => {
      backToTop.classList.toggle("visible", window.scrollY > 450);
    };

    window.addEventListener("scroll", updateBackToTop, {
      passive: true
    });

    updateBackToTop();

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? "auto" : "smooth"
      });
    });
  }

  // 6. COPY EMAIL ADDRESS
  const copyEmailButton = document.getElementById("copy-email");
  const emailAddress = "p.25012008.g@gmail.com";

  if (copyEmailButton) {
    copyEmailButton.addEventListener("click", async () => {
      const originalText = "⧉";
      let copied = false;

      try {
        await navigator.clipboard.writeText(emailAddress);
        copied = true;
      } catch (error) {
        // Fallback for browsers that block clipboard access.
        const temporaryInput = document.createElement("textarea");

        temporaryInput.value = emailAddress;
        temporaryInput.setAttribute("readonly", "");
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";

        document.body.appendChild(temporaryInput);
        temporaryInput.select();

        try {
          copied = document.execCommand("copy");
        } catch (fallbackError) {
          copied = false;
        }

        temporaryInput.remove();
      }

      copyEmailButton.textContent = copied ? "✓" : originalText;
      copyEmailButton.setAttribute(
        "aria-label",
        copied ? "Email copied" : "Copy email address"
      );
      copyEmailButton.title = copied
        ? "Email copied!"
        : "Copy failed. Please copy the email manually.";

      window.setTimeout(() => {
        copyEmailButton.textContent = originalText;
        copyEmailButton.setAttribute("aria-label", "Copy email address");
        copyEmailButton.title = "Copy email";
      }, 1800);
    });
  }

  // 7. AUTOMATIC FOOTER YEAR
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
