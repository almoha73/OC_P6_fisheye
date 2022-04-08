import "../../styles/style.scss";
import { PhotographerFactory } from "../factories/photographerFactory.js";
import { MediaFactory } from "../factories/mediasFactory";
import { fetchPhotographers, fetchPhotographersMedias} from "../pages/api.js";
import { LightboxFactory } from "../factories/lightbox";


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
        
    }
                   
}           
// displayMedias()

//// AFFICHAGE  DE LA LIGHTBOX 

async function displayLightbox(){ 
    await displayMedias();
    const dataMedia = await fetchPhotographersMedias();
   console.log(dataMedia);
   const mediaLightbox = Array.from(document.querySelectorAll('.media'));
    console.log(mediaLightbox);
   for(let media of dataMedia){
    const mediaId = media.id; 
    console.log(mediaId);

         for(let med of mediaLightbox){
             console.log(med);
             console.log(med.nodeName);
             console.log(med.id);
            if(mediaId == med.id){
                med.addEventListener('click', () => {
                    const lightboxDisplay = new LightboxFactory(med, media);
                    lightboxDisplay.getLightbox();
                    console.log(lightboxDisplay);
                })
            }
            
         }
   }
   
}
              
   
displayLightbox();
