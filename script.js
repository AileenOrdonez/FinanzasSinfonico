const aporteInput = document.getElementById("aporteInput");


const instrumentos = {
    "INTEGRIDAD": "timbales.html",
    "VALENTIA": "fagot.html",
    "ENFOQUE": "trombon.html",
    "EXCELENCIA": "vientos.html",
    "INNOVACION": "violin.html",
    "PASION": "violonchelo.html",
    "AGILIDAD": "trompeta.html",
};


aporteInput.addEventListener("input", function () {

    const palabra = aporteInput.value
        .trim()
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");


    if (instrumentos[palabra]) {

        aporteInput.classList.add("correcto");

        setTimeout(function () {

            window.location.href = instrumentos[palabra];

        }, 600);

    }

});
