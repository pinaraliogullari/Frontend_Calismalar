
let buttonDemoModal = document.getElementById("button-demo-modal");
let modalHolder = document.querySelector(".modal-holder");
let mainModalClose = document.querySelector(".main-modal-close");
let buttonClose = document.getElementById("button-close");


buttonDemoModal.addEventListener("click", function () {
    modalHolder.classList.remove("main-modal-none");
});


mainModalClose.addEventListener("click", Close);
buttonClose.addEventListener("click", Close);
modalHolder.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal-holder")) {
        Close();
    }
});



function Close() {
    modalHolder.classList.add("main-modal-none");
};

