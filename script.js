var modal;

// uses primitive hard-coded ids to search for modals
function openModal(id) {
    modal = document.getElementById(id);
    toggleModal();
}

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal && modal.classList.contains("show-modal") == true) { // why is JS "true" lowercase???
        toggleModal();
    }
}

window.addEventListener("click", windowOnClick);