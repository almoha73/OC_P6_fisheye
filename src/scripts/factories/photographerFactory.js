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
      const photographerSection = document.querySelector('.photographer_section');
      photographerSection.innerHTML += `
           <a href="photographer.html?index=${this.id}">
                <article tabindex="0" data-filter = "${this.id}" class="photographer_article">
                    <img src="assets/photographers/photo/${this.portrait}" srcset="assets/photographers/photo/${this.portrait}_small.jpg 1x" alt="${this.name}">
                    <h2 aria-label="${this.name}">${this.name}</h2>
                </article>

                <article tabindex="0">
                    <h3>${this.city}, ${this.country}</h4>
                    <p>${this.tagline}</p>
                    <p>${this.price}€/jour</p>
                </article>
            </a>  
            `;   
     }

   getUserSpecific() {
      const photographerHeader = document.querySelector('.photograph-header');

      photographerHeader.innerHTML =
    
      `
      <div class="presentation">
        <h1 tabindex="0">${this.name}</h1>
        <h2 tabindex="0">${this.city}, ${this.country}</h2>
        <p tabindex="0">${this.tagline}</p>
      </div>
      <button tabindex="0" class="contact" aria-labelledby="Contactez-moi">Contactez-moi</button>
      <img src="assets/photographers/photo/${this.portrait}" srcset="assets/photographers/photo/${this.portrait}_small.jpg 1x" alt="${this.name}" tabindex="0">
      `
  }

}

