
import "../../styles/style.scss";
import { PhotographerFactory } from "../factories/photographerFactory";
import {fetchPhotographers} from '../pages/api'




init();

async function init(){
  const articles = await fetchPhotographers();
  articles.forEach(article => {
    console.log(article);
   displayPhotographers(article); 
   
  });  
}
 
 function displayPhotographers(article){
    const photographersCards = new PhotographerFactory(article);
    photographersCards.getUserCardDom();
}




  
