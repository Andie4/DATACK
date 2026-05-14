export function dropdown() {

    let container = document.querySelector("#testimonies")

    container.innerHTML = `

    <h2><span>--</span>Témoignages</h2>
    <p class="textTextimonies">Ils ont vécu l'expérience</p>
    <div class="testimoniesList"> 
         <ul>
            <li>
                <div class="card">
                    <img src="medias/guillemetYellow.svg" class="guillemets"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                    <div class="alignRight">
                        <div class="alignRight">
                            <hr class="hrTestimonies">
                        </div>
                        <p class="bold">Lorem I.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="card">
                    <img src="medias/guillemetBrown.svg" class="guillemets"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                    <div class="alignRight">
                        <div class="alignRight">
                            <hr class="hrTestimonies">
                        </div>
                        <p class="bold">Lorem I.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="card">
                    <img src="medias/guillemetCream.svg" class="guillemets"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                    <div class="alignRight">
                        <div class="alignRight">
                            <hr class="hrTestimonies">
                        </div>
                        <p class="bold">Lorem I.</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
   
    `
}

dropdown();