export function footer() {

    let container = document.querySelector("#footer")

    container.innerHTML = `
    <div class="footerTop footerBlock">
        <div class="footerBrand">
            <img class="logoImg" src="medias/logo-alice.svg" alt="Le Mystère d'Alice">
        </div>
        <div class="footerCols">
            <div class="footerCol">
                <h3 class="footerHeading">Navigation</h3>
                <ul>
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="ressources.html">Les ressources</a></li>
                </ul>
            </div>
            <div class="footerCol">
                <h3 class="footerHeading">Contact</h3>
                <ul>
                    <li><a href="mailto:contact@datack.fr">contact@datack.fr</a></li>
                    <li>+33 (0)1 XX XX XX XX</li>
                </ul>
            </div>
        </div>
    </div>
    <div>
        <hr>
        <div class="footerRow">
            <p>© 2026 Datack · Tous droits réservés</p>
            <a href="mentions.html">Mentions légales • Politique de confidentialité • CGU</a>
        </div>
    </div>
    `
}

footer();
