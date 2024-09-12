"use strict";

// ?? Pour faire le btn to top 
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


const MY_PLANETS = ["Mercure", "Venus", "Terre", "Mars", "Jupiter", "Saturne", "Neptune", "Uranus", "Soleil", "Pluton"];

// ?? API SYSTEME SOLAIRE pour faire apparaître les infos des planètes
MY_PLANETS.forEach(function (planete) {
    async function appelData() {
        try {
            const res = await axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${planete}`);
        
            const CONTAINER = document.querySelector(".second-container");
            const PLANET_CARDS = document.createElement("div");
            const IMG_PLANET = document.createElement("img");
            const NAME_PLANET = document.createElement("p");
            const IS_PLANET = document.createElement("p");
            const TYPE_PLANET = document.createElement("p");
            const DATE_PLANET = document.createElement("p");
            const DISCOVERY_PLANET = document.createElement("p");

            CONTAINER.appendChild(PLANET_CARDS);
            PLANET_CARDS.append(IMG_PLANET, NAME_PLANET, IS_PLANET, TYPE_PLANET, DATE_PLANET, DISCOVERY_PLANET);
            PLANET_CARDS.classList.add("planet-cards");

            // sticker image de chaque planète
            IMG_PLANET.src = `../Images/SVG/Sticker-${planete}.svg`;
            IMG_PLANET.classList.add("stickers");

            // nom de chaque planète
            NAME_PLANET.innerText = res.data["name"];
            NAME_PLANET.classList.toggle("name-planet");

            // isPlanet ou non ?
            IS_PLANET.innerText = `Est-ce une planète ? ${res.data["isPlanet"]}`;
            IS_PLANET.classList.toggle("texte-api");

            // type de planète
            TYPE_PLANET.innerText = `Quel est son type ? ${res.data["bodyType"]}`;
            TYPE_PLANET.classList.toggle("texte-api");

            // date + qui a découvert la planète
            DATE_PLANET.innerText = `${planete} découvert(e) par ${res.data["discoveredBy"]} le ${res.data["discoveryDate"]}`;
            DATE_PLANET.classList.toggle("texte-api");

            console.log(res);
        }

        catch(err) {
            console.log("Une erreur est survenue :(")
        }
    }
    window.addEventListener("load", appelData);
})

// ?? API NASA pour faire apparaître une image tous les jours
const BUTTON = document.getElementById("btn-click");
BUTTON.addEventListener("click", async() => {

        try {
            const resNasa = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=VlGCExM5SZLjySeOuUQgVfqNBao00r7sSkR7i1Tn`)

    
            const TITLE = document.getElementById("title-img-nasa");
            const IMG = document.getElementById("img-nasa");
            const EXPLICATION = document.getElementById("explanation-img-nasa");
            const COPYRIGHT = document.getElementById("copyright");
            
            TITLE.innerHTML = `Titre de l'image : ${resNasa.data.title}`;
            IMG.src = resNasa.data.url;
            EXPLICATION.innerHTML = resNasa.data.explanation;
            COPYRIGHT.innerHTML = `© ${resNasa.data.copyright}, ${resNasa.data.date}`;
            
        }
    
        catch(err) {
            console.log("Erreur est survenue");
        }
    }

)

// ?? API DEEPL pour traduire le contenu des cards en FR
// import * as deepl from 'deepl-node';

// const authKey = "0739525a-d659-440a-aa12-63b9651c1cd5:fx"; // Replace with your key
// const translator = new deepl.Translator(authKey);

// (async () => {
//     const result = await translator.translateText('Hello, world!', null, 'fr');
//     console.log(result.text); // Bonjour, le monde !
// })();
