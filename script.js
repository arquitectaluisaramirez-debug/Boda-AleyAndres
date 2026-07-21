const video = document.getElementById("video");

const params = new URLSearchParams(window.location.search);

const nombre = params.get("nombre");

document.getElementById("nombre").textContent = nombre || "Nuestro invitado especial";

document.body.addEventListener("click", () => {

    video.play();

}, { once:true });

video.addEventListener("ended", () => {

    window.location.href="https://noscasamos-aleyandres.my.canva.site/";

});
