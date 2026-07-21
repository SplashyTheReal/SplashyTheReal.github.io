const yearElement = document.getElementById("current-year");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

function closeMenu() {
    if (!menuToggle || !navLinks) {
        return;
    }

    menuToggle.classList.remove("active");
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const menuIsOpen = navLinks.classList.toggle("open");

        menuToggle.classList.toggle("active", menuIsOpen);
        menuToggle.setAttribute("aria-expanded", String(menuIsOpen));
        menuToggle.setAttribute(
            "aria-label",
            menuIsOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 680) {
            closeMenu();
        }
    });
}