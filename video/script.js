console.log("page loaded...");
var x = document.getElementById("video");

function playVid() {
    x.play();
}

function pauseVid() {
    x.pause();
}

function mute (document){
    document.getElementById("video").muteed= true;
}

function mute (document){
    document.getElementById("video").muteed= false;
}

