"use strict";

const TO_TOP = document.querySelector(".btn-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        TO_TOP.classList.add("btn-top-active");
    } else {
        TO_TOP.classList.remove("btn-top-active");
    }
})
    TO_TOP.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
        })
    })
