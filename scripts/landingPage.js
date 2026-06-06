export function landingPage() {

    let container = document.querySelector("#landingPage")

    if (!container) {
        return;
    }

    container.innerHTML = `
        <section class="landingHero" aria-label="Atelier ludo-pedagogique">
            <div class="landingHero__bg"></div>

            <div class="landingHero__imageWrap">
                <img
                    class="landingHero__image"
                    src="medias/landingImage.webp"
                    alt="Enfant avec une loupe pendant un atelier"
                >
            </div>

            <article class="landingHero__panel">
                <p class="landingHero__kicker">ATELIER LUDO-PEDAGOGIQUE</p>
                <h1 class="landingHero__title">LE MYSTERE<br>D'ALICE</h1>
                <p class="landingHero__intro">
                    Venez découvrir un atelier ludique et stimulant sur les données personnelles, pour les petits et les grands.
                </p>
                <a class="landingHero__cta" href="ressources.html">
                    Voir les ressources 
                </a>
                <span>&#8594;</span>
            </article>
        </section>
    `

}

export default landingPage();
