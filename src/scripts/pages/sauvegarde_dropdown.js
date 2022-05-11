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
   console.log(e);
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
  for(let i = 0; i < optionsList.length; i++){
    optionsContainer.classList.remove("active");
            function selectOptionDisplay(){
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
        })

        window.addEventListener("keydown", (e) => {
        let index = optionsList.findIndex(
            (elt) => elt === optionsContainer.querySelector(":focus")
        );
        console.log(index);
        if(e.key === 'Enter' && optionsContainer.style.opacity === "1"){
            //e.preventDefault()
            selectOptionDisplay();
        }
    
        });
    }
  
    



<nav>
        <label for="tri">Trier par</label>
        <div id="tri" aria-selected="false" aria-label="tri des medias" class="select-box" >
            <div class="options-container">
              <hr>
              <div class="option" tabindex="0">
                <input type="radio" class="radio" name="category" id="date">
                <label for="date" class="optionsDropdown">Date</label>
              </div>
              <hr>
              <div class="option" tabindex="0">
                <input type="radio" class="radio" name="category" id="titre">
                <label for="titre" class="optionsDropdown">Titre</label>
              </div>
              <hr>
              <div class="option" tabindex="0">
                <input type="radio" class="radio" name="category" id="popularite">
                <label for="popularite" class="optionsDropdown">Popularité</label>
              </div>
            </div>
            <div tabindex="0" class="selected optionsDropdown">
              Selection
            </div>  
            
            
        </div>
      </nav>