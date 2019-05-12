var image;
function loadImage() {
    var canvas = document.getElementById("canvasOne");
    var inputFile = document.getElementById("chooseBtn");
    image = new SimpleImage(inputFile);
    image.drawTo(canvas);
}

function temp(){
    var canvas = document.getElementById("canvasTwo");
    var link = document.getElementById('download');
    link.addEventListener('click', function(ev) {
        link.href = canvas.toDataURL();
        link.download = "myphoto.png";
    }, false);
    document.body.canvas.appendChild(link);
}

function makeGrey() {
    var canvasTwo = document.getElementById("canvasTwo");
    for (var pixel of image.values()){
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    image.drawTo(canvasTwo);
}


//
//var link = document.createElement('a');
//    link.innerHTML = 'download image';
//link.addEventListener('click', function(ev) {
//    canvasThree = document.getElementById("canvasTwo");
//    link.href = canvasThree.toDataURL();
//    link.download = "mypainting.png";
//}, false);
//
