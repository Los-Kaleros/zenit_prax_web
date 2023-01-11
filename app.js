function showSecret() {
    document.getElementById('image').style.opacity = 1;
}

function hideSecret() {
    document.getElementById('image').style.opacity = 0;
}

function ricardoShow() {
    document.getElementById("ricardos").style.opacity = 1;
    new Audio('images/ricardo.mp3').play();
    setTimeout(function ricardoHide(){
        document.getElementById("ricardos").style.opacity = 0;
    }, 11000);
}



