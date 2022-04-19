// import { fetchPhotographersMedias } from "../pages/api";
// import { getPhotographerId } from "../pages/photographer";

// export async function dropdown (){
//     const selected = document.querySelector(".selected");
//     const optionsContainer = document.querySelector(".options-container");
//     const label = document.querySelectorAll('.option label')
//     const optionsList = document.querySelectorAll('.option');
//     const body = document.querySelector('body');
//     const dataMedia = await fetchPhotographersMedias();
//     console.log(dataMedia);
//     const mediaId = getPhotographerId(); 
//     //console.log(mediaId);


//     selected.addEventListener('click', () => {
//         optionsContainer.classList.toggle('active');
//     });



//     optionsList.forEach(elt => {
//         elt.addEventListener("click", () => {
//             selected.innerHTML = elt.querySelector('label').innerHTML;

//             optionsContainer.classList.remove('active');
//             const choice = selected.innerHTML;

//             for(let media of dataMedia){
//                 if(media.photographerId == mediaId){

//                     switch (choice) {
//                         case "Popularité" :
//                                 dataMedia.sort((a, b) => {
//                                     return b.likes - a.likes;
//                                 });
//                             break;
//                         case "Date" :
//                                 dataMedia.sort((a, b) => {
//                                     return b.date - a.date;
//                                 });
//                             break;
//                         case "Titre" :
//                                 dataMedia.sort((a, b) => {
//                                     return a.title.localeCompare(b.title);
//                                 });
//                             break;
//                     }
                        
                        
//                     } 
//             }
            
//         })
//     });
// }


