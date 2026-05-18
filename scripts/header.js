export function header() {

    let container = document.querySelector("#header")

    container.innerHTML = `
        <div class="navbar">
            <a href="index.html" class="logo">Datack</a>
            <a href="ressources.html" class="cta">Découvrir l'atelier</a>
        </div>
    `
}
   
export default header()
