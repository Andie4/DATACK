export function program() {

    let container = document.querySelector("#program")

    const steps = [
        {
            number: "01",
            title: "Introduction - Qui est Alice ?",
            duration: "5 min",
            summary: `Mise en contexte narrative et présentation des personnages de l'enquête.
                      Les participants reçoivent leur dossier d'enquêteur.`,
            details: ""
        },
        {
            number: "02",
            title: "L'enquête - Parcourir les données des suspects",
            duration: "20 min",
            summary: `En équipes, les participants analysent les indices des suspects.
                      Ils reconstituent leurs profils à partir de leurs traces numériques.`,
            details: ""
        },
        {
            number: "03",
            title: "Final de l'enquête avec jeu numérique",
            duration: "10 min",
            summary: `Jeu en communauté pour résoudre l'affaire.
                      Cohésion d'équipe et suspens seront au rendez-vous !`,
            details: ""
        },
        {
            number: "04",
            title: "Conclusion & post-atelier",
            duration: "10 min",
            summary: `Synthèse et remise du guide pratique de protection des données.
                      Questions/Réponses final avec les animateurs de Datack.`,
            details: `
                <p class="programStepExtra">
                    Synthèse et remise du guide pratique de protection des données.
                    Questions/Réponses final avec les animateurs de Datack.
                </p>
                <a class="programLink" href="ressources.html">
                    Voir les ressources <span aria-hidden="true">&rarr;</span>
                </a>
            `
        }
    ]

    const stepsMarkup = steps.map((step, index) => `
        <li class="programStep">
            <details class="programDropdown"${index === steps.length - 1 ? " open" : ""}>
                <summary class="programSummary">
                    <span class="programNumber" aria-hidden="true">${step.number}</span>
                    <span class="programBody">
                        <span class="programHeader">
                            <h3 class="programTitle">${step.title}</h3>
                            <span class="programDuration">${step.duration}</span>
                        </span>
                        <p class="programText">${step.summary}</p>
                    </span>
                </summary>
                <div class="programDetails">
                    ${step.details}
                </div>
            </details>
        </li>
    `).join("")

    container.innerHTML = `
        <section class="programSection" aria-labelledby="programHeading">
            <h2><span aria-hidden="true">--</span>Programme</h2>
            <p class="programIntro podkova">Déroulé de l'atelier</p>

            <ol class="programList" id="programHeading">
                ${stepsMarkup}
            </ol>

            <p class="programTotal"><span class="bold">Total :</span> 45min</p>
        </section>
    `

}

program();
