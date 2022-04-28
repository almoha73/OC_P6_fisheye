import "../../styles/style.scss";
import { PhotographerFactory } from "../factories/photographerFactory.js";
import { MediaFactory } from "../factories/mediasFactory";
import { fetchPhotographers, fetchPhotographersMedias } from "../pages/api.js";
import { contactForm } from "../utils/contactForm";
//import { dropdown } from "../utils/dropdown";
import { Lightbox } from "../factories/lightbox";
//import { move } from "../utils/draggableDiv";
import { likes } from "../utils/likes";

export function getPhotographerId() {
  return new URL(location.href).searchParams.get("index");
}

///AFFICHAGE DU HEADER SUR LA PAGE PHOTOGRAPHE
export async function displayPhotographerHeader() {
  const articleId = getPhotographerId();

  const articles = await fetchPhotographers();
  //console.log(articles);
  for (let article of articles) {
    if (article.id == articleId) {
      const headerPhotographer = new PhotographerFactory(article);
      headerPhotographer.getUserSpecific();

      //AFFICHAGE DYNAMIQUE DU PRIX JOURNALIER
      const tarifJour = document.querySelector(".tarif-jour");
      tarifJour.innerHTML = article.price + "€/jour";
      //AFFICHAGE DYNAMIQUE DU NOM DANS LE FORMULAIRE
      const contactName = document.querySelector(".contact-name");
      contactName.innerHTML = article.name;
    }
  }
}

displayPhotographerHeader(); //AFFICHAGE DU HEADER PERSONNALISE POUR UN PHOTOGRAPHE

contactForm(); //GESTION DU FORMULAIRE



///AFFICHAGE DES MEDIAS CORRESPONDANT A CHAQUE PHOTOGRAPHE ----> AFFICHAGE PAR DEFAUT
export async function displayMedias() {
  const dataMedia = await fetchPhotographersMedias();
  const mediaId = getPhotographerId();
  const selected = document.querySelector(".selected");
  const selectBox = document.getElementById("tri");
  const optionsContainer = document.querySelector(".options-container");
  const optionsList = document.querySelectorAll(".option");
  let mediaArray = [];

  // APPARITION DES MEDIAS PAR ID PHOTOGRAPHE PAR DEFAUT (date)
  for (let media of dataMedia) {
    if (media.photographerId == mediaId) {
      mediaArray.push(media);
      new MediaFactory(media).getMedias();
      Lightbox.init();
      likes();
    }
  }
  
  //TOGGLE OUVERTURE FERMETURE DU MENU DROPDOWN AU CLIC
  selectBox.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    if(optionsContainer.classList.contains('active')){
      selectBox.setAttribute('aria-selected', true);
      selected.focus();
      
    }else{
       selectBox.setAttribute('aria-selected', false);
       selected.focus();
    }
    
  });
  //TOGGLE OUVERTURE FERMETURE AU CLAVIER
 selectBox.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
      optionsContainer.classList.toggle("active");
      if(optionsContainer.classList.contains('active')){
        selectBox.setAttribute('aria-selected', true);
        selected.focus();
      }else{
        selectBox.setAttribute('aria-selected', false);
        selected.focus();
      }
      
    }  
  });
  
 

  // LORSQUE L'ON CLIQUE SUR UNE OPTION DU MENU DROPDOWN ......
  optionsList.forEach((elt) => {

    function selectOptionDisplay(){
      selected.innerHTML = elt.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
      const gallery = document.querySelector(".gallery");
      gallery.innerHTML = ""; //ON VIDE LA GALERIE
      // TRI EN FONCTION DE L'ELEMENT CHOISI (Popularité, Date ou Titre)
      
        const choice = selected.innerHTML;

        switch (choice) {
          case "Popularité":
            mediaArray.sort((a, b) => {
              return b.likes - a.likes;
            });

            break;

          case "Date":
            mediaArray.sort((a, b) => {
              return new Date(b.date) - new Date(a.date);
            });
            break;

          case "Titre":
            mediaArray.sort((a, b) => {
              return a.title > b.title ? 1 : -1;
            });

            break;
        }

         //LANCEMENT DE L'AFFICHAGE UNE FOIS LE TRI EFFECTUE
         for (let media of mediaArray) { 
         if (media.photographerId == mediaId) {
          new MediaFactory(media).getMedias();
          likes();
          Lightbox.init();
        }
      }
    }
    elt.addEventListener("click", () => {
      selectOptionDisplay(); 
    })
    elt.addEventListener("keydown", (e) => {
      if(e.key === 'Enter'){
        selectOptionDisplay();
      }
    })
    
  });
}

displayMedias();


        

       