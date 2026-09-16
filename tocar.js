document.addEventListener("keydown", function (event) {

    const teclaPresionada = event.key.toUpperCase();

    const teclaVisual = document.querySelector(
        `[data-key="${teclaPresionada}"]`
    );

    if (!teclaVisual) {
        return;
    }

    // Evita repeticiones si mantienen la tecla presionada
    if (event.repeat) {
        return;
    }

    // Ilumina la tecla
    teclaVisual.classList.add("activa");

    // Obtiene la ruta del audio
    const rutaAudio = teclaVisual.dataset.audio;

    if (rutaAudio) {

        // Crea un audio nuevo cada vez
        const audio = new Audio(rutaAudio);

        // Lo reproduce sin cortar los anteriores
        audio.play().catch(function (error) {
            console.error("No se pudo reproducir el audio:", error);
        });
    }

});


document.addEventListener("keyup", function (event) {

    const teclaPresionada = event.key.toUpperCase();

    const teclaVisual = document.querySelector(
        `[data-key="${teclaPresionada}"]`
    );

    if (teclaVisual) {
        teclaVisual.classList.remove("activa");
    }

});