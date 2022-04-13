import { fetchPhotographersMedias } from "../pages/api";
import { displayMedias } from "../pages/photographer";

class Lightbox {
  static async init() {
    const dataMedia = await fetchPhotographersMedias();
    await displayMedias();

    const links = Array.from(document.querySelectorAll(".media"));
    console.log(links);
    const previewImg = document.querySelector(".media");
    console.log(previewImg.src);

    for (let i = 0; i < links.length; i++) {
      let newIndex = i;

      links[i].onclick = () => {
        const newLightbox = new Lightbox;
        newLightbox.buildDom();
        function preview() {
          let selectedImgUrl = links[newIndex].getAttribute("src");
          console.log(selectedImgUrl);
          console.log(links[newIndex]);
         
          if (links[newIndex].nodeName === "IMG") {
            const lightboxImage = new Lightboximage(
              selectedImgUrl, links[newIndex].nextElementSibling.firstChild.nextElementSibling.innerText);
              lightboxImage.buildDom();

          } else if (links[newIndex].nodeName === "VIDEO") {
            const lightboxVideo = new Lightboxvideo(
              selectedImgUrl, links[newIndex].nextElementSibling.nextElementSibling.firstChild.nextElementSibling.innerText);
              lightboxVideo.buildDom();
          }
         
        }
        preview();

            const lightboxContainer = document.querySelector(".lightbox_container");
            const next = document.querySelectorAll(".next");
            next.forEach(next => next.addEventListener("click", (e) => {
              e.preventDefault();
              lightboxContainer.firstChild.remove();
              console.log(links.length);
              newIndex++;
              console.log(newIndex);
              if(newIndex < links.length - 1){
                newIndex++;
                preview();

              }else{
                newIndex = 0;
                preview()
              }
            
            }))
      }
    }
  }

  constructor() {
    this.element = this.buildDom();
    document.body.appendChild(this.element);
  }

  buildDom() {
    const wrapper = document.createElement("div");

    wrapper.classList.add("wrapper");

    wrapper.innerHTML = `
          <div class="wrapper-content">
          <div class="bground"></div>
          <div class="wrapper-left">
            <button class="previous">
              <i class="fas fa-solid fa-angle-left"></i>
            </button>
          </div>
          <div class="lightbox_container">
            
          </div>
          <div class="wrapper-right">
            <button class="next">
              <i class="fas fa-solid fa-angle-right"></i>
            </button>
            <button class="close-lightbox">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
            </button>
          </div>
          </div>
          
      `;
    wrapper
      .querySelector(".close-lightbox")
      .addEventListener("click", this.close.bind(this));

    // wrapper.querySelector(".next").addEventListener('click', this.next.bind(this));
    return wrapper;
  }

  close(e) {
    e.preventDefault();
    document.body.removeChild(this.element);
  }
}

class Lightboximage {
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
      <img src="${this.url}" alt="">
      <p>${this.title}</p>
    </div>
    `
    

    // wrapper.querySelector(".next").addEventListener('click', this.next.bind(this));
    return lightboxContainer;
  }
}

class Lightboxvideo {
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

Lightbox.init();
