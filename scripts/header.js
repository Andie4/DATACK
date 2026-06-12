export function header() {

    let container = document.querySelector("#header")

    container.innerHTML = `
        <div class="navbar">
            <a href="index.html" class="logo" aria-label="Accueil">
                <img class="logoImg" src="medias/logo-alice.svg" alt="Le Mystère d'Alice">
            </a>
            <a href="ressources.html" class="btn">Découvrir l'atelier</a>
        </div>
    `
}

export default header()
