import { fetchPhotographersMedias } from "./api";
import { displayMedias } from "./photographer";
import { Lightboximage } from "../factories/lightboxImage";
import { Lightboxvideo } from "../factories/lightboxVideo";
//import { MediaFactory } from "./mediasFactory";

export class Lightbox {
  static init() {
    const links = Array.from(document.querySelectorAll(".media"));
    const tabLinks = links.map((media) => media.getAttribute("src")); //this.tabLinks
    const titles = Array.from(document.querySelectorAll(".title"));

    const title = titles.map((elt) => elt.innerText);

    for (let i = 0; i < links.length; i++) {
      const link = links[i]; //this.link
      const titlePosition = title[i]; //this.titlePosition
      const linkUrl = link.getAttribute("src"); //this.linkUrl
      const currentMediaPosition = tabLinks.findIndex(
        //this.currentPosition
        (link) => link == linkUrl
      );
      const currentMediaTitlePosition = title.findIndex(
        //this.currentMediaTitlePosition
        (link) => link == titlePosition
      );

      link.onclick = () => {
        const light = new Lightbox(
          linkUrl,
          tabLinks,
          link,
          title,
          titlePosition,
          currentMediaPosition,
          currentMediaTitlePosition
        );
        light.preview();
        const next = document.querySelector(".next");
        next.focus();
      };

      link.onkeydown = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          link.onclick();
        }
      };
    }
  }

  // CONSTRUCTEUR
  constructor(
    linkUrl,
    tabLinks,
    link,
    title,
    titlePosition,
    currentMediaPosition,
    currentMediaTitlePosition
  ) {
    console.log(this);
    this.linkUrl = linkUrl;
    this.tabLinks = tabLinks;
    this.link = link;
    this.title = title;
    this.titlePosition = titlePosition;
    this.links = Array.from(document.querySelectorAll(".media"));
    this.currentMediaPosition = currentMediaPosition;
    this.currentMediaTitlePosition = currentMediaTitlePosition;

    this.element = this.buildDom();
    this.body = document.querySelector("body");
    this.body.prepend(this.element);
    this.lightboxContainer = document.querySelector(".lightbox_container");
    this.lightBoxRemove = this.lightboxContainer.firstChild.remove();

    this.closeIcon = document.querySelector(".close-lightbox");
    this.rightArrow = document.querySelector(".next");
    this.leftArrow = document.querySelector(".previous");
    this.clicEvent();
    this.keyboardEvent();
  }

  //AFFICHAGE DE LA LIGHTBOX AVEC IMAGES ET/OU VIDEO
  preview() {
    if (this.links[this.currentMediaPosition].nodeName === "IMG") {
      const lightboxImage = new Lightboximage(this.linkUrl, this.titlePosition);
      lightboxImage.buildDom();
    } else {
      // si le nodeName n'est pas IMG donc ici vidéo
      const lightboxVideo = new Lightboxvideo(this.linkUrl, this.titlePosition);

      lightboxVideo.buildDom();
    }
  }

  // Fonction qui permet de garder le focus à l'intérieur de la modale de la lightbox
  focusInModal(e) {
    e.preventDefault();
    const wrapper = document.querySelector(".wrapper");
    const focusablesLightbox = Array.from(
      document.querySelectorAll(".modalLightbox")
    );

    let index = focusablesLightbox.findIndex(
      (elt) => elt === wrapper.querySelector(":focus")
    );
    console.log(index);

    if (e.shiftKey === true) {
      index--;
    } else {
      index++;
    }

    if (index >= focusablesLightbox.length) {
      index = 0;
    }
    if (index < 0) {
      index = focusablesLightbox.length - 1;
    }

    focusablesLightbox[index].focus();
  }

  //Evenements du clic sur les boutons
  clicEvent() {
    this.closeIcon.addEventListener("click", (e) => {
      e.preventDefault();
      this.close();
    });
    this.rightArrow.addEventListener("click", (e) => {
      e.preventDefault();
      this.next();
    });
    this.leftArrow.addEventListener("click", (e) => {
      e.preventDefault();
      this.previous();
    });
  }

  close() {
    setTimeout(() => {
      this.body.firstChild.remove();
    }, 500);
    this.links[this.currentMediaPosition].focus();
  }

  next() {
    this.lightBoxRemove;

    if (this.currentMediaPosition < this.links.length - 1) {
      this.currentMediaPosition++;
      this.currentMediaTitlePosition++;
      this.linkUrl = this.tabLinks[this.currentMediaPosition];
      this.titlePosition = this.title[this.currentMediaTitlePosition];
      this.preview();
    } else {
      this.currentMediaPosition = 0;
      this.currentMediaTitlePosition = 0;
      this.linkUrl = this.tabLinks[this.currentMediaPosition];
      this.titlePosition = this.title[this.currentMediaTitlePosition];
      this.preview();
    }
  }

  previous() {
    this.lightBoxRemove;

    if (this.currentMediaPosition > 0) {
      this.currentMediaPosition--;
      this.currentMediaTitlePosition--;
      this.linkUrl = this.tabLinks[this.currentMediaPosition];
      this.titlePosition = this.title[this.currentMediaTitlePosition];
      this.preview();
    } else {
      this.currentMediaPosition = this.links.length - 1;
      this.currentMediaTitlePosition = this.title.length - 1;
      this.linkUrl = this.tabLinks[this.currentMediaPosition];
      this.titlePosition = this.title[this.currentMediaTitlePosition];
      this.preview();
    }
  }

  //Evènements  du clavier
  keyboardEvent() {
    this.element.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.element !== null) {
        this.close();
      } else if (e.key === "ArrowLeft") {
        this.previous();
        this.leftArrow.focus();
      } else if (e.key === "ArrowRight" && this.element !== null) {
        this.next();
        this.rightArrow.focus();
      } else if (e.key === "Tab" && this.element !== null) {
        e.preventDefault();
        this.focusInModal(e);
      }
    });
  }

  buildDom() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.innerHTML = `
                <div class="wrapper-content">
                <div class="bground"></div>
                <div class="wrapper-left">
                  <button aria-label="bouton recule" class="previous modalLightbox" tabindex="0">
                    <i class="fas fa-solid fa-angle-left"></i>
                  </button>
                </div>
                <div class="lightbox_container">
                  
                </div>
                <div class="wrapper-right">
                  <button aria-label="avance" class="next modalLightbox" tabindex="0">
                    <i class="fas fa-solid fa-angle-right"></i>
                  </button>
                  <button aria-label="fermeture de la lightbox" class="close-lightbox modalLightbox" tabindex="0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                  </button>
                </div>
                </div>
                
            `;

    return wrapper;
  }
}
