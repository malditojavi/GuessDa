"use strict";

// link UI elements with js

let artistThumbnail = document.querySelector(".artistThumbnail");
let artistName = document.querySelector(".artistName");

let correctBtn = document.querySelector(".correctBtn");
let incorrectBtn = document.querySelector(".incorrectBtn");
let nextBtn = document.querySelector(".next");

let highscoreValue = document.querySelector(".highscoreValue");
let currentScoreValue = Number(document.querySelector(".currentScoreValue"));
currentScoreValue = 0;

const drake = {
  Name: "Drake",
  Thumbnail: "https://www.gstatic.com/tv/thumb/persons/371287/371287_v9_bc.jpg",
};
const eminem = {
  Name: "Eminem",
  Thumbnail: "https://www.gstatic.com/tv/thumb/persons/182420/182420_v9_bc.jpg",
};
const offset = {
  Name: "offset",
  Thumbnail:
    "https://www.gstatic.com/tv/thumb/persons/1063947/1063947_v9_bb.jpg",
};

// render random rapper data in UI

let rappers = [drake, eminem, offset];
let selectRandomRapper1 = Math.trunc(Math.random() * rappers.length);
let selectRandomRapper2 = Math.trunc(Math.random() * rappers.length);

function generateRappers() {
  let selectRandomRapper2 = Math.trunc(Math.random() * rappers.length);
  let selectRandomRapper1 = Math.trunc(Math.random() * rappers.length);
  artistName.textContent = rappers[selectRandomRapper1].Name;
  artistThumbnail.src = rappers[selectRandomRapper2].Thumbnail;
}

// Features for buttons

correctBtn.addEventListener("click", function () {
  if (rappers[selectRandomRapper1].Name === rappers[selectRandomRapper2].Name) {
    const temp = currentScoreValue + 10;
    currentScoreValue = temp;
    console.log(`current score value is ${currentScoreValue}`);
    document.querySelector(
      ".currentScoreValue"
    ).textContent = currentScoreValue;
    generateRappers();
  } else {
    const temp = currentScoreValue - 10;
    currentScoreValue = temp;
    console.log(`current score value is ${currentScoreValue}`);
    document.querySelector(
      ".currentScoreValue"
    ).textContent = currentScoreValue;
    generateRappers();
  }
});

incorrectBtn.addEventListener("click", function () {
  if (rappers[selectRandomRapper1].Name !== rappers[selectRandomRapper2].Name) {
    const temp = currentScoreValue + 10;
    currentScoreValue = temp;
    console.log(`current score value is ${currentScoreValue}`);
    document.querySelector(
      ".currentScoreValue"
    ).textContent = currentScoreValue;
    generateRappers();
  } else {
    const temp = currentScoreValue - 10;
    currentScoreValue = temp;
    console.log(`current score value is ${currentScoreValue}`);
    document.querySelector(
      ".currentScoreValue"
    ).textContent = currentScoreValue;
    generateRappers();
  }
});

nextBtn.addEventListener("click", function () {
  generateRappers();
});
