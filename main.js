"use strict";

const cardContainer = document.querySelector(".card_container");

const imgTemplate = `
    <div class='card'>
        <img class='image' src="" alt="card_with_leaf">
    </div>
`;

for (let i = 0; i < 10; i++) {
    cardContainer.innerHTML += imgTemplate;
}

const cards = document.querySelectorAll(".card");
const images = document.querySelectorAll(".image");



let randoms1 = [];
let randoms2 = [];

const generateNewRandom = () => {
    return Math.floor(Math.random() * 5);
};

const randomArrayGenerator = (array) => {
    while (array.length < 5) {
        const randomLeaf = generateNewRandom();

        if (array.includes(randomLeaf)) {
            generateNewRandom();
        } else {
            array.push(randomLeaf);
        }
    }
};

randomArrayGenerator(randoms1);
randomArrayGenerator(randoms2);

const randomizerArray = [...randoms1, ...randoms2];

randomizerArray.forEach((number, i) => {
    images[i].setAttribute("src", `./images/leaf${number + 1}.jpg`);
});

cards.forEach((card) => card.addEventListener("click", () => { }));




// timer //

const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}





