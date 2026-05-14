export function dropdown() {

    let container = document.querySelector("#linkRessources")

    container.innerHTML = `
    <div class="corner">
        <img src="medias/angleGauche.svg" alt="">
        <img src="medias/angleDroit.svg" alt="">
    </div>
    <div class="infoRessources">
        <h2 class="titreRessources">Organisez votre atelier</h2>
        <p class="podkova textStyle">Prêt à mener l’enquête ?</p>
        <p class="styleParagraphe">L’atelier est disponible pour les établissements scolaires, associations et entreprises.</p>
        <a class="ressources" href="test.html">Découvrir les ressources</a>
    </div>

    `

}

dropdown();