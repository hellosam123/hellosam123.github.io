var closeButton = document.querySelector(".close-button");

function toggleModal(id) {
    var modal = document.getElementById(id);
    modal.style.visibility = 'visible';
    console.log(modal);
    console.log(modal.style.visibility);
}

closeButton.addEventListener("click", toggleModal);