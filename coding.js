var image;
function loadImage() {
    var canvas = document.getElementById("canvasOne");
    var inputFile = document.getElementById("chooseBtn");
    image = new SimpleImage(inputFile);
    image.drawTo(canvas);
}

function makeGrey() {
    var canvasTwo = document.getElementById("canvasTwo");
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    image.drawTo(canvasTwo);
}