const chars = [
    { name: "Scratchmen Apoo", image: "Img/Medals//apoo.png", class: ["Atirador", "Suporte", "Supernova", "Fruta do Diabo"] },
    { name: "Baby 5", image: "Img/Medals//Baby5.png", class: ["DPS", "Atirador", "Cortante", "Fruta do Diabo", "Mulher"] },
    { name: "Bartolomeo", image: "Img/Medals//Bartolomeo.png", class: ["Especialista", "DPS", "Fruta do Diabo"] },
    { name: "Bastille", image: "Img/Medals//Bastille.png", class: ["Cortante", "Tanque", "Marinheiro"] },
    { name: "Bellamy", image: "Img/Medals//Bellamy.png", class: ["Lutador", "DPS", "Fruta do Diabo"] },
    { name: "Jewelry Bonney", image: "Img/Medals//Bonney.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Supernova", "Mulher", "Realeza"] },
    { name: "Brook", image: "Img/Medals//Brook.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Capone Gang Bege", image: "Img/Medals//Capone.png", class: ["Atirador", "DPS", "Supernova", "Fruta do Diabo"] },
    { name: "Carrot", image: "Img/Medals//Carrot.png", class: ["Cortante", "Especialista", "DPS", "Mulher"] },
    { name: "Tony Tony Chopper", image: "Img/Medals//Chopper.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Crocodile", image: "Img/Medals//Crocodile.png", class: ["Especialista", "Tanque", "Fruta do Diabo", "Shichibukai"] },
    { name: "Dalmatian", image: "Img/Medals//Dalmatian.png", class: ["Cortante", "Bruiser", "Marinheiro", "Fruta do Diabo"] },
    { name: "X Drake", image: "Img/Medals//Drake.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Supernova", "Marinheiro"] },
    { name: "Franky", image: "Img/Medals//Franky.png", class: ["Atirador", "Bruiser", "Chapéu de Palha"] },
    { name: "Basil Hawkins", image: "Img/Medals//Hawkins.png", class: ["Especialista", "Bruiser", "Fruta do Diabo", "Supernova"] },
    { name: "Hina", image: "Img/Medals//Hina.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Marinheiro", "Mulher"] },
    { name: "Vinsmoke Ichiji", image: "Img/Medals//Ichiji.png", class: ["Bruiser", "Lutador", "Realeza"] },
    { name: "Jesus Burgess", image: "Img/Medals//Jesus.png", class: ["Lutador", "Tanque"] },
    { name: "Eustass Kid", image: "Img/Medals//Kid.png", class: ["Atirador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Killer", image: "Img/Medals//Killer.png", class: ["Cortante", "DPS", "Supernova"] },
    { name: "Koala", image: "Img/Medals//Koala.png", class: ["Lutador", "DPS", "Mulher"] },
    { name: "Leo e Mansherry", image: "Img/Medals//Leo.png", class: ["Especialista", "Suporte", "Realeza", "Fruta do Diabo", "Mulher"] },
    { name: "Monkey D. Luffy", image: "Img/Medals//Luffy.png", class: ["Bruiser", "Lutador", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Gecko Moria", image: "Img/Medals//Moria.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Shichibukai"] },
    { name: "Nami", image: "Img/Medals//Nami.png", class: ["Especialista", "DPS", "Chapéu de Palha", "Mulher"] },
    { name: "Vinsmoke Niji", image: "Img/Medals//Niji.png", class: ["Atirador", "DPS", "Realeza"] },
    { name: "Perona", image: "Img/Medals//Perona.png", class: ["Especialista", "Suporte", "Fruta do Diabo", "Mulher"] },
    { name: "Rebecca", image: "Img/Medals//Rebecca.png", class: ["Cortante", "Tanque", "Realeza", "Mulher"] },
    { name: "Vinsmoke Reiju", image: "Img/Medals//Reiju.png", class: ["Suporte", "Especialista", "Realeza", "Mulher"] },
    { name: "Nico Robin", image: "Img/Medals//Robin.png", class: ["Especialista", "DPS", "Fruta do Diabo", "Chapéu de Palha", "Mulher"] },
    { name: "Ryuma", image: "Img/Medals//Ryuma.png", class: ["Cortante", "DPS"] },
    { name: "Vinsmoke Sanji", image: "Img/Medals//Sanji.png", class: ["Lutador", "DPS", "Chapéu de Palha", "Realeza"] },
    { name: "Smoker", image: "Img/Medals//Smoker.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Marinheiro"] },
    { name: "Urouge", image: "Img/Medals//Urouge.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Usopp", image: "Img/Medals//Usopp.png", class: ["Atirador", "DPS", "Chapéu de Palha"] },
    { name: "Van Augur", image: "Img/Medals//Van_Augur.png", class: ["Atirador", "DPS"] },
    { name: "Vinsmoke Yonji", image: "Img/Medals//Yonji.png", class: ["Lutador", "Tanque", "Realeza"] },
    { name: "Roronoa Zoro", image: "Img/Medals//Zoro.png", class: ["Cortante", "Bruiser", "Chapéu de Palha"] },
    { name: "Satori", image: "Img/Medals//Satori.png", class: ["Enel"] },
    { name: "Gedatsu", image: "Img/Medals//Gedatsu.png", class: ["Enel"] },
    { name: "Ohm", image: "Img/Medals//Ohm.png", class: ["Enel"] },
    { name: "Shura", image: "Img/Medals//Shura.png", class: ["Enel"] },
]

const barbanegraB = document.getElementById("barbanegra");
const enelB = document.getElementById("enel");
const doflamingoB = document.getElementById("doflamingo");
const hancockB = document.getElementById("hancock");
const ivankovB = document.getElementById("ivankov");
const jinbeB = document.getElementById("jinbe");
const kizaruB = document.getElementById("kizaru");
const kumaB = document.getElementById("kuma");
const mihawkB = document.getElementById("mihawk");
const shanksB = document.getElementById("shanks");

function addCharToList() {
    var charListDiv = document.querySelector(".chars");

    chars.forEach(function (character) {
        var charDiv = document.createElement("div");
        charDiv.classList.add("char");

        var imageElement = document.createElement("img");
        var textElement = document.createElement("p");
        textElement.innerText = character.name
        textElement.classList.add("title");

        imageElement.src = character.image;
        imageElement.alt = character.name;
        imageElement.style.width = "113px";
        imageElement.style.height= "116px"

        charDiv.appendChild(imageElement);
        charDiv.appendChild(textElement);

        charListDiv.appendChild(charDiv);
    })
}

const activeFilters = new Set();

function toggleFilter(filter) {
    if (activeFilters.has(filter)) {
        activeFilters.delete(filter);
    } else {
        activeFilters.add(filter);
    }
}

function filterChars() {
    var allChars = document.querySelectorAll('.char');
    allChars.forEach(function (char) {
        char.style.display = 'none';
    });

    var filteredChars = document.querySelectorAll('.char');
    filteredChars.forEach(function (char) {
        var charData = chars.find(function (character) {
            return character.name === char.querySelector('img').alt;
        });

        var showChar = true;
        activeFilters.forEach(function (filter) {
            if (!charData.class.includes(filter)) {
                showChar = false;
            }
        });

        if (showChar) {
            char.style.display = 'flex';
        }
    });
}

function handleFilterButtonClick(filter, button) {
    toggleFilter(filter);
    filterChars();
    if (activeFilters.has(filter)) {
        button.style.borderBottom = "1px solid white";
    } else {
        button.style.borderBottom = "none";
    }
}

barbanegraB.addEventListener("click", function () {
    handleFilterButtonClick("Supernova", barbanegraB);
});

doflamingoB.addEventListener("click", function () {
    handleFilterButtonClick("Atirador", doflamingoB);
});

hancockB.addEventListener("click", function () {
    handleFilterButtonClick("Mulher", hancockB);
});

ivankovB.addEventListener("click", function () {
    handleFilterButtonClick("Suporte", ivankovB);
});

jinbeB.addEventListener("click", function () {
    handleFilterButtonClick("Tanque", jinbeB);
});

kizaruB.addEventListener("click", function () {
    handleFilterButtonClick("Marinheiro", kizaruB);
});

kumaB.addEventListener("click", function () {
    handleFilterButtonClick("Realeza", kumaB);
});

mihawkB.addEventListener("click", function () {
    handleFilterButtonClick("Cortante", mihawkB);
});

shanksB.addEventListener("click", function () {
    handleFilterButtonClick("Chapéu de Palha", shanksB);
});

enelB.addEventListener("click", function () {
    handleFilterButtonClick("Enel", enelB);
});


window.addEventListener("load", addCharToList);

document.querySelector('.rot-bt').addEventListener('click', () => {
    window.location.replace('index.html')
})