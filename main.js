object =[];
status = "";
x = ""
function preload(){
    x=createVideo("vid.mp4")
 
}
function setup(){
 canvas=createCanvas(600,600)
 canvas.center()
 x.hide()
}
function draw(){
 image(x,0,0,600,600)
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("h21").innerHTML="Status object indentfying";

}

function modelLoaded(){
    console.log("model loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}