const video = document.getElementById("video");

video.addEventListener("click", () => {

    video.play();

});

video.addEventListener("ended", () => {

    window.location.href="https://noscasamos-aleyandres.my.canva.site/";

});
