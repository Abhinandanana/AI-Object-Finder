status= "";
video= "";
input_text= "";

function preload(){

}

function setup(){
    canvas= createCanvas(580, 380);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    video.size(600, 400);
}

function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
input_text= document.getElementById("object_name").value;
}

function modelLoaded(){
console.log("Model Loaded")
status= true;
}

function draw(){
    image(video, 0, 0, 580, 380);
}