const video = document.getElementById("video");

video.addEventListener("click", () => {

    video.play();

});

video.addEventListener("ended", () => {

    window.location.href="AQUI_TU_LINK";

});
