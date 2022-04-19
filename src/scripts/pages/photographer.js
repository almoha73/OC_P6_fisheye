import "../../styles/style.scss";
import { PhotographerFactory } from "../factories/photographerFactory.js";
import { MediaFactory } from "../factories/mediasFactory";
import { fetchPhotographers, fetchPhotographersMedias} from "../pages/api.js";
import { contactForm } from "../utils/contactForm";
//import { dropdown } from "../utils/dropdown";
import { Lightbox } from "../factories/lightbox";
//import { move } from "../utils/draggableDiv";

//import { Likes } from "../utils/likes";



export function getPhotographerId(){
    return new URL(location.href).searchParams.get('index');
}

///AFFICHAGE DU HEADER SUR LA PAGE PHOTOGRAPHE
export async function displayPhotographerHeader (){
    const articleId = getPhotographerId();
    
    const articles = await fetchPhotographers();
    //console.log(articles);
    for(let article of articles){
        if(article.id == articleId){
            const headerPhotographer = new PhotographerFactory(article);
            headerPhotographer.getUserSpecific();

            //AFFICHAGE DYNAMIQUE DU PRIX JOURNALIER
            const tarifJour = document.querySelector('.tarif-jour');
            tarifJour.innerHTML = article.price + '€/jour';
            //AFFICHAGE DYNAMIQUE DU NOM DANS LE FORMULAIRE
            const contactName = document.querySelector('.contact-name');
            contactName.innerHTML = article.name;
        }
    }  
}

displayPhotographerHeader();  //AFFICHAGE DU HEADER PERSONNALISE POUR UN PHOTOGRAPHE

contactForm(); //GESTION DU FORMULAIRE 

//move();  //GESTION DU DRAG AND DROP DE LA DIV DU TOTAL DES COEURS

//dropdown();  //ANIMATION DU MENU DROPDOWN

///AFFICHAGE DES MEDIAS CORRESPONDANT A CHAQUE PHOTOGRAPHE
export async function displayMedias(){
    const dataMedia = await fetchPhotographersMedias();
    //console.log(dataMedia);
    const mediaId = getPhotographerId(); 
    //console.log(mediaId);

    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");
    const optionsList = document.querySelectorAll('.option');

        selected.addEventListener('click', () => {
            optionsContainer.classList.toggle('active');
        });

       
        optionsList.forEach(elt => {
            
            elt.addEventListener("click", () => {
                
                selected.innerHTML = elt.querySelector('label').innerHTML;
                optionsContainer.classList.remove('active');
                const gallery = document.querySelector('.gallery');
                gallery.innerHTML = '';
                        
                for(let media of dataMedia){
                    
                    const choice = selected.innerHTML;
                        switch (choice) {
                            case "Popularité" :
                                    dataMedia.sort((a, b) => {
                                        return a.likes - b.likes;
                                    });
                                    
                                break;

                            case "Date" :
                                    dataMedia.sort((a, b) => {
                                        return new Date(b.date) - new Date(a.date);
                                    }); 
                                break;

                            case "Titre" :
                                    dataMedia.sort((a, b) => {
                                        return a.title > b.title ? 1 : -1;
                                    });
                                    
                                break;
                           
                        }
                    if(media.photographerId == mediaId){
                        
                        new MediaFactory(media).getMedias()
                        Lightbox.init()
                          
                    }
                                /// GESTION DES LIKES
                        function likes (){
                            const likeCount = document.querySelectorAll('.like-count')
                            
                            const likeButton = document.querySelectorAll('.like-button');
                            
                            const likeTotal = document.querySelector('.like-total-count');
                            let sum = 0;
                            //incrémentation
                            for(let i = 0; i < likeButton.length; i++){
                                const target = +likeCount[i].getAttribute('data-target');

                                sum += +likeCount[i].getAttribute('data-target');
                            
                                likeCount[i].innerHTML = likeCount[i].getAttribute('data-target')
                                likeTotal.innerHTML = sum + `<i class="fas fa-solid fa-heart"></i>`;
                                let clicked = false;
                                
                                likeButton[i].addEventListener('click', () => {
                                    if(!clicked){//LIKE
                                        clicked = true;
                                        likeButton[i].innerHTML = `<i class="fas fa-solid fa-heart"></i>`;
                                            
                                        //total de likes sous chaque photo actualisé à chaque clic
                                        likeCount[i].innerText = target + 1;
                                        //total de likes général actualisé sur la page
                                        likeTotal.innerHTML = 1 + sum++  + `<i class="fas fa-solid fa-heart"></i>`
                                    
                                    }else{ //DISLIKE
                                        clicked = false;
                                        likeButton[i].innerHTML = `<i class="far fa-regular fa-heart"></i>`
                                        
                                        //total de likes sous chaque photo actualisé à chaque clic
                                        likeCount[i].innerText = 1 + target - 1;
                                        //total de likes général actualisé sur la page
                                        likeTotal.innerHTML =  -1 + sum--  + `<i class="fas fa-solid fa-heart"></i>`
                                    }
                                })
                            }

                            
                            
                        }
                        
                        likes()
                        
                        
    
                }
                
            })
            
            
        });
          
    }                     
    displayMedias()
    
            
    Lightbox.init()    
    

