function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.classList.add("show"); // Affiche le menu déroulant
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.classList.remove("show"); // Cache le menu déroulant
}

const texts = [
    "ETUDIANT,", 
    "DEVELOPPEUR,"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function type() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(type, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(type, 500);
    }
}

window.onload = type;
