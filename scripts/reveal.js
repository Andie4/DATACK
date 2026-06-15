function initReveal() {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const selectors = [
        ".originsCol > *",
        ".originsMedia",
        ".programSection .eyebrow",
        ".programSection .programIntro",
        ".programList > li",
        ".testimonials .eyebrow",
        ".testimonialsTitle",
        ".testimonialList li",
        ".corner",
        ".invite > *",
        ".factGrid > li",
        ".kitIntro",
        ".kitGrid > li",
        ".steps .eyebrow",
        ".steps h2",
        ".stepsIntro",
        ".steps .programList > li",
        ".tips .eyebrow",
        ".tips h2",
        ".tipGrid > li",
        ".faq .eyebrow",
        ".faq h2",
        ".faqList > li",
        ".data .eyebrow",
        ".data h2",
        ".figureGrid > li",
        ".chartSection",
        ".sourceLink",
        ".finalCtaInner > *"
    ];

    const nodes = document.querySelectorAll(selectors.join(","));
    if (!nodes.length) {
        return;
    }

    if (prefersReduced || !("IntersectionObserver" in window)) {
        return;
    }

    const indexInGroup = new Map();
    nodes.forEach((node) => {
        const parent = node.parentElement;
        const current = indexInGroup.get(parent) || 0;
        node.style.setProperty("--i", Math.min(current, 6));
        indexInGroup.set(parent, current + 1);
        node.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px"
    });

    nodes.forEach((node) => observer.observe(node));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveal);
} else {
    initReveal();
}
