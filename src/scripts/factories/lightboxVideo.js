export class Lightboxvideo {
    constructor(url, title) {
      this.title = title;
      this.url = url;
    }
  
    buildDom() {
      const lightboxContainer = document.querySelector('.lightbox_container');
      console.log(lightboxContainer);
      lightboxContainer.innerHTML = ''
      lightboxContainer.innerHTML = `
      <div>
        <video src="${this.url}" alt="" controls></video>
        <p>${this.title}</p>
      </div>
      `
      // wrapper.querySelector(".next").addEventListener('click', this.next.bind(this));
      return lightboxContainer;
    }
  }