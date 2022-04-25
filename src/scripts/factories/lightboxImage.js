export class Lightboximage {
    constructor(url, title) {
      this.title = title;
      this.url = url;
    }
  
    buildDom() {
      const lightboxContainer = document.querySelector('.lightbox_container');
      lightboxContainer.innerHTML = ''
      lightboxContainer.innerHTML = `
      <div>
        <img src="${this.url}" alt="${this.title}" tabindex="4">
        <p tabindex="5">${this.title}</p>
      </div>
      `
      // wrapper.querySelector(".next").addEventListener('click', this.next.bind(this));
      return lightboxContainer;
    }
  }