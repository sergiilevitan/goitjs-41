const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.js-backdrop');

openModalBtn.addEventListener('click', onOpenModal);





function onOpenModal() {
    document.body.classList.add('show-modal');
    window.addEventListener('keydown', onEscKeyPres) 
}

closeModalBtn.addEventListener('click', onCloseModal);

function onCloseModal() {
    document.body.classList.remove('show-modal');
    window.removeEventListener('keydown', onEscKeyPres) 
}


backdrop.addEventListener('click', onBackdropClick)

function onBackdropClick(event) {
    console.log(event.currentTarget);
    console.log(event.target);

    if (event.currentTarget === event.target) {
        onCloseModal()
    }

}

function onEscKeyPres(evt) {
    if (evt.code === 'Escape') {
        onCloseModal()
    }
}