function initNav() {
    const toggle = document.querySelector(".navToggle");
    const menu = document.getElementById("navMenu");
    if (!toggle || !menu) {
        return;
    }

    function onDocClick(event) {
        if (!menu.contains(event.target) && !toggle.contains(event.target)) {
            close();
        }
    }

    function open() {
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Fermer le menu");
        menu.classList.add("is-open");
        document.addEventListener("click", onDocClick);
    }

    function close() {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Ouvrir le menu");
        menu.classList.remove("is-open");
        document.removeEventListener("click", onDocClick);
    }

    toggle.addEventListener("click", (event) => {
        event.stopPropagation();
        if (toggle.getAttribute("aria-expanded") === "true") {
            close();
        } else {
            open();
        }
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", close);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            close();
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNav);
} else {
    initNav();
}
