import { displayPhotographerHeader } from "../pages/photographer";

export  async function contactForm(){
     await displayPhotographerHeader();
    
    //Variables du formulaire
    const formModal = document.querySelector("#contact_modal")
    console.log(formModal);
    const contactBtn = document.querySelector("button.contact");
	console.log(contactBtn);
    const closeModal = document.querySelector(".close-modal");
    
    //ouverture du formulaire
    contactBtn.addEventListener('click', () => {
        formModal.style.display = 'inline-block'
    })

    //fermeture du formulaire
    closeModal.addEventListener('click', () => {
        formModal.style.display = 'none'
    })

}

   

