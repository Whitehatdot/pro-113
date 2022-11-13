function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(200,300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,160,120,320,240);
    fill(255,0,0);
    circle(50,50,100);
    circle(50,450,100);
    circle(550,450,100);
    circle(550,50,100);
    fill(0,128,0);
    rect(550,100,10,300);
    rect(50,100,10,300);
    rect(100,450,400,10); 
    rect(100,50,400,10);
}