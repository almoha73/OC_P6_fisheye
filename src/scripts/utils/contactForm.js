import { fetchPhotographers } from "../pages/api";
import { displayPhotographerHeader } from "../pages/photographer";

export async function contactForm() {
  await displayPhotographerHeader();
  const articles = await fetchPhotographers();
  //Variables du formulaire
  const formModal = document.querySelector("#contact_modal"); //formulaire

  const contactBtn = document.querySelector("button.contact"); //ouverture

  const closeModal = document.querySelector(".close-modal"); //fermeture
  let inputField = document.querySelectorAll("input.input-control"); // inputs

  const sendButton = document.querySelector(".send_button"); //bouton envoyer
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  //ouverture du formulaire
  contactBtn.addEventListener("click", (e) => {
    formModal.style.display = "inline-block";
    formModal.setAttribute("aria-modal", true);
    header.style.display = 'none'
    main.style.display = 'none'
    body.style.backgroundColor = '#901C1C';
    closeModal.focus();
    focusBlur();
  });

  //fermeture du formulaire
  formModal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      body.style.backgroundColor = 'transparent';
      setTimeout(() => {
        
        formModal.style.display = "none";
      header.style.display = 'block'
        main.style.display = 'block'
        
        resetField();
      }, 1000);
    }
    
  });
  closeModal.addEventListener("click", (e) => {
    body.style.backgroundColor = 'transparent';
    setTimeout(() => {
      
      formModal.style.display = "none";
    header.style.display = 'block'
      main.style.display = 'block'
      
      resetField();
    }, 1000);
    
  });

  // Fonction RESET après envoi du formulaire
  function resetField() {
    for (let i = 0; i < inputField.length; i++) {
      inputField[i].value = "";
      inputField[i].classList.remove("redBorder");
      inputField[i].classList.remove("greenBorder");
      inputField[i].nextElementSibling.innerHTML = "";
    }
    contactBtn.focus();
  }

  function focusBlur() {
    for (let i = 0; i < inputField.length; i++) {
      inputField[i].addEventListener("focus", addColor);
      inputField[i].addEventListener("blur", removeColor);

      function addColor() {
        inputField[i].classList.add("blueBorder");
      }

      function removeColor() {
        inputField[i].classList.remove("blueBorder");
      }
    }
  }

  // AFFICHAGE DYNAMIQUE DU NOM --> photographer.js

  //VALIDATION DES CHAMPS

  function valideForm() {
    let error = 0;
    for (let i = 0; i < inputField.length; i++) {
      const type = inputField[i].getAttribute("id");
      let paragraphe = inputField[i].nextElementSibling;

      switch (type) {
        case "first":
          if (inputField[i].value === "") {
            error = error + 1;
            inputField[i].classList.remove("blueBorder");
            okMessageRemove(paragraphe, inputField[i]);
            errorMessage(
              paragraphe,
              `Veuillez inscrire votre prénom`,
              inputField[i]
            );
          } else if (
            /^[a-zA-Zéè ]+[\-]?[a-zA-Zéè ]+$/.test(
              inputField[i].value.trim()
            ) &&
            inputField[i].value.length >= 2
          ) {
            inputField[i].classList.remove("blueBorder");
            okMessageRemove(paragraphe, inputField[i]);
            okMessage(paragraphe, `Le prénom est valide`, inputField[i]);
            inputField[i + 1].focus();
            console.log(inputField[i].value);
          } else {
            error = error + 1;
            console.log(error);
            inputField[i].classList.remove("blueBorder");
            okMessageRemove(paragraphe, inputField[i]);
            errorMessage(paragraphe, `Le prénom est invalide`, inputField[i]);
          }

          break;

        case "last":
          if (inputField[i].value === "") {
            okMessageRemove(paragraphe, inputField[i]);
            errorMessage(
              paragraphe,
              `Veuillez renseigner votre nom`,
              inputField[i]
            );
            error = error + 1;
          } else if (
            /^[a-zA-Zéè ]+[\-]?[a-zA-Zéè ]+$/.test(
              inputField[i].value.trim()
            ) &&
            inputField[i].value.length >= 2
          ) {
            inputField[i].classList.remove("blueBorder");
            okMessageRemove(paragraphe, inputField[i]);
            okMessage(paragraphe, `Nom valide`, inputField[i]);
            inputField[i + 1].focus();
            console.log(inputField[i].value);
          } else {
            inputField[i].classList.remove("blueBorder");
            okMessageRemove(paragraphe, inputField[i]);
            errorMessage(paragraphe, `Nom invalide`, inputField[i]);
            error = error + 1;
          }

          break;

        case "mail":
          if (inputField[i].value === "") {
            okMessageRemove(paragraphe, inputField[i]);
            errorMessage(paragraphe, `Le mail est obligatoire`, inputField[i]);
            error = error + 1;
          } else if (
            /^\w+([\.-]?\w+)*@\w+([\-]?\w+)*\.(\w{2,3})+$/.test(
              inputField[i].value.trim()
            )
          ) {
            inputField[i].classList.remove("blueBorder");
            okMessageRemove(paragraphe, inputField[i]);
            okMessage(paragraphe, `Mail valide`, inputField[i]);
            inputField[i + 1].focus();
            console.log(inputField[i].value);
          } else {
            inputField[i].classList.remove("blueBorder");
            okMessageRemove(paragraphe, inputField[i]);
            errorMessage(paragraphe, `Le mail est invalide`, inputField[i]);
            error = error + 1;
          }

          break;

        case "text":
          if (inputField[i].value === "") {
            inputField[i].classList.remove("blueBorder");
            errorMessage(paragraphe, `Quel est votre message ?`, inputField[i]);
            error = error + 1;
          } else if (inputField[i].value.trim()) {
            inputField[i].classList.remove("blueBorder");
            okMessageRemove(paragraphe, inputField[i]);
            okMessage(paragraphe, `Merci !`, inputField[i]);
            //sendButton.focus();
            console.log(inputField[i].value);
          }
      }
    }
    return error <= 0;
  }

  function errorMessage(nodeElt, message, input) {
    nodeElt.innerHTML = message;
    nodeElt.classList.add("red");
    input.classList.add("redBorder");
  }

  function okMessage(nodeElt, message, input) {
    nodeElt.innerHTML = message;
    nodeElt.classList.add("green");
    input.classList.add("greenBorder");
  }

  function okMessageRemove(nodeElt, input) {
    nodeElt.classList.remove("green");
    input.classList.remove("greenBorder");
  }

  formModal.addEventListener("submit", (e) => {
    e.preventDefault();
    if (valideForm()) {
      
      setTimeout(() => {
        formModal.style.display = "none";
      header.style.display = 'block'
      main.style.display = 'block'
      body.style.backgroundColor = 'transparent';
        resetField();
      }, 1000);
      
    }
   
  });
}
