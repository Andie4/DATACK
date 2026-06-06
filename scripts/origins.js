export function origins() {

    let container = document.querySelector("#origins")

    if (!container) {
        return;
    }

    container.innerHTML = `
        <section class="origins" aria-label="Origines de l'atelier">
            <div class="origins__inner">
                <div class="origins__left">
                    <h3 class="origins__kicker">ORIGINES</h3>
                    <h2 class="origins__title podkova">NAISSANCE DU PROJET</h2>
                    <p class="origins__text">Venez découvrir un atelier ludique et stimulant sur les données personnelles, pour les petits et les grands. Venez découvrir un atelier ludique et stimulant sur les données personnelles. Pour les petits et les grands. Venez découvrir un atelier ludique et stimulant sur les données personnelles, pour les petits.</p>
                </div>

                <!-- TODO: remplacer la vidéo par une vraie vidéo + transcription --!>

                <div class="origins__right">
                    <div class="origins__video" role="button" aria-label="Lire la présentation du projet">
                        <button class="origins__play" aria-hidden="true"></button>
                    </div>
                    <div class="origins__caption">Présentation du projet</div>
                    <hr class="origins__sep">
                    <a class="origins__transcript" href="">&gt; Transcription textuelle</a>
                    <hr class="origins__sep">
                </div>
            </div>
        </section>
    `

}

export default origins();
