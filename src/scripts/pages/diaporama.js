import { fetchPhotographersMedias } from "../pages/api";
import { displayMedias } from "../pages/photographer";
import { Lightboximage } from "../factories/lightboxImage";
import { Lightboxvideo } from "../factories/lightboxVideo";
//import { MediaFactory } from "./mediasFactory";

export class Lightbox {
  static init() {
    const links = Array.from(document.querySelectorAll(".media"));
    const tabLinks = links.map((media) => media.getAttribute("src")); //this.tabLinks
    const titles = Array.from(document.querySelectorAll(".title"));
    console.log(titles);
    const title = titles.map((elt) => elt.innerText);
    console.log(title);
    for (let i = 0; i < links.length; i++) {
      const link = links[i]; //this.link
      const titlePos = title[i]; //this.titlePos
      const linkUrl = link.getAttribute("src"); //this.linkUrl

      console.log(linkUrl);
      link.onclick = (e) => {
        const light = new Lightbox(linkUrl, tabLinks, link, title, titlePos);
        light.preview();
        const next = document.querySelector(".next");
        next.focus();
      };

      link.onkeydown = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const light = new Lightbox(linkUrl, tabLinks, link, title, titlePos);
          light.preview();
          const next = document.querySelector(".next");
          next.focus();
        }
      };
    }
  }

  

  //AFFICHAGE DE LA LIGHTBOX AVEC IMAGES ET/OU VIDEO
  preview() {
    if (this.link.nodeName === "IMG") {
      console.log(this.link.nodeName);
      const lightboxImage = new Lightboximage(this.linkUrl, this.titlePos);
      lightboxImage.buildDom();
    } else if (this.link.nodeName === "VIDEO") {
      const lightboxVideo = new Lightboxvideo(this.linkUrl, this.titlePos);

      lightboxVideo.buildDom();
    }
  }

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
    }, 700);
  }

  next() {
    this.lightBoxRemove;
    let currentMediaPosition = this.tabLinks.findIndex(
      (link) => link == this.linkUrl
    );
    console.log(currentMediaPosition);
    let currentMediaTitle = this.title.findIndex(
      (link) => link == this.titlePos
    );
    console.log(currentMediaTitle);
    if (currentMediaPosition < this.links.length - 1) {
      currentMediaPosition++;
      currentMediaTitle++;
      this.linkUrl = this.tabLinks[currentMediaPosition];
      this.titlePos = this.title[currentMediaTitle];
      this.preview();
    } else {
      currentMediaPosition = 0;
      currentMediaTitle = 0;
      this.linkUrl = this.tabLinks[currentMediaPosition];
      this.titlePos = this.title[currentMediaTitle];
      this.preview();
    }
  }

  previous() {
    this.lightBoxRemove;
    let currentMediaPosition = this.tabLinks.findIndex(
      (mediaLink) => mediaLink == this.linkUrl
    );
    console.log(currentMediaPosition);
    let currentMediaTitle = this.title.findIndex(
      (link) => link == this.titlePos
    );
    console.log(currentMediaTitle);
    if (currentMediaPosition > 0) {
      currentMediaPosition--;
      currentMediaTitle--;
      this.linkUrl = this.tabLinks[currentMediaPosition];
      this.titlePos = this.title[currentMediaTitle];
      this.preview();
    } else {
      currentMediaPosition = this.links.length - 1;
      currentMediaTitle = this.title.length - 1;
      this.linkUrl = this.tabLinks[currentMediaPosition];
      this.titlePos = this.title[currentMediaTitle];
      this.preview();
    }
  }

  keyboardEvent() {
    window.addEventListener("keydown", (e) => {
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
        //this.focusInModal(e)
      }
    });
  }

  constructor(linkUrl, tabLinks, link, title, titlePos) {
    this.linkUrl = linkUrl;
    console.log(this.linkUrl);
    this.tabLinks = tabLinks;
    console.log(this.tabLinks);
    this.link = link;
    console.log(this.link);
    this.title = title;
    this.titlePos = titlePos;
    console.log(this.titlePos);
    this.links = Array.from(document.querySelectorAll(".media"));

    this.element = this.buildDom();
    console.log(this.element);
    this.body = document.querySelector("body");
    this.body.prepend(this.element);
    this.lightboxContainer = document.querySelector(".lightbox_container");
    this.lightBoxRemove = this.lightboxContainer.firstChild.remove();
    //document.body.appendChild(this.element);

    this.closeIcon = document.querySelector(".close-lightbox");
    this.rightArrow = document.querySelector(".next");
    this.leftArrow = document.querySelector(".previous");
    this.clicEvent();
    this.keyboardEvent();
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
