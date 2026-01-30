var modal;
function openModal(id) {
    modal = document.getElementById(id);
    toggleModal();
}

function toggleModal() {
    modal.classList.toggle("show-modal");
    console.log("switch");
}

function windowOnClick(event) {
    if (event.target === modal && modal.classList.contains("show-modal") == true) {
        toggleModal();
    }
}

window.addEventListener("click", windowOnClick);