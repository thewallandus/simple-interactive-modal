let overlay = document.getElementById("overlay");
let openModal = document.getElementById("open-modal");
let closeModal = document.getElementById("close-modal")

openModal.addEventListener("click", changeDisplay)
closeModal.addEventListener("click", initialDisplay)

function changeDisplay() {
    overlay.style.display = "block"
}

function initialDisplay() {
    overlay.style.display = "none"
}

