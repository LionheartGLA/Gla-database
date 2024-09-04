const chars = [
    { name: "Marco", type: "dima", dates: ["09-08-2024", "26-04-2024"], image: "Img/Medals/Marco.png", class: ["Especialista", "Lutador", "Suporte", "Fruta do Diabo"] },
    { name: "Uta", type: "dima", dates: ["30-08-2024", "19-04-2024"], image: "Img/Medals/Uta.png", class: ["Especialista", "DPS", "Fruta do Diabo"] },
    { name: "Scratchmen Apoo", type: "gold", dates: ["06-09-2024", "28-06-2024", "10-05-2024"], image: "Img/Medals/Apoo.png", class: ["Atirador", "Suporte", "Supernova", "Fruta do Diabo"] },
    { name: "Baby 5", type: "gold", dates: ["06-09-2024", "12-07-2024", "31-05-2024"], image: "Img/Medals/Baby5.png", class: ["DPS", "Atirador", "Cortante", "Fruta do Diabo", "Mulher"] },
    { name: "Bartolomeo", type: "gold", dates: ["30-08-2024", "05-07-2024", "26-04-2024", "24-05-2024"], image: "Img/Medals/Bartolomeo.png", class: ["Especialista", "DPS", "Fruta do Diabo"] },
    { name: "Bastille", type: "gold", dates: ["06-09-2024", "19-07-2024", "17-05-2024"], image: "Img/Medals/Bastille.png", class: ["Cortante", "Tanque", "Marinheiro"] },
    { name: "Bellamy", type: "gold", dates: ["14-06-2024", "17-05-2024"], image: "Img/Medals/Bellamy.png", class: ["Lutador", "DPS", "Fruta do Diabo"] },
    { name: "Jewelry Bonney", type: "gold", dates: ["06-09-2024", "12-07-2024", "31-05-2024"], image: "Img/Medals/Bonney.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Supernova", "Mulher", "Realeza"] },
    { name: "Brook", type: "gold", dates: ["16-08-2024", "14-06-2024", "10-05-2024"], image: "Img/Medals/Brook.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Capone Gang Bege", type: "gold", dates: ["28-06-2024", "07-06-2024", "26-04-2024"], image: "Img/Medals/Capone.png", class: ["Atirador", "DPS", "Supernova", "Fruta do Diabo"] },
    { name: "Carrot", type: "gold", dates: ["16-08-2024", "21-06-2024", "31-05-2024", "26-04-2024"], image: "Img/Medals/Carrot.png", class: ["Cortante", "Especialista", "DPS", "Mulher"] },
    { name: "Tony Tony Chopper", type: "gold", dates: ["02-08-2024", "28-06-2024", "17-05-2024"], image: "Img/Medals/Chopper.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Crocodile", type: "gold", dates: ["16-08-2024", "26-07-2024", "24-05-2024"], image: "Img/Medals/Crocodile.png", class: ["Especialista", "Tanque", "Fruta do Diabo", "Shichibukai"] },
    { name: "Dalmatian", type: "gold", dates: ["23-08-2024", "19-07-2024", "07-06-2024", "22-03-2024"], image: "Img/Medals/Dalmatian.png", class: ["Cortante", "Bruiser", "Marinheiro", "Fruta do Diabo"] },
    { name: "X Drake", type: "gold", dates: ["02-08-2024", "26-07-2024", "03-05-2024"], image: "Img/Medals/Drake.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Supernova", "Marinheiro"] },
    { name: "Franky", type: "gold", dates: ["30-08-2024", "05-07-2024", "24-05-2024"], image: "Img/Medals/Franky.png", class: ["Atirador", "Bruiser", "Chapéu de Palha"] },
    { name: "Basil Hawkins", type: "gold", dates: ["09-08-2024", "12-07-2024", "10-05-2024"], image: "Img/Medals/Hawkins.png", class: ["Especialista", "Bruiser", "Fruta do Diabo", "Supernova"] },
    { name: "Hina", type: "gold", dates: ["30-08-2024", "21-06-2024", "24-05-2024"], image: "Img/Medals/Hina.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Marinheiro", "Mulher"] },
    { name: "Vinsmoke Ichiji", type: "gold", dates: ["16-08-2024", "03-05-2024"], image: "Img/Medals/Ichiji.png", class: ["Bruiser", "Lutador", "Realeza"] },
    { name: "Jesus Burgess", type: "gold", dates: ["02-08-2024", "28-06-2024", "10-05-2024"], image: "Img/Medals/Jesus.png", class: ["Lutador", "Tanque"] },
    { name: "Eustass Kid", type: "gold", dates: ["30-08-2024", "12-07-2024", "07-06-2024", "15-03-2024"], image: "Img/Medals/Kid.png", class: ["Atirador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Killer", type: "gold", dates: ["21-06-2024", "03-05-2024"], image: "Img/Medals/Killer.png", class: ["Cortante", "DPS", "Supernova"] },
    { name: "Koala", type: "gold", dates: ["30-08-2024", "14-06-2024", "31-05-2024"], image: "Img/Medals/Koala.png", class: ["Lutador", "DPS", "Mulher"] },
    { name: "Trafalgar Law", type: "gold", dates: ["23-08-2024", "05-07-2024", "17-05-2024"], image: "Img/Medals/Law.png", class: ["Cortante", "Especialista", "DPS", "Supernova", "Fruta do Diabo"] },
    { name: "Leo e Mansherry", type: "gold", dates: ["02-08-2024", "05-07-2024", "14-06-2024", "19-04-2024"], image: "Img/Medals/Leo.png", class: ["Especialista", "Suporte", "Realeza", "Fruta do Diabo", "Mulher"] },
    { name: "Monkey D. Luffy", type: "gold", dates: ["23-08-2024", "28-06-2024", "03-05-2024"], image: "Img/Medals/Luffy.png", class: ["Bruiser", "Lutador", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Gecko Moria", type: "gold", dates: ["13-10-2023"], image: "Img/Medals/Moria.png", class: ["noRot", "Cortante", "Suporte", "Fruta do Diabo", "Shichibukai"] },
    { name: "Nami", type: "gold", dates: ["02-08-2024", "21-06-2024", "17-05-2024"], image: "Img/Medals/Nami.png", class: ["Especialista", "DPS", "Chapéu de Palha", "Mulher"] },
    { name: "Vinsmoke Niji", type: "gold", dates: ["02-08-2024", "19-07-2024", "24-05-2024", "26-04-2024"], image: "Img/Medals/Niji.png", class: ["Atirador", "DPS", "Realeza"] },
    { name: "Perona", type: "gold", dates: ["16-08-2024", "05-07-2024", "07-06-2024", "22-03-2024"], image: "Img/Medals/Perona.png", class: ["Especialista", "Suporte", "Fruta do Diabo", "Mulher"] },
    { name: "Rebecca", type: "gold", dates: ["09-08-2024", "19-07-2024", "07-06-2024", "05-04-2024"], image: "Img/Medals/Rebecca.png", class: ["Cortante", "Tanque", "Realeza", "Mulher"] },
    { name: "Vinsmoke Reiju", type: "gold", dates: ["06-09-2024", "12-07-2024", "10-05-2024"], image: "Img/Medals/Reiju.png", class: ["Suporte", "Especialista", "Realeza", "Mulher"] },
    { name: "Nico Robin", type: "gold", dates: ["09-08-2024", "21-06-2024", "10-05-2024", "26-04-2024"], image: "Img/Medals/Robin.png", class: ["Especialista", "DPS", "Fruta do Diabo", "Chapéu de Palha", "Mulher"] },
    { name: "Ryuma", type: "gold", dates: ["26-07-2024", "21-06-2024", "14-06-2024", "12-04-2024"], image: "Img/Medals/Ryuma.png", class: ["Cortante", "DPS"] },
    { name: "Vinsmoke Sanji", type: "gold", dates: ["16-08-2024", "26-07-2024", "24-05-2024"], image: "Img/Medals/Sanji.png", class: ["Lutador", "DPS", "Chapéu de Palha", "Realeza"] },
    { name: "Smoker", type: "gold", dates: ["23-08-2024", "12-07-2024", "03-05-2024"], image: "Img/Medals/Smoker.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Marinheiro"] },
    { name: "Urouge", type: "gold", dates: ["06-09-2024", "26-07-2024", "31-05-2024"], image: "Img/Medals/Urouge.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Usopp", type: "gold", dates: ["26-07-2024", "14-06-2024", "03-05-2024"], image: "Img/Medals/Usopp.png", class: ["Atirador", "DPS", "Chapéu de Palha"] },
    { name: "Van Augur", type: "gold", dates: ["23-08-2024", "05-07-2024", "17-05-2024"], image: "Img/Medals/Van_augur.png", class: ["Atirador", "DPS"] },
    { name: "Vinsmoke Yonji", type: "gold", dates: ["09-08-2024", "19-07-2024", "28-06-2024", "07-06-2024", "22-03-2024"], image: "Img/Medals/Yonji.png", class: ["Lutador", "Tanque", "Realeza"] },
    { name: "Roronoa Zoro", type: "gold", dates: ["23-08-2024", "19-07-2024", "31-05-2024"], image: "Img/Medals/Zoro.png", class: ["Cortante", "Bruiser", "Chapéu de Palha"] },
]

const lastDate = "06-09-2024";
let selectedChar = chars[0];

const rotationOne = getRotationChars(['Baby 5', 'Scratchmen Apoo', 'Urouge']);
const rotationTwo = getRotationChars(['Bastille', 'Jewelry Bonney', 'Vinsmoke Reiju']);

function getRotationChars(rotation) {
    return chars.filter(char => rotation.includes(char.name));
}

function populateRotation(div, rotation){
    const container = document.querySelector(div);

    rotation.forEach((char,index) => {
        const imgElement = document.createElement('div');
        imgElement.classList.add('rotation-img');
        imgElement.classList.add(`rot-${index}`);
        imgElement.style.backgroundImage = `url(${char.image})`;
        container.appendChild(imgElement);
    })
}

populateRotation('.rotationOne', rotationOne);
populateRotation('.rotationTwo', rotationTwo);

function calcDate(date) {
    try {
        const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;

        const [dayT, monthT, yearT] = lastDate.split('-');
        const dateT = new Date(yearT, monthT - 1, dayT);

        const [day, month, year] = date.split('-');
        const dateV = new Date(year, month - 1, day);

        const timeDifference = dateT - dateV;

        if (timeDifference < oneWeekInMillis) {
            return "green";
        } else if (timeDifference < (oneWeekInMillis * 4)) {
            return "white";
        } else if (timeDifference < (oneWeekInMillis * 8)) {
            return "orange";
        } else {
            return "red";
        }
    } catch (error) {
        console.error("Error calculating date color:", error);
        return "red";
    }
}



function selectChar(char) {
    const selectedImage = document.querySelector(".char-selected>img");
    const selectedName = document.querySelector(".char-selected>.char-name");
    const trackContainer = document.querySelector('.track-container');

    if (selectedImage) {
        selectedImage.src = char.image;
    }
    if (selectedName) {
        selectedName.textContent = char.name;
    }

    selectedChar = char;

    if (trackContainer) {
        trackContainer.innerHTML = "";

        let dates = [...char.dates].reverse();

        dates.reverse().forEach(date => {
            const track = document.createElement('p');
            track.classList.add("char-date-container");
            track.classList.add(calcDate(date));

            if (char.class.includes("noRot")) {
                track.classList.remove("white");
                track.classList.remove("orange");
                track.classList.remove("red");
                track.classList.add('noRot');
            }

            const [day, month] = date.split('-');
            const formattedDate = `${day}/${month}`;
            track.textContent = formattedDate;

            trackContainer.appendChild(track);
        });
    }
}



const colorPriority = {
    'green': 1,
    'white': 2,
    'orange': 3,
    'red': 4,
    'noRot': 5,
};

function sortCharacters(characters) {
    return characters.sort((a, b) => {
        const lastDateA = a.dates.length > 0 ? a.dates[0] : "01-01-1970";
        const lastDateB = b.dates.length > 0 ? b.dates[0] : "01-01-1970";

        const colorClassA = calcDate(lastDateA);
        const colorClassB = calcDate(lastDateB);

        const noRotA = a.class.includes('noRot');
        const noRotB = b.class.includes('noRot');

        if (noRotA && !noRotB) {
            return colorPriority['noRot'] - (colorPriority[colorClassB] || 999);
        } else if (!noRotA && noRotB) {
            return (colorPriority[colorClassA] || 999) - colorPriority['noRot'];
        } else if (noRotA && noRotB) {
            return 0;
        }

        const priorityA = colorPriority[colorClassA] || 999;
        const priorityB = colorPriority[colorClassB] || 999;

        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }

        const [dayA, monthA, yearA] = lastDateA.split('-');
        const [dayB, monthB, yearB] = lastDateB.split('-');

        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);

        return dateB - dateA;
    });
}




function displayCharacters(characters) {
    const container = document.querySelector('.char-list');
    container.innerHTML = '';

    characters.forEach(char => {
        const charDiv = document.createElement('div');
        charDiv.classList.add('char');
        charDiv.style.backgroundImage = `url(${char.image})`;

        const latestDate = char.dates.length > 0 ? char.dates[0] : "01-01-1970";
        const dateElement = document.createElement('p');
        dateElement.classList.add('char-date');
        dateElement.classList.add(calcDate(latestDate));

        const [day, month] = latestDate.split('-');
        const formattedDate = `${day}/${month}`;
        dateElement.textContent = formattedDate;

        if (char.class.includes("noRot")) {
            dateElement.classList.remove("white");
            dateElement.classList.remove("orange");
            dateElement.classList.remove("red");
            dateElement.classList.add('noRot');
        }

        charDiv.appendChild(dateElement);

        const nameElement = document.createElement('p');
        nameElement.textContent = char.name;
        nameElement.classList.add('char-name');
        charDiv.appendChild(nameElement);

        charDiv.addEventListener('click', () => {
            selectChar(char);
        });

        container.appendChild(charDiv);
    });
}



function filterCharacters(selectedClasses, activeColorFilter, searchText = '') {
    let filteredCharacters = chars.filter(char => {
        const classFilter = selectedClasses.length === 0 || selectedClasses.every(selectedClass => char.class.includes(selectedClass));
        const nameFilter = char.name.toLowerCase().includes(searchText);

        const noRotFilter = activeColorFilter === 'noRot' && char.class.includes('noRot');
        const colorFilter = !activeColorFilter || (activeColorFilter === 'noRot' ? noRotFilter : calcDate(char.dates[0]) === activeColorFilter);

        return classFilter && nameFilter && colorFilter;
    });

    return sortCharacters(filteredCharacters);
}



function updateCharacterDisplay() {
    let selectedClasses = Array.from(document.querySelectorAll('.class-bt.selected')).map(btn => btn.id);
    let activeColorFilter = document.querySelector('.ex.selected')?.id || '';
    let searchText = document.querySelector('.search-bar').value.toLowerCase();
    let filteredCharacters = filterCharacters(selectedClasses, activeColorFilter, searchText);
    displayCharacters(filteredCharacters);
}

document.querySelectorAll('.ex').forEach(button => {
    button.addEventListener('click', function () {
        const isSelected = this.classList.contains('selected');
        if (isSelected) {
            this.classList.remove('selected');
            updateCharacterDisplay(); 
        } else {
            document.querySelectorAll('.ex').forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            updateCharacterDisplay();
        }
    });
});

document.querySelectorAll('.class-bt').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('selected');
        updateCharacterDisplay();
    });
});

document.querySelector('.search-bar').addEventListener('input', updateCharacterDisplay);

displayCharacters(chars);
selectChar(selectedChar);
updateCharacterDisplay();

document.querySelector('.rot-bt').addEventListener('click', () => {
    window.location.replace('index.html')
})