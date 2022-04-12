import { fetchPhotographersMedias } from "../pages/api";
import { displayMedias } from "../pages/photographer";
 

  class Lightbox {

  static async init () {
    const dataMedia = await fetchPhotographersMedias();
    await displayMedias();

    const links = Array.from(document.querySelectorAll('.media'))
    console.log(links);

    const linksGallery = links.map(link => link.getAttribute('src'));
    console.log(linksGallery);

    const linksImage = Array.from(document.querySelectorAll('img.media'));
    console.log(linksImage);
    const linksImageGallery = linksImage.map(linkImg => linkImg.getAttribute('src'));
    console.log(linksImageGallery);

    const linksVideo = Array.from(document.querySelectorAll('video.media'));
    console.log(linksVideo);
    const linksVideoGallery = linksVideo.map(linkVid => linkVid.getAttribute('src'));
    console.log(linksVideoGallery);

    const title = Array.from(document.querySelectorAll('.title'));
    console.log(title);

    const linkTitle = title.map(linkText => linkText.innerText);
    console.log(linkTitle);

    links.forEach(link => link.addEventListener('click', e => {
      e.preventDefault();
      console.log(e.target);
      // console.log(e.target.nextElementSibling.firstChild.nextElementSibling.innerText);
      
      if(e.target.nodeName === 'IMG'){
                  return  new Lightboximage(e.currentTarget.getAttribute(`src`), linksImageGallery, e.target.nextElementSibling.firstChild.nextElementSibling.innerText)
                      
              }else if (e.target.nodeName === 'VIDEO'){
                  return new Lightboxvideo(e.currentTarget.getAttribute('src'), linksVideoGallery, e.target.nextElementSibling.firstChild.nextElementSibling.innerText)
              };
     

    }))
  }

  

  // loadImage(url) {
  //   this.url = null;
  //   const image = new Image();
  //   const text = this.element.createElement('p');
  //   const container = this.element.querySelector('.lightbox_container');
    
  //   container.innerHTML = '';
  //   text.innerHTML = '';
  //   image.onload = () => {
  //     container.appendChild(image);
  //     container.appendChild(text)
  //     this.url = url;
  //     this.title = title;
  //   }
  //   image.src = url;
  //   text.innerText = title;
  // }
}   

 Lightbox.init();

 class Lightboximage {

    constructor(url, images, title) {
   
      this.element = this.buildDom(url, title);
      this.images = images;
      this.title = title;
      
      document.body.appendChild(this.element);
      
    }

    buildDom(url, title){
      const wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');
      wrapper.innerHTML = `
          <div class="bground"></div>
          <div class="wrapper-left">
            <button class="previous">
              <i class="fas fa-solid fa-angle-left"></i>
            </button>
          </div>
          <div class="lightbox_container">
            <div>
              <img src="${url}" alt="">
              <p>${title}</p>
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
      return wrapper;
    }
 }

 class Lightboxvideo {

  constructor(url, images, title) {
 
    this.element = this.buildDom(url, title);
    this.images = images;
    this.title = title;
    
    document.body.appendChild(this.element);
    
  }

  buildDom(url, title){
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.innerHTML = `
        <div class="bground"></div>
        <div class="wrapper-left">
          <button class="previous">
            <i class="fas fa-solid fa-angle-left"></i>
          </button>
        </div>
        <div class="lightbox_container">
          <div>
            <video src="${url}" alt="" controls>
            <p>${title}</p>
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
    return wrapper;
  }
}