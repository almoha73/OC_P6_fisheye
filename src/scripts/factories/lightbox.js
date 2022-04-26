import { fetchPhotographersMedias } from "../pages/api";
import { displayMedias } from "../pages/photographer";
import { Lightboximage } from "../factories/lightboxImage";
import { Lightboxvideo } from "../factories/lightboxVideo";
import { MediaFactory } from "./mediasFactory";

export class Lightbox {
  static init() {
    const links = Array.from(document.querySelectorAll(".media"));
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const body= document.querySelector('body');
    for (let i = 0; i < links.length; i++) {
      let newIndex = i;
      links[i].onclick = () => {
        lightboxDisplay() 
      }

      links[i].onkeydown = (e) => {
        if(e.key === "Enter"){
          e.preventDefault()
          lightboxDisplay()
          
        }
      }
        function lightboxDisplay(){
           //AFFICHAGE DU WRAPPER DE LA LIGHTBOX SANS IMAGES/VIDEO
        const newLightbox = new Lightbox();
        newLightbox.buildDom();
        
        //AFFICHAGE DE LA LIGHTBOX AVEC IMAGES ET/OU VIDEO
        const lightboxContainer = document.querySelector(".lightbox_container");
        const lightBoxRemove = lightboxContainer.firstChild.remove();

        let selectedImgUrl;
        const newLightboxPreview = function () {
          newLightbox.preview(selectedImgUrl, links[newIndex]);
        };
        
        newLightboxPreview();
        header.style.display = 'none'
        main.style.display = 'none'

        //NEXT AU CLIC SOURIS
        const next = document.querySelector(".next");

        next.addEventListener("click", (e) => {
          e.preventDefault();
          lightBoxRemove;

          if (newIndex < links.length - 1) {
            newIndex++;
            newLightboxPreview();
          } else {
            newIndex = 0;
            newLightboxPreview();
          }
          
        });
        //PREVIOUS AU CLIC SOURIS
        const previous = document.querySelector(".previous");

        previous.addEventListener("click", (e) => {
          e.preventDefault();
          lightBoxRemove;
          
          if (newIndex > 0) {
            newIndex--;
            newLightboxPreview();
          } else {
            newIndex = links.length - 1;
            newLightboxPreview();
          }
        });

        //FONCTION CLOSE
        const close = document.querySelector('.close-lightbox');
        const closeLightbox = function(){
          const header = document.querySelector('header');
          const main = document.querySelector('main');
          body.firstChild.remove()
          header.style.display = 'block'
          main.style.display = 'block'
          newIndex = i;
          links[newIndex].focus()
        }
        //CLOSE AU CLIC
        close.addEventListener('click', () => {
          
          closeLightbox();
          
        })

        //// FONCTION FOCUS EN BOUCLE EMPRISONNE DANS LA LIGHTBOX  

        const focusInModal = function(e){
          e.preventDefault()
          const wrapper = document.querySelector('.wrapper');
          const focusablesLightbox = Array.from(document.querySelectorAll('.modalLightbox'));
          let index = focusablesLightbox.findIndex(elt => elt === wrapper.querySelector(':focus'));
      
          if(e.shiftKey === true){
            index--
          }else {
            index++
          }
          
          if(index >= focusablesLightbox.length){
            index = 0;
          }
            if(index < 0){
            index = focusablesLightbox.length - 1;
          }
          
          focusablesLightbox[index].focus()
        }
        
          
        //NEXT / PREVIOUS / ECHAP AUX TOUCHES CLAVIER
       
        window.addEventListener("keydown", (e) => {
          const wrapper = document.querySelector('.wrapper');
            if (e.key === 'ArrowRight') {
              e.preventDefault();
              lightBoxRemove;
              
              if (newIndex < links.length - 1) {
                newIndex++;
                newLightboxPreview();
                
              } else {
                newIndex = 0;
                newLightboxPreview();
                
              }
            } else if (e.key === 'ArrowLeft') {
              e.preventDefault();
              lightBoxRemove;
              
              if (newIndex > 0) {
                newIndex--;
                newLightboxPreview();
                
              } else {
                newIndex = links.length - 1;
                newLightboxPreview();
                
              }
            } else if(e.key === 'Escape'){
              e.preventDefault()
              
              closeLightbox();
              
            }
            else if(e.key === 'Tab' && wrapper){
              e.preventDefault()
              focusInModal(e);
            }  
         
        });

        
       }  
    
    }
  }

  constructor() {
    this.element = this.buildDom();
    //document.body.appendChild(this.element);
    document.body.prepend(this.element);
    
  }

  buildDom() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
        wrapper.innerHTML = `
          <div class="wrapper-content">
          <div class="bground"></div>
          <div class="wrapper-left">
            <button class="previous modalLightbox" tabindex="0">
              <i class="fas fa-solid fa-angle-left"></i>
            </button>
          </div>
          <div class="lightbox_container">
            
          </div>
          <div class="wrapper-right">
            <button class="next modalLightbox" tabindex="0">
              <i class="fas fa-solid fa-angle-right"></i>
            </button>
            <button class="close-lightbox modalLightbox" tabindex="0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
            </button>
          </div>
          </div>
          
      `;


    return wrapper;
  }

  preview(url, index) {
    let selectedImgUrl = url;
    url = index.getAttribute("src");
    // console.log(links[newIndex].nextElementSibling.nextElementSibling.firstChild.nextElementSibling.innerText);
    if (index.nodeName === "IMG") {
      const lightboxImage = new Lightboximage(
        url,
        index.nextElementSibling.firstChild.nextElementSibling.innerText
      );
      lightboxImage.buildDom();
    } else if (index.nodeName === "VIDEO") {
      const lightboxVideo = new Lightboxvideo(
        url,
        index.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.innerText
      );
      lightboxVideo.buildDom();
    }
  }

  
}
