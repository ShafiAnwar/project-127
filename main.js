
song1="";
song2="";
rightWristX=0;
leftWristX=0;
rightWristY=0;
leftWristY=0;
function preload(){
    song1=loadSound("Believer.mp3");
    song2=loadSound("Heat Waves.mp3");
}
function setup(){
    canvas=craeteCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
image(video,0,0,600,500);
}
function play(){
    song2.play();
}