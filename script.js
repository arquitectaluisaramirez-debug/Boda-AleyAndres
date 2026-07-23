const video = document.getElementById("video");

const enlaceInvitacion = "https://noscasamos-aleyandres.my.canva.site/";

/* ========================= */
/* Nombre personalizado */
/* ========================= */

const parametros = new URLSearchParams(window.location.search);

const nombre = parametros.get("n");

document.getElementById("nombre").textContent =
    nombre || "Nuestro invitado especial";

/* ========================= */
/* Reproducir video */
/* ========================= */

let reproduciendo = false;

document.body.addEventListener("click", () => {

    if(reproduciendo) return;

    reproduciendo = true;

    video.play();

}, { once:true });

/* ========================= */
/* Cuando termina */
/* ========================= */

video.addEventListener("ended", () => {

    window.location.href = enlaceInvitacion;

});
