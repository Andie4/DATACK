(function () {
    const modal = document.getElementById("transcriptModal");
    if (!modal) return;

    const openers = document.querySelectorAll("[data-transcript-open]");
    const closers = modal.querySelectorAll("[data-transcript-close]");
    const video = modal.querySelector("video");
    let lastFocused = null;

    function openModal() {
        lastFocused = document.activeElement;
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        const closeBtn = modal.querySelector(".transcriptModalClose");
        if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
        modal.hidden = true;
        document.body.style.overflow = "";
        if (video) {
            video.pause();
        }
        if (lastFocused && typeof lastFocused.focus === "function") {
            lastFocused.focus();
        }
    }

    function getFocusable() {
        return Array.from(
            modal.querySelectorAll(
                'button, [href], video[controls], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
        ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
    }

    function trapFocus(e) {
        if (e.key !== "Tab") return;
        const focusable = getFocusable();
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }

    openers.forEach((btn) => btn.addEventListener("click", openModal));
    closers.forEach((btn) => btn.addEventListener("click", closeModal));

    document.addEventListener("keydown", (e) => {
        if (modal.hidden) return;
        if (e.key === "Escape") {
            closeModal();
        } else if (e.key === "Tab") {
            trapFocus(e);
        }
    });
})();
