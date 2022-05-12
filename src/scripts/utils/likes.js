/// GESTION DES LIKES
export function likes() {
  const likeCount = document.querySelectorAll(".like-count");
  const likeButton = document.querySelectorAll(".like-button");
  const likeTotal = document.querySelector(".like-total-count");
  let sum = 0;
  //incrémentation
  for (let i = 0; i < likeButton.length; i++) {
    const target = +likeCount[i].getAttribute("data-target");
    sum += +likeCount[i].getAttribute("data-target");
    likeCount[i].innerHTML = likeCount[i].getAttribute("data-target");
    likeTotal.innerHTML = sum + `<i class="fas fa-solid fa-heart"></i>`;
    let clicked = false;

    function evtLike() {
      if (!clicked) {
        clicked = true;
        likeButton[i].innerHTML = `<i class="fas fa-solid fa-heart"></i>`;
        likeButton[i].setAttribute('aria-label', 'liké');
        //total de likes sous chaque photo actualisé à chaque clic
        likeCount[i].innerText = target + 1;
        //total de likes général actualisé sur la page
        likeTotal.innerHTML =
          1 + sum++ + `<i class="fas fa-solid fa-heart"></i>`;
      } else {
        //DISLIKE
        clicked = false;
        likeButton[i].innerHTML = `<i class="far fa-regular fa-heart"></i>`;
        likeButton[i].setAttribute('aria-label', 'disliké');
        //total de likes sous chaque photo actualisé à chaque dislike
        likeCount[i].innerText = 1 + target - 1;
        //total de likes général actualisé sur la page
        likeTotal.innerHTML =
          -1 + sum-- + `<i class="fas fa-solid fa-heart"></i>`;
      }
    }

    //EVENEMENT AU CLIC SUR LE BOUTON LIKE
    likeButton[i].addEventListener("click", () => {
      evtLike();
    });

    //EVENEMENT TOUCHE ENTREE SUR LE BOUTON LIKE

    likeButton[i].addEventListener("keydown", (e) => {
      console.log(e);
      if (e.key === "Enter") {
        evtLike();
      }
    });
  }
}
