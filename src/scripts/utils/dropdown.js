// dropdown menu

export function dropdown (){
    const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const label = document.querySelectorAll('.option label')
const optionsList = document.querySelectorAll('.option');
const body = document.querySelector('body');

selected.addEventListener('click', () => {
    optionsContainer.classList.toggle('active');
});



optionsList.forEach(elt => {
    elt.addEventListener("click", () => {
        selected.innerHTML = elt.querySelector('label').innerHTML;

        optionsContainer.classList.remove('active');
    })
});
}
dropdown();

