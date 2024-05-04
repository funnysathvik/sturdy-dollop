status = "";
objects = [];
function preload(){
    img1 = loadImage("IMG_0255.jpg");
}
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    detector = ml5.objectDetector("cocossd",modelloaded);
}
function modelloaded(){
    status = true;
    console.log("model loaded");
    document.getElementById("jinx").innerHTML = "detecting object";
    detector.detect(img1,gotresult);
}
function gotresult(results,error){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
function draw(){
    image(img1,0,0,380,380);
    if(status != ""){
        for(i=0; i<objects.length;i++){
            percentage = floor(objects[i].confidence*100);
            Fill("red");
            text(object[i].label,object[i].x,object[i].y);
            noFill();
            stroke("red");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
}