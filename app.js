function showSecret() {
    document.getElementById("image").style.display = "block";
    document.getElementById("image").style.opacity = 1;
    setTimeout(function hideSecret(){
        document.getElementById("image").style.display = "none";
    }, 5000); 
    
}


function ricardoShow() {
    document.getElementById("ricardos").style.opacity = 1;
    document.getElementById("ricardos").style.width = "50vw";
    new Audio('images/ricardo.mp3').play();
    document.getElementById("ricardos").style.zIndex=99;
    alert("Ricardo has come for you!!!")
    setTimeout(function ricardoHide(){
        document.getElementById("ricardos").style.opacity = 0;
        document.getElementById("ricardos").style.width = "0.1vw";
    }, 12000);
}

function alertFind(){
    alert("Sorko žiadne domény");
}