export class MediaFactory {
  constructor(dataMedia) {
    if (dataMedia.video == undefined) {
      return new MediaImages(dataMedia);
    } else if (dataMedia.image == undefined) {
      return new Videos(dataMedia);
    }
  }
}

class Medias {
  constructor(dataMedia, media) {
    this.id = dataMedia.id;
    this.photographerId = dataMedia.photographerId;
    this.title = dataMedia.title;
    this.likes = dataMedia.likes;
    this.date = dataMedia.date;
    this.price = dataMedia.price;
    this.media = media;
  }

  getMedias() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML += `
        <figure>
            ${this.media}
            <figcaption>
            <p class="title" title="${this.title}" tabindex="0">${this.title}</p><p tabindex="0" data-target="${this.likes}" class="like-count" aria-label="nombre de j'aime"></p><p class="like-button" aria-label="bouton j'aime" role="button" tabindex="0"><i class="far fa-regular fa-heart"></i></p>
            </figcaption>
        </figure>
        
        `;
  }
}

class MediaImages extends Medias {
  constructor(dataMedia) {
    super(dataMedia);
    this.image = dataMedia.image;
    this.media = `<img id="${this.id}" class="media" src="assets/photographers/${this.photographerId}/${this.image}" srcset="assets/photographers/${this.photographerId}/${this.image}_small.jpg 1x" alt="${this.title}" tabindex="0">`;
  }
}

class Videos extends Medias {
  constructor(dataMedia) {
    super(dataMedia);
    this.video = dataMedia.video;
    this.media = `
        <video id="${this.id}" class="media" preload="metadata" src="assets/photographers/videos/${this.video}" type="video/mp4" loop tabindex="0"></video>
        <div class="bar">
                <div class="bar-line"></div>
        </div>
        `;
  }
}
