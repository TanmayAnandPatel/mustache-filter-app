var noseX= 0;
var noseY= 0;

function preload() {
     img= loadImage("https://i.postimg.cc/DyWL1NPK/mustache-removebg-preview-1.png")
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLaoded);
    poseNet.on('pose',Got_result)
}

function take_snapshot() {
    save("filter.png");
}

function draw() {
    image(video,0,0,300,300);
    image(img,noseX,noseY,50,50);
}

function modelLaoded() {
    console.log("Posenet is loaded");
}

function Got_result(results) {
    if(results.length>0) {
        console.log(results);
        console.log("noseX="+results[0].pose.nose.x);
        console.log("noseY="+results[0].pose.nose.y);
        noseX= results[0].pose.nose.x-15;
        noseY= results[0].pose.nose.y-15;
    }
}
