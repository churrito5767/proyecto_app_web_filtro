noseX = 0;
noseY = 0;
headX = 0;
headY = 0;

function preload() {
    bigote = loadImage('https://i.postimg.cc/4dm3vZPq/bigote.png');
    hat = loadImage('https://i.postimg.cc/sD2TpLCS/french-hat.png');
}

function setup() {
    canvas = createCanvas(1000, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(1000, 600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet está inicializando');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 100;
        noseY = results[0].pose.nose.y - 50;
        headX = results[0].pose.nose.x - 175;
        headY = results[0].pose.nose.y - 230;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 1000, 600);
    image(bigote, noseX, noseY, 200 ,150);
    image(hat, headX, headY, 325, 200);
}

function take_snapshot() {
    save('FilterImage.png');
}