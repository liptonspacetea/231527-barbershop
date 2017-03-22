var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var linkMapBtn = document.querySelector(".map-btn");
var linkMap = document.querySelector(".map");
var popupMap = document.querySelector(".modal-content-map");
var closeMap = document.querySelector(".close-map");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("overlay-show");
    login.focus();
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function(event) {
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
    popupMap.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("overlay-show");
        popupMap.classList.remove("modal-content-show");
    }
});

linkMap.addEventListener("click", function(event) {
    event.preventDefault();
    popupMap.classList.add("modal-content-show");
    overlay.classList.add("overlay-show");
});

closeMap.addEventListener("click", function(event) {
    event.preventDefault();
    popupMap.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-show");
});

linkMapBtn.addEventListener("click", function(event) {
    event.preventDefault();
    popupMap.classList.add("modal-content-show");
    overlay.classList.add("overlay-show");
});


