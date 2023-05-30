image="";
status="";
objects="[]";
function preload(){
    img=loadImage('IMG_6922.jpeg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detetcting Objects";
}
function modelLoaded(){
    console.log("Model Is Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if (error){
        console.log(error);
    }
        console.log(results);
}
function draw(){
    
        if(status !=""){
            for(i=0; i < objects.length;i++);
            document.getElementById("status").innerHTML="Object detected";
            
            fill('#FF0000');
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+percent+"%"+objects[i].x+15,objects[i].y+15);
            stroke('#FF0000');
            noFill();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    
        }
    }
