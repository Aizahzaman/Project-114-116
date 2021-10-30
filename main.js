mustache_x=0;
mustache_y=0;
function preload(){
mustache=loadImage("https://i.postimg.cc/7b8y8vbs/mustache-student-math-favorite-for-friday-the-the-1.png");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    picture=createCapture(VIDEO);
    picture.size(500,500);
    picture.hide();
    myModel=ml5.poseNet(picture,modelLoaded);
    myModel.on("pose",getpose); 
}

function modelLoaded(){
    console.log("Your model is ready to use");
}

function getpose(result){
    if(result.length>0){
        console.log(result);
        mustache_x=result[0].pose.nose.x;
        mustache_y=result[0].pose.nose.y;
        console.log(mustache_x,mustache_y);
    }
}

function draw(){
    image(picture,0,0,500,500);
    image(mustache,mustache_x-75,mustache_y,150,50)
}