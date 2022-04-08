import { displayMedias } from "../pages/photographer";
 
export class LightboxFactory {
  constructor(med, dataMedia){
      if(med.nodeName === 'IMG'){
          return  new LightboxImage(dataMedia)
              
      }else if (med.nodeName === 'VIDEO'){
          return new LightboxVideo(dataMedia)
      };

      
     
  }
} 
 


    
export class Lightbox{
    constructor(dataMedia){
      this.photographerId = dataMedia.photographerId;
        this.title = dataMedia.title;
        this.id = dataMedia.id;
       
    }
}

class LightboxImage extends Lightbox {
  constructor(dataMedia){
    super(dataMedia);
    this.image = dataMedia.image;
  }

  getLightbox(){
        const  wrapper = document.querySelector('.wrapper');
        if(wrapper.classList.contains('hidden')){
          wrapper.classList.add('visible')
        }else if(wrapper.classList.contains('vivible')){
            wrapper.classList.add('hidden')
        }
    
    wrapper.innerHTML += `
    <div class="bground"></div>
    <div class="wrapper-left">
      <button class="previous">
        <i class="fas fa-solid fa-angle-left"></i>
      </button>
    </div>
    <div class="lightbox">
      <div>
        <img id="${this.id}" src="assets/photographers/${this.photographerId}/${this.image}" alt="">
        <p>${this.title}</p>
      </div>
    </div>
    <div class="wrapper-right">
      <button class="next">
        <i class="fas fa-solid fa-angle-right"></i>
      </button>
      <button class="close-lightbox">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
      </button>
    </d
    `
    
}
}

class LightboxVideo extends Lightbox {
  constructor(dataMedia){
    super(dataMedia);
    this.video = dataMedia.video;
    
}

 getLightbox(){
  const  wrapper = document.querySelector('.wrapper');
        if(wrapper.classList.contains('hidden')){
          wrapper.classList.add('visible')
        }else if(wrapper.classList.contains('vivible')){
            wrapper.classList.add('hidden')
        }
  wrapper.innerHTML += `
  <div class="bground"></div>
  <div class="wrapper-left">
    <button class="previous">
      <i class="fas fa-solid fa-angle-left"></i>
    </button>
  </div>
  <div class="lightbox">
    <div>
    <video id="${this.id} preload="metadata" src="assets/photographers/videos/${this.video}" type="video/mp4" loop></video>
      <p>${this.title}</p>
    </div>
  </div>
  <div class="wrapper-right">
    <button class="next">
      <i class="fas fa-solid fa-angle-right"></i>
    </button>
    <button class="close-lightbox">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
    </button>
  </div>
  `
}
}