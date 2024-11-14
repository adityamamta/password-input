"use strict"

const eyeContainer = document.querySelector(".eye-container");
const inputContainer = document.querySelector(".input-container");
const passwordInput = document.querySelector(".password");

eyeContainer.addEventListener("click", () => {
    const eyeIcons = eyeContainer.querySelectorAll("svg");
    eyeIcons.forEach((eyeIcon) => {
        eyeIcon.classList.toggle("hidden");
    })

    inputContainer.classList.toggle("active");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
})