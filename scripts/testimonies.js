export function testimonies() {

    let container = document.querySelector("#testimonies")

    container.innerHTML = `
    <section class="testimonies" aria-label="Origines de l'atelier">
    <h2><span>--</span>Témoignages</h2>
    <p class="textTextimonies">Ils ont vécu l'expérience</p>
    <div class="testimoniesList"> 
         <ul>
            <li>
                <div class="card">
                    <img src="medias/guillemetYellow.svg" class="guillemets"/>
                    <p>J'ai beaucoup aimé le fait que ça soit interactif, qu'on puisse se déplacer dans la salle et que dès le début on soit plongé dans l'univers de l'enquête.</p>
                    <div class="alignRight">
                        <div class="alignRight">
                            <hr class="hrTestimonies">
                        </div>
                        <p class="bold">Alina I.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="card">
                    <img src="medias/guillemetBrown.svg" class="guillemets"/>
                    <p>Votre projet est très intéressant et c'est le genre de projet qu'on aimerait voir plus souvent !</p>
                    <div class="alignRight">
                        <div class="alignRight">
                            <hr class="hrTestimonies">
                        </div>
                        <p class="bold">Marie T.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="card">
                    <img src="medias/guillemetCream.svg" class="guillemets"/>
                    <p>Créatif, interactif et convivial, une bonne manière d'apprendre en s'amusant.</p>
                    <div class="alignRight">
                        <div class="alignRight">
                            <hr class="hrTestimonies">
                        </div>
                        <p class="bold">Hugo D.</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    </section>
   
    `
}

testimonies();