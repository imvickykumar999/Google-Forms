
// https://davidwalsh.name/browser-camera

var video = document.getElementById('video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        // video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
  context.drawImage(video, 0, 0, 640, 480);
});

// Converts canvas to an image
// function convertCanvasToImage(canvas) {
// 	var image = new Image();
// 	image.src = canvas.toDataURL("image/png");
// 	return image;
// }
