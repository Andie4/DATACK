(function () {
    const dropdowns = document.querySelectorAll(".programDropdown");
    if (dropdowns.length === 0) return;

    dropdowns.forEach((details) => {
        details.addEventListener("toggle", () => {
            if (!details.open) return;
            // Laisse le rendu se mettre à jour avant de scroller.
            requestAnimationFrame(() => {
                details.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        });
    });
})();
