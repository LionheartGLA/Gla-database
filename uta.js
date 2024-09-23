let score = 0;
const scoreDisplay = document.getElementById('score');
const noteContainer = document.getElementById('note-container');
const countdownDisplay = document.getElementById('countdown');
const gameEndDisplay = document.querySelector('.game-end');
const scoreTextDisplay = document.querySelector('.score-end-text');
const scoreEndDisplay = document.getElementById('score-end');
const keyMap = ['w', 'a', 's', 'd'];

scoreDisplay.textContent = `Score: ${score}`;

const keyColors = {
    'w': '#57cf71',
    'a': '#bfc231',
    's': '#f67faf',
    'd': '#8aa4ce'
};

const difficulty = {
    "Easy": 4,
    "Medium": 2,
    "Hard": 1.3,
    "Expert": 0.9,
};

const songs = [
    {
        name: 'Song 1',
        duration: 8,
        sequence: [
            { key: 'w', time: 0.1 },
            { key: 's', time: 0.2 },
            { key: 'a', time: 0.3 },
            { key: 'd', time: 0.4 },
        ],
        difficulty: difficulty["Medium"]
    },
    {
        name: 'Twinkle Twinkle Little Star',
        duration: 21,
        sequence: [
            { key: 'd', time: 0 },
            { key: 'd', time: 1 },
            { key: 's', time: 2 },
            { key: 's', time: 3 },
            { key: 'w', time: 4 },
            { key: 'w', time: 5 },
            { key: 's', time: 6 },
            { key: 'w', time: 7 },
            { key: 'w', time: 8 },
            { key: 'a', time: 9 },
            { key: 's', time: 10 },
            { key: 's', time: 11 },
            { key: 'a', time: 12 },
            { key: 'w', time: 13 },
            { key: 'w', time: 14 },
            { key: 'a', time: 15 },
            { key: 's', time: 16 },
            { key: 's', time: 17 },
            { key: 'a', time: 18 },
            { key: 'w', time: 19 }
        ],
        difficulty: difficulty["Hard"]
    }
];

let currentNoteIndex = 0;
let startTime;
let currentSongIndex = 0;
let noteSequence = [];
let countdownInterval;
let musicEndTimeout;
let createNotesInterval;
let gameActive = false;

function startGame(songIndex) {
    if (countdownInterval || musicEndTimeout) {
        resetGame();
    }
    gameEndDisplay.style.display = 'none';
    currentSongIndex = songIndex;
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    currentNoteIndex = 0;
    noteSequence = [...songs[songIndex].sequence];

    noteContainer.innerHTML = '';
    startCountdown(3);
    gameActive = false;
}

function startCountdown(seconds) {
    countdownDisplay.style.display = 'flex';
    countdownDisplay.textContent = seconds;
    countdownInterval = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            clearInterval(countdownInterval);
            countdownDisplay.style.display = 'none';
            startTime = Date.now();
            startMusicEndTimeout();
            gameActive = true;
            createNotesInterval = setInterval(createNotes, 100);
        } else {
            countdownDisplay.textContent = seconds;
        }
    }, 1000);
}

function startMusicEndTimeout() {
    musicEndTimeout = setTimeout(() => {
        countdownDisplay.style.display = 'flex';
        scoreTextDisplay.textContent = `Seu score na música ${songs[currentSongIndex].name} foi:`;
        resetGame();
        gameEndDisplay.style.display = 'flex';
        scoreEndDisplay.textContent = score;
    }, songs[currentSongIndex].duration * 1000);
}

function resetGame() {
    clearInterval(countdownInterval);
    clearTimeout(musicEndTimeout);
    clearInterval(createNotesInterval);
    countdownInterval = null;
    musicEndTimeout = null;
    createNotesInterval = null;
    currentNoteIndex = 0;
    noteSequence = [];
    countdownDisplay.textContent = '';
    gameActive = false;
}

function animateKey(keyIndex) {
    const fakeNotes = document.querySelectorAll('.fake-note');
    const notes = document.querySelectorAll('.note');
    const fakeNote = fakeNotes[keyIndex];
    const note = notes[keyIndex];

    if (fakeNote) {
        animateNote(fakeNote);
        animateNote(note);
    }
}

function animateNote(noteElement) {
    noteElement.style.transform = 'scale(1.1)';
    noteElement.style.transition = 'transform 0.1s';
    setTimeout(() => {
        noteElement.style.transform = 'scale(1)';
    }, 100);
}

function animateMissingNote(noteElement) {
    noteElement.style.opacity = '0.5';
    noteElement.style.transition = 'opacity 0.1s';
    setTimeout(() => {
        noteElement.style.opacity = '0.9';
    }, 100);
}

function createNotes() {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);

    if (currentTime < songs[currentSongIndex].duration) {
        if (currentNoteIndex < noteSequence.length) {
            const { key, time } = noteSequence[currentNoteIndex];
            const timeToNextNote = time - currentTime;

            if (timeToNextNote <= 0) {
                const note = document.createElement('div');
                note.classList.add('circle');
                note.style.backgroundColor = keyColors[key];
                note.style.left = `${keyMap.indexOf(key) * 25 + 12.5}%`;
                note.style.animation = `drop ${songs[currentSongIndex].difficulty}s linear forwards`;
                noteContainer.appendChild(note);
                note.addEventListener('animationend', () => {
                    note.remove();
                });

                currentNoteIndex++;
            }
        }
    }
}

function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    const noteIndex = keyMap.indexOf(key);
    const notes = document.querySelectorAll('.note');
    const fakeNotes = document.querySelectorAll('.fake-note');

    if (noteIndex !== -1) {
        const circles = document.querySelectorAll('.circle');
        const hitZone = document.querySelector('.hit-zone');
        const hitZoneRect = hitZone.getBoundingClientRect();

        animateKey(noteIndex);

        if (gameActive) {
            const hitNote = [...circles].find(circle => {
                const circleRect = circle.getBoundingClientRect();
                return (
                    circle.style.left === `${noteIndex * 25 + 12.5}%` &&
                    circleRect.bottom >= hitZoneRect.top &&
                    circleRect.bottom <= hitZoneRect.bottom
                );
            });

            if (hitNote) {
                hitNote.remove();
                score += 10;
                scoreDisplay.textContent = `Score: ${score}`;
            } else {
                if (score > 0) {
                    const fakeNote = fakeNotes[noteIndex];
                    if (fakeNote) {
                        score -= 10;
                        scoreDisplay.textContent = `Score: ${score}`;
                        animateMissingNote(fakeNote);
                    }
                }
            }
        }
    }
}

function checkEndCondition() {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    if (currentTime >= songs[currentSongIndex].duration) {
        countdownDisplay.style.display = 'flex';
        scoreEndDisplay.textContent = score;
        gameEndDisplay.style.display = 'flex';
        resetGame();
    }
}

function populateMusicList() {
    songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.textContent = song.name;
        songItem.classList.add('song-item');
        songItem.dataset.difficulty = song.difficulty;

        let listClass = '';
        if (song.difficulty === difficulty["Easy"]) {
            listClass = 'easy-list';
        } else if (song.difficulty === difficulty["Medium"]) {
            listClass = 'medium-list';
        } else if (song.difficulty === difficulty["Hard"]) {
            listClass = 'hard-list';
        } else if (song.difficulty === difficulty["Expert"]) {
            listClass = 'expert-list';
        }

        document.querySelector(`.${listClass}`).appendChild(songItem);

        songItem.addEventListener('click', () => {
            resetGame();
            startGame(index);
        });
    });
}

populateMusicList();

document.addEventListener('keydown', (event) => {
    handleKeyPress(event);
    checkEndCondition();
});