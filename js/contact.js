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


const SUBMIT = document.getElementById("submit");

SUBMIT.addEventListener("click", () => {

    const INPUT_NAME = document.getElementById("name");
    const INPUT_LASTNAME = document.getElementById("lastname");
    const INPUT_MAIL = document.getElementById("email");
    const TEXT_AREA = document.getElementById("text-area");

    const NAME_VALUE = INPUT_NAME.value;
    const LASTNAME_VALUE = INPUT_LASTNAME.value;
    const MAIL_VALUE = INPUT_MAIL.value;
    const TEXT_VALUE = TEXT_AREA.value;
    
    if (NAME_VALUE && LASTNAME_VALUE && MAIL_VALUE && TEXT_AREA === null) {
        alert("N'oublie pas de remplir les champs pour pouvoir nous envoyer ton message !")
    }

    else {

        alert(`Salut ${NAME_VALUE} l'astronaute ! Merci d'avoir pris contact avec nous. Ton message : ${TEXT_VALUE}  a bien été enregistré chez nous et on prendra contact avec toi au plus vite. En attendant, continue d'explorer l'espace ! 🚀 `);
    }

})

const BTN_NOTIF = document.getElementById("submit-notifications");

BTN_NOTIF.addEventListener("click", () => {
    const INPUT_YES = document.getElementById("chk1");
    const INPUT_NO = document.getElementById("chk2");

    const YES_VALUE = INPUT_YES.value;
    const NO_VALUE = INPUT_NO.value;
    
    if(INPUT_YES.checked){
        alert("Merci de nous avoir répondu ! Nous t'enverrons des prochaines nouvelles concernant l'espace !");
    }
    
    else if (INPUT_NO.checked) {
        alert("Nous ne t'enverrons aucune notification, merci d'avoir répondu !")
    }

})
