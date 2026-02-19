const headerSection = document.querySelector(".start");
const headerBtn = document.querySelector(".start__info--button");

const mainSection = document.querySelector(".main");

const mainSectionLevels = document.querySelectorAll(".main-level");

const mainSectionLevelFirst = document.querySelector(".main-first-level");
const levelFirstBtn = document.querySelector(".icon-seventh");



const mainSectionLevelSecond = document.querySelector(".main-second-level");
const levelSecondBtn = document.querySelector(".main-level-second--btn");
const levelSecondInput = document.querySelector(".main-level-second--input");


const mainSectionLevelThird = document.querySelector(".main-third-level");
const levelThirdBtn = document.querySelector(".main-level-third--btn");
const levelThirdInput = document.querySelector(".main-level-third--input");


const mainSectionLevelFourth = document.querySelector(".main-fourth-level");
const levelFourthBtn = document.querySelector(".main-level-fourth--btn");
const levelFourthInput = document.querySelector(".main-level-fourth--input");

const mainSectionLevelFifth = document.querySelector(".main-fifth-level");
const levelFifthBtn = document.querySelector(".main-fifth-level--btn");

const footerSection = document.querySelector(".footer");



mainSectionLevels.forEach((level) => {
    level.style.display = "none";
});

headerBtn.addEventListener("click", () => {
    headerSection.style.display = "none";
    mainSection.style.display = "block";
    mainSection.style.display = "block";
    mainSectionLevelFirst.style.display = "grid";

})

levelFirstBtn.addEventListener("click", () => {
    mainSectionLevelFirst.style.display = "none";
    mainSectionLevelSecond.style.display = "flex";

})
levelSecondBtn.addEventListener("click", () => {
    if (levelSecondInput.value.trim().toLowerCase() === "свечи") {
        mainSectionLevelSecond.style.display = "none";
        mainSectionLevelThird.style.display = "flex";
    }
});

levelThirdBtn.addEventListener("click", () => {
    const value = Number(levelThirdInput.value.trim());

    if (value === 2 || value === 4) {
        mainSectionLevelThird.style.display = "none";
        mainSectionLevelFourth.style.display = "flex";
    }
});

levelFourthBtn.addEventListener("click", () => {
    if (levelFourthInput.value.trim().toLowerCase() === "праздник") {
        mainSectionLevelFourth.style.display = "none";
        mainSectionLevelFifth.style.display = "flex";
    }
});
levelSecondInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        levelSecondBtn.click();
    }
});

levelThirdInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        levelThirdBtn.click();
    }
});

levelFourthInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        levelFourthBtn.click();
    }
});

levelFifthBtn.addEventListener("click", () => {
    mainSectionLevelFifth.style.display = "none";
    mainSection.style.display = "none";
    footerSection.style.display = "flex";
})




