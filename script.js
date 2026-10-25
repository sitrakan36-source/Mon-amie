const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const smileButton = document.getElementById("smileButton");
const smileMessage = document.getElementById("smileMessage");
const magicButton = document.getElementById("magicButton");
const magicResult = document.getElementById("magicResult");
const magicText = document.getElementById("magicText");
const copyButton = document.getElementById("copyButton");
const copyStatus = document.getElementById("copyStatus");
const shareButton = document.getElementById("shareButton");
const backToTop = document.getElementById("backToTop");
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", function () {
    const menuOuvert = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", menuOuvert);
    menuToggle.textContent = menuOuvert ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-label",
        menuOuvert ? "Fermer le menu" : "Ouvrir le menu"
    );
});

navLinks.querySelectorAll("a").forEach(function (lien) {
    lien.addEventListener("click", function () {
        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
});

const messagesSourire = [
    "Tu as ta place dans ce monde. 💙",
    "Continue d'apprendre et de découvrir tes talents. 🚀",
    "Les petits progrès peuvent conduire à de grandes réussites. ✨",
    "Ton sourire peut illuminer la journée de quelqu'un. ☀️",
    "Prends soin de toi et respecte ton propre rythme. 🌿",
    "Tu n'as pas besoin d'être parfait pour avancer. 🦋",
    "Chaque journée est une occasion d'apprendre quelque chose. 🌈",
    "Célèbre tes progrès, même les plus petits. ⭐",
    "Tes idées et tes efforts ont de la valeur. 💜",
    "Un peu de patience peut ouvrir de nouvelles possibilités. 🌠"
];

function choisirMessage(tableau) {
    const index = Math.floor(Math.random() * tableau.length);
    return tableau[index];
}

smileButton.addEventListener("click", function () {
    smileMessage.textContent = choisirMessage(messagesSourire);

    creerCoeurs(
        window.innerWidth / 2,
        window.innerHeight / 2,
        5
    );
});

const messagesMagiques = [
    "Tu peux rêver grand tout en commençant par de petites actions. 🚀",
    "Chaque nouvelle compétence commence par un premier essai. 💡",
    "Tu as le droit d'apprendre à ton propre rythme. 🌿",
    "Une erreur peut devenir une occasion de mieux comprendre. 🧠",
    "Ta valeur ne dépend pas de tes résultats. 💙",
    "Entoure-toi de personnes qui respectent tes rêves et tes limites. 🤝",
    "Même un petit progrès est un progrès. ⭐",
    "Reste curieux et continue à découvrir le monde. 🌎",
    "Les vrais amis s'encouragent sans se comparer. 🫂",
    "Ton avenir se construit aussi grâce aux petites habitudes. 🌱",
    "Tu n'as pas besoin de tout savoir pour commencer. 📚",
    "Prends le temps de respirer et de retrouver ton énergie. ☁️",
    "Une journée difficile ne résume pas toute ton histoire. ☀️",
    "Tu peux être fier des efforts que tu fais pour progresser. 🏆",
    "Les meilleurs souvenirs commencent parfois par un moment simple. 🎉",
    "La patience et la pratique t'aident à développer tes capacités. 🌌",
    "Le repos fait aussi partie du chemin vers tes objectifs. 🍃",
    "Nos différences peuvent nous apprendre beaucoup de choses. 🌈",
    "Une parole encourageante peut rendre la journée d'un ami plus belle. 💌",
    "Reste toi-même, continue d'apprendre et avance avec confiance. ✨",
    "Le respect est une force qui rend chaque groupe meilleur. 🤍",
    "Tu peux changer de direction lorsque tu découvres de nouvelles possibilités. 🧭",
    "Chaque personne possède des qualités qu'elle peut développer. 💜",
    "Ne te compare pas constamment aux autres : construis ton propre chemin. 🌠"
];

let dernierMessage = "";

magicButton.addEventListener("click", function () {
    dernierMessage = choisirMessage(messagesMagiques);

    magicText.textContent = dernierMessage;

    magicResult.classList.remove("show");

    void magicResult.offsetWidth;

    magicResult.classList.add("show");

    copyStatus.textContent = "";

    creerCoeurs(
        window.innerWidth / 2,
        window.innerHeight / 2,
        6
    );
});

copyButton.addEventListener("click", async function () {
    if (dernierMessage === "") {
        copyStatus.textContent = "Découvre d'abord un message magique. ✨";
        return;
    }

    try {
        await navigator.clipboard.writeText(dernierMessage);

        copyStatus.textContent = "Message copié avec succès ! 💙";
    } catch (erreur) {
        copyStatus.textContent =
            "Copie automatique indisponible. Sélectionne le texte pour le copier.";
    }
});

shareButton.addEventListener("click", async function () {
    const textePartage =
        "✨ Un message pour mes amis ✨\n\n" +
        "Continuons à apprendre, à nous respecter et à poursuivre nos rêves.\n\n" +
        "Nos différences font notre force. Ensemble, tout devient possible ! 💙";

    if (navigator.share) {
        try {
            await navigator.share({
                title: "Notre Univers ✨",
                text: textePartage,
                url: window.location.href
            });
        } catch (erreur) {
            if (erreur.name !== "AbortError") {
                console.error("Le partage n'a pas pu être effectué.", erreur);
            }
        }
    } else {
        try {
            await navigator.clipboard.writeText(textePartage);

            alert(
                "Ton message a été copié ! Tu peux maintenant le partager avec tes amis."
            );
        } catch (erreur) {
            window.prompt(
                "Copie ce message et envoie-le à tes amis :",
                textePartage
            );
        }
    }
});

function creerCoeurs(x, y, nombre = 5) {
    const symboles = ["💙", "💜", "♡", "✦", "✨", "🌟"];

    for (let i = 0; i < nombre; i++) {
        const coeur = document.createElement("span");

        coeur.classList.add("floating-heart");
        coeur.textContent = choisirMessage(symboles);

        const decalageX = (Math.random() - 0.5) * 100;
        const decalageY = (Math.random() - 0.5) * 40;

        coeur.style.left = x + decalageX + "px";
        coeur.style.top = y + decalageY + "px";

        coeur.style.animationDelay =
            Math.random() * 0.3 + "s";

        document.body.appendChild(coeur);

        setTimeout(function () {
            coeur.remove();
        }, 2200);
    }
}

document.addEventListener("click", function (evenement) {
    const bouton = evenement.target.closest("button");
    const lien = evenement.target.closest("a");

    if (bouton || lien) {
        return;
    }

    creerCoeurs(
        evenement.clientX,
        evenement.clientY,
        2
    );
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

console.log("Notre Univers est prêt ! ✨");