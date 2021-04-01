Webcam.set({
height: 300,
width: 400,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    })
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/k8Oxl2sG5/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");    
}
function identify(){
    img=document.getElementById("selfie_image");
    classifier.classify(img, gotResult);    
}
function gotResult(error,results){
    if (error){
        console.error(error);
            }
            else{
                console.log(results);
                document.getElementById("result_object").innerHTML=results[0].label;
                document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
            }
}