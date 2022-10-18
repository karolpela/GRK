let img;

function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
}

function setup() {
    createCanvas(256, 256);
    img.resize(256, 256);
    img.filter('gray');

    drawHistogram(img);

    noLoop();
}

function drawHistogram(img) {
    let histogram = new Array(256);
    histogram.fill(0);

    img.loadPixels();

    for (let x = 0; x < img.width; x++)
        for (let y = 0; y < img.height; y++) {
            let pos = 4 * (y * img.width + x);
            //img.pixels[pos];//to jest wartość dla R
            //img.pixels[pos + 1];//to jest wartość dla G
            //img.pixels[pos + 2];//to jest wartość dla B
            //img.pixels[pos + 3] = 255;//to jest wartość dla A
            histogram[img.pixels[pos]] += 1;
        }


    background(255);
    stroke(0);

    let maxVal = Math.max(...histogram);
    for (let x = 0; x < img.width; x++) {
        line(x, 255, x, 255 - histogram[x] / maxVal * 256 * 10);
    }
}