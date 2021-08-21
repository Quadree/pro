Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takeImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("cameraimg").innerHTML='<img id="takenImage" src="'+data_uri+'"/>';
    });
}
console.log('ml5version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/E5LAmec4q/',modelLoaded);
function modelLoaded(){
    console.log('model loaded')
}