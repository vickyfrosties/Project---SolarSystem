const PLAY_BTN = document.getElementById("start-game");
const H3 = document.getElementById("lancement");
const SUBMIT = document.getElementById("submit");
const CONTAINER = document.getElementById("questionnaire-bloc");

const QUESTIONS = [
    {
      question: "Quelle est la planète la plus proche du Soleil ?",
      reponses: ["Mercure", "Vénus", "Terre", "Mars"],
      bonneReponse: "Mercure"
    },
    {
      question: "Quelle est la plus grande planète du système solaire ?",
      reponses: ["Jupiter", "Saturne", "Neptune", "Uranus"],
      bonneReponse: "Jupiter"
    },
    {
      question: "Quelle planète est surnommée la planète rouge ?",
      reponses: ["Mars", "Vénus", "Mercure", "Neptune"],
      bonneReponse: "Mars"
    },
    {
      question: "Combien y a-t-il de planètes dans le système solaire ?",
      reponses: ["7", "8", "9", "10"],
      bonneReponse: "8"
    },
    {
      question: "Quelle planète possède des anneaux visibles ?",
      reponses: ["Saturne", "Jupiter", "Mars", "Terre"],
      bonneReponse: "Saturne"
    },
    {
      question: "Quelle est la planète la plus éloignée du Soleil ?",
      reponses: ["Neptune", "Uranus", "Pluton", "Saturne"],
      bonneReponse: "Neptune"
    },
    {
      question: "La Terre est-elle une planète rocheuse ou gazeuse ?",
      reponses: ["Rocheuse", "Gazeuse"],
      bonneReponse: "Rocheuse"
    },
    {
      question: "Quelle planète est la plus chaude du système solaire ?",
      reponses: ["Vénus", "Mercure", "Terre", "Mars"],
      bonneReponse: "Vénus"
    },
    {
      question: "Quel est le satellite naturel de la Terre ?",
      reponses: ["Lune", "Mars", "Mercure", "Saturne"],
      bonneReponse: "Lune"
    },
    {
      question: "Comment s'appelle notre étoile ?",
      reponses: ["Soleil", "Lune", "Jupiter", "Mars"],
      bonneReponse: "Soleil"
    }
  ];
console.log(QUESTIONS)

function startQuizz() {

PLAY_BTN.removeEventListener("click", startQuizz);
 
      setTimeout(() => {
          H3.style.display = "none";
          PLAY_BTN.style.display = "none";
  
          const QUESTION = document.createElement("p");
          const BTN_CONTAINER = document.createElement("div");
          CONTAINER.append(QUESTION, BTN_CONTAINER, SUBMIT);
  
          const RANDOM_QUESTION = Math.floor(Math.random() * QUESTIONS.length);
          QUESTION.textContent = QUESTIONS[RANDOM_QUESTION].question;
          const ANSWERS = QUESTIONS[RANDOM_QUESTION].reponses;
  
          ANSWERS.forEach((response, index) => {
              const BTN_ANSWERS = document.createElement("button");
              BTN_ANSWERS.textContent = `${index + 1}. ${response}`;
              SUBMIT.style.display = "block";
              QUESTION.classList.add("question");
              BTN_ANSWERS.classList.add("choices");
              BTN_CONTAINER.classList.add("btn-container");
              BTN_CONTAINER.appendChild(BTN_ANSWERS);
          });
      }, 1000)  
    }
    
  PLAY_BTN.addEventListener("click", startQuizz);
    
    // Résolution de la partie
   
    function quizzSolution() {
      // prendre la valeur du bouton ou des boutons cliqué(s) pour voir si ça correspond avec la valeur de bonneReponse
      let PLAYERS_CHOICE = "";
      const ANSWERS_CONTAINER = CONTAINER.querySelectorAll(".choices");

      for(let i = 0; i <QUESTIONS.length; i++){

        if(PLAYERS_CHOICE === QUESTIONS[i].bonneReponse) {
          alert("gg");
          ANSWERS_CONTAINER.style.color = "green";
        }

        else{
          ANSWERS_CONTAINER.style.color = "red";
        }
      }
    }

    SUBMIT.addEventListener("click", quizzSolution);


