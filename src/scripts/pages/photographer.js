import "../../styles/style.scss";
import { PhotographerFactory } from "../factories/photographerFactory.js";
import { MediaFactory } from "../factories/mediasFactory";
import { fetchPhotographers, fetchPhotographersMedias} from "../pages/api.js";
import { Lightbox } from "../factories/lightbox";
//import { likes } from "../utils/likes";


export function getPhotographerId(){
    return new URL(location.href).searchParams.get('index');
}

///AFFICHAGE DU HEADER SUR LA PAGE PHOTOGRAPHE
async function displayPhotographerHeader (){
    const articleId = getPhotographerId();
    
    const articles = await fetchPhotographers();
    console.log(articles);
    for(let article of articles){
        if(article.id == articleId){
            const headerPhotographer = new PhotographerFactory(article);
            headerPhotographer.getUserSpecific();
        }
    }  
}
displayPhotographerHeader();


///AFFICHAGE DES MEDIAS CORRESPONDANT A CHAQUE PHOTOGRAPHE
export async function displayMedias(){
    
    const dataMedia = await fetchPhotographersMedias();
    console.log(dataMedia);
    const mediaId = getPhotographerId(); 
    console.log(mediaId);
    for(let media of dataMedia){
        if(media.photographerId == mediaId){
                const mediaDisplay = new MediaFactory(media);
                 mediaDisplay.getMedias();
            } 

            function likes (){
                const likeCount = document.querySelectorAll('.like-count')
                console.log(likeCount);
                const likeButton = document.querySelectorAll('.like-button');
                console.log(likeButton);
                
                for(let i = 0; i < likeButton.length; i++){
                    console.log(likeButton[i]);
                    console.log(likeCount[i]);
                    likeCount[i].innerHTML = likeCount[i].getAttribute('data-target')
                    let clicked = false;
                    likeButton[i].addEventListener('click', () => {
                        
                        if(!clicked){
                            clicked = true;
                            likeButton[i].innerHTML = `<i class="fas fa-solid fa-heart"></i>`;
                            const target = +likeCount[i].getAttribute('data-target');
                            console.log(target);
                            likeCount[i].innerHTML = target + 1
                        }else{
                            clicked = false;
                            likeButton[i].innerHTML = `<i class="fas fa-regular fa-heart"></i>`
                        }
                    })
                }
                
            }
            likes()
        
    }

    
                   
}           


//// AFFICHAGE  DE LA LIGHTBOX 

