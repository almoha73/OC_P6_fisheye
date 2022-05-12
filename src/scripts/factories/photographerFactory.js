export class PhotographerFactory {
  constructor(dataPh) {
    this.name = dataPh.name;
    this.id = dataPh.id;
    this.city = dataPh.city;
    this.country = dataPh.country;
    this.tagline = dataPh.tagline;
    this.price = dataPh.price;
    this.portrait = dataPh.portrait;
  }

  getUserCardDom() {
    const photographerSection = document.querySelector(".photographer_section");
    photographerSection.innerHTML += `
      <div class="portrait">
           <a href="photographer.html?index=${this.id}" tabindex="0">
                <article data-filter = "${this.id}" class="photographer_article">
                    <img src="assets/photographers/photo/${this.portrait}" srcset="assets/photographers/photo/${this.portrait}_small.jpg 1x" alt="${this.name}">
                    <h2>${this.name}</h2>
                </article>
          </a> 
                <article tabindex="0">
                    <h3 tabindex="0" aria-label="${this.city}, ${this.country}">${this.city}, ${this.country}</h3>
                    <p tabindex="0" aria-label="${this.tagline}">${this.tagline}</p>
                    <p tabindex="0" aria-label="${this.price}€/jour">${this.price}€/jour</p>
                </article>
        </div>     
            `;
  }

  getUserSpecific() {
    const photographerHeader = document.querySelector(".photograph-header");

    photographerHeader.innerHTML = `
      <div class="presentation">
        <h1 tabindex="0">${this.name}</h1>
        <div class="identite" tabindex="0">
          <h2>${this.city}, ${this.country}</h2>
          <p>${this.tagline}</p>
        </div>
      </div>
      <div>
        <button tabindex="0" class="contact">Contactez-moi</button>
      </div>
      <div>
        <img src="assets/photographers/photo/${this.portrait}" srcset="assets/photographers/photo/${this.portrait}_small.jpg 1x" alt="${this.name}" tabindex="0">
      </div>
      `;
  }
}
