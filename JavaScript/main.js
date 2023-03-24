function changeToLight() {
    document.getElementById("Light").style.display = "none";
    document.getElementById("Dark").style.display = "block";

    document.getElementById("medal_Boxes").src = "img/medalLight_Boxes.png";
    document.getElementById("suitcase_Boxes").src = "img/suitcaseLight_Boxes.png";
    document.getElementById("headphones_Boxes").src = "img/headphonesLight_Boxes.png";

    document.documentElement.style.setProperty('--primary-color', '#F4869C');
    document.documentElement.style.setProperty('--secondary-color', '#5E091A');

    localStorage.setItem('mode', 'light');
}

function changeToDark() {
    document.getElementById("Light").style.display = "block";
    document.getElementById("Dark").style.display = "none";

    document.getElementById("medal_Boxes").src = "img/medalDark_Boxes.png";
    document.getElementById("suitcase_Boxes").src = "img/suitcaseDark_Boxes.png";
    document.getElementById("headphones_Boxes").src = "img/headphonesDark_Boxes.png";

    document.documentElement.style.setProperty('--primary-color', '#5E091A');
    document.documentElement.style.setProperty('--secondary-color', '#F4869C');

    localStorage.setItem('mode', 'dark');
}

if (localStorage.getItem('mode') === 'light') {
    changeToLight();
} else {
    changeToDark();
}

document.querySelectorAll(".Exit").forEach(eo => {
    eo.addEventListener("click", () => {
        document.querySelectorAll(".dialogBoxesServices").forEach(eo => {
            eo.close();
        });
    });
});

document.querySelector(".ForMore_CreateWebsites_Apllications").addEventListener("click", () => {
    document.querySelector(".dialogBoxesServices_ForMore_CreateWebsites_Apllications").showModal();
});

document.querySelector(".ForMore_CreateGames").addEventListener("click", () => {
    document.querySelector(".dialogBoxesServices_ForMore_CreateGames").showModal();
});

document.querySelector(".ForMore_DevelopeWebsites_Apllications").addEventListener("click", () => {
    document.querySelector(".dialogBoxesServices_ForMore_DevelopeWebsites_Apllications").showModal();
});

document.querySelector(".ForMore_DesignWebsites_Apllications").addEventListener("click", () => {
    document.querySelector(".dialogBoxesServices_ForMore_DesignWebsites_Apllications").showModal();
});

document.querySelector(".ForMore_WritingArticles").addEventListener("click", () => {
    document.querySelector(".dialogBoxesServices_ForMore_WritingArticles").showModal();
});

document.querySelector(".ForMore_TrainingBeginners").addEventListener("click", () => {
    document.querySelector(".dialogBoxesServices_ForMore_TrainingBeginners").showModal();
});