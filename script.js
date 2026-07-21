const video=document.getElementById("video");

video.addEventListener("click",()=>{

video.play();

});

video.onended=function(){

window.location.href="https://noscasamos-aleyandres.my.canva.site/";

}
