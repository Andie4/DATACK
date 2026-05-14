export function dropdown() {

    let container = document.querySelector("#footer")

    container.innerHTML = `
    <div class="flexContent">
        <h2 class="titleFooter">Datack <span class="spanFooter">--</span></h2>
        <vr></vr>
        <hr class="removeHr">
        <div class="infosFooter flexDesktop">
            <div class="groupeFooter marginBtm">
                <h3 class="titreFooter titreFooter">Navigation</h3>
                <ul>
                    <li><a href="index.html" class="link">Accueil</a></li>
                    <li><a href="ressources.html" class="link">Les ressources</a></li>
                </ul>
            </div>
            <div class="groupeFooter marginBtm">
                <h3 class="titreFooter titreFooter">Contact</h3>
                <ul class="contact groupeFooter">
                    <li><a href="mailto:contact@datack.fr" class="link">contact@datack.fr</a></li>
                    <li>+33 (0)1 XX XX XX XX</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="marginBtm">
        <hr>
        <div class="groupeFooter flexDesktop">
            <p>© 2026 Datack — Tous droits réservés</p>
            <p class="link">Mentions légales • Politique de confidentialité • CGU</p>
        </div>
    </div>

    `

}

dropdown();