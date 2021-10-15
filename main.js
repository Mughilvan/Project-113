function preload(){
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(700,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,100,80,300,250);

    stroke(168, 10, 10);
    fill(168, 10, 10);
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);


    stroke(50, 170, 80);
    fill(100, 100, 100);

    rect(60, 30, 375, 25);
    rect(60, 350, 375, 25);
    rect(30, 60, 25, 275);
    rect(450, 60, 25, 275);
}

function take_snapshot(){
    save("picture.png");
}