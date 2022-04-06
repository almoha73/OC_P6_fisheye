const modal = document.getElementById("contact_modal");
const contact = document.querySelector(".contact");
	

    contact.addEventListener('click', () => {
        
        modal.style.display = "block";
    })

    const closeModal = document.querySelector(".close-modal");
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    })
    

