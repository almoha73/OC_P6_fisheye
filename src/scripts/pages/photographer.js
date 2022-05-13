import "../../styles/style.scss";
import { PhotographerFactory } from "../factories/photographerFactory.js";
import { MediaFactory } from "../factories/mediasFactory";
import { fetchPhotographers, fetchPhotographersMedias } from "../pages/api.js";
import { contactForm } from "../utils/contactForm";
import { Lightbox } from "./Lightbox";
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

//move()

///AFFICHAGE DES MEDIAS CORRESPONDANT A CHAQUE PHOTOGRAPHE ----> AFFICHAGE PAR DEFAUT
export async function displayMedias() {
  const dataMedia = await fetchPhotographersMedias();
  const mediaId = getPhotographerId();
  const selected = document.querySelector(".selected");
  const selectBox = document.getElementById("tri");
  const optionsContainer = document.querySelector(".options-container");
  const optionsList = Array.from(document.querySelectorAll(".option"));

  let mediaArray = [];

  // APPARITION DES MEDIAS PAR ID PHOTOGRAPHE PAR DEFAUT (date)
  for (let media of dataMedia) {
    if (media.photographerId == mediaId) {
      mediaArray.push(media);
      new MediaFactory(media).getMedias();
      likes();
    }
  }
  Lightbox.init();

  //TOGGLE OUVERTURE FERMETURE DU MENU DROPDOWN AU CLIC
  selectBox.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    if (optionsContainer.classList.contains("active")) {
      selected.setAttribute("aria-expanded", true);
      selected.setAttribute("aria-activedescendant", true);
      let i = 0;
      optionsContainer.children[1].focus();
      for (let option of optionsList) {
        
        //i += 1
        option.tabIndex = i;
      }
      selected.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          optionsContainer.children[0].focus();
        }
      });
    } else {
      selected.setAttribute("aria-expanded", false);
      selected.setAttribute("aria-activedescendant", false);
      selected.innerHTML = "Selection";
      for (let option of optionsList) {
        option.tabIndex = -1;
      }
    }
  });
  //TOGGLE OUVERTURE FERMETURE AU CLAVIER

  selectBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      selectBox.click();
    }
    if (e.key === "Escape") {
      optionsContainer.classList.remove("active");
    }
  });

  // LORSQUE L'ON CLIQUE SUR UNE OPTION DU MENU DROPDOWN ......
  for (let i = 0; i < optionsList.length; i++) {
    optionsContainer.classList.remove("active");
    function selectOptionDisplay() {
      selected.innerHTML = optionsList[i].querySelector("label").innerHTML;

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
    optionsList[i].addEventListener("click", () => {
      selectOptionDisplay();
    });

    optionsList[i].addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
        selectOptionDisplay();
      }
      // if(e.key === "Escape"){
      //   optionsContainer.classList.remove("active");

      // }
    });
  }
}

displayMedias();
