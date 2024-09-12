const PLAY_BTN = document.getElementById("start-game");
const H3 = document.getElementById("lancement");

const QUESTIONS = ["Quelle est la planète la plus proche de la Terre ?", "Quelle est la planète la plus éloignée ?", "Pourquoi appelle-t-on Mars la planète rouge ?", "Qui a été le premier astronaute a avoir mis les pieds sur la Lune ?"];

console.log(QUESTIONS);

PLAY_BTN.addEventListener("click", () => {
    console.log("prout");

    setTimeout(() => {
        H3.style.display = "none";
        PLAY_BTN.style.display = "none";
        
        // création des div, p, etc pour les questions + choix
        const CONTAINER = document.getElementById("questionnaire-bloc");
        const QUESTIONS_BLOC = document.createElement("div");
        const FIRST_QUESTION = document.createElement("p");
        const F_CHOICE = document.createElement("button");
        const S_CHOICE = document.createElement("button");
        const T_CHOICE = document.createElement("button");

    
        CONTAINER.appendChild(QUESTIONS_BLOC);
        QUESTIONS_BLOC.append(FIRST_QUESTION, F_CHOICE, S_CHOICE, T_CHOICE);
    
        QUESTIONS_BLOC.classList.add("bloc-questions");
        FIRST_QUESTION.classList.add("first-question");
        F_CHOICE.classList.add("first-choice");
        S_CHOICE.classList.add("second-choice");
        T_CHOICE.classList.add("third-choice");

        
        const RANDOM_QUESTION = QUESTIONS[Math.floor(Math.random()) * 4];
        FIRST_QUESTION.innerHTML = RANDOM_QUESTION;
        F_CHOICE.innerHTML = "Mercure";
        S_CHOICE.innerHTML = "Venus";
        T_CHOICE.innerHTML = "Mars";
       
    }, 1000)
})
