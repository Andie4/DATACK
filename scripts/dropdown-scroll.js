(function () {
    const dropdowns = document.querySelectorAll(".programDropdown");
    if (dropdowns.length === 0) return;

    let userInteracted = false;
    window.addEventListener(
        "pointerdown",
        () => {
            userInteracted = true;
        },
        { once: true, capture: true }
    );

    dropdowns.forEach((details) => {
        details.addEventListener("toggle", () => {
            if (!details.open || !userInteracted) return;
            // Laisse le rendu se mettre à jour avant de scroller.
            requestAnimationFrame(() => {
                details.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        });
    });
})();
