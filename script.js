var closeButton = document.querySelector(".close-button");

function toggleModal(id) {
    var modal = document.getElementById(id);
    modal.style.visiblity = 'visible';
    console.log(modal)
    console.log(modal.style.visibility)
}

closeButton.addEventListener("click", toggleModal);