sound = "";
status = "";
objects = [];


function preload() {
    sound = loadSound("dog_cat.jpg");
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    video= CreateCapture(VIDEO);
    video.hide();
    model = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelloaded() {
    console.log("Model is Loaded successfully");
    status = true;  
    model.detect(video, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(video, 0, 0, 640, 420);
    if (status != "") {
        for (var i = 0; i < objects.length; i++) {
            accuracy = floor(objects[i].confidence * 100);
            fill("#fc3d03");
            text(objects[i].label + " " + accuracy + "%", objects[i].x + 10, objects[i].y + 15);
            noFill();
            stroke("#fc3d03");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height );
            document.getElementById("status").innerHTML = "Status: Objects Detected";
           





        }
    }

}

