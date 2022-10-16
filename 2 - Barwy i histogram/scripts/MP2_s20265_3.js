let img;
let img_r;
let img_g;
let img_b;
let img_sum;

function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
    img_r = createImage(256, 256);
    img_g = createImage(256, 256);
    img_b = createImage(256, 256);
    img_sum = createImage(256, 256);
}

function setup() {
    createCanvas(512, 512);
    img.resize(256, 256);
    imgToChannels(img, img_r, img_g, img_b)

    image(img_r, 0, 0)
    image(img_g, 256, 0)
    image(img_b, 0, 256)

    img_sum.blend(img_r, 0, 0, 256, 256, 0, 0, 256, 256, ADD);
    img_sum.blend(img_g, 0, 0, 256, 256, 0, 0, 256, 256, ADD);
    img_sum.blend(img_b, 0, 0, 256, 256, 0, 0, 256, 256, ADD);

    image(img_sum, 256, 256)

    noLoop();
}

function imgToChannels(img, img_r, img_g, img_b) {
    img.loadPixels();
    img_r.loadPixels();
    img_g.loadPixels();
    img_b.loadPixels();
    for (let x = 0; x < img.width; x++)
        for (let y = 0; y < img.height; y++) {
            let pos = 4 * (y * img.width + x);
            img_r.pixels[pos] = img.pixels[pos] //to jest wartość dla R
            img_r.pixels[pos + 1] = 0;//to jest wartość dla G
            img_r.pixels[pos + 2] = 0;//to jest wartość dla B
            img_r.pixels[pos + 3] = 255;//to jest wartość dla A

            img_g.pixels[pos] = 0
            img_g.pixels[pos + 1] = img.pixels[pos + 1];
            img_g.pixels[pos + 2] = 0;
            img_g.pixels[pos + 3] = 255;

            img_b.pixels[pos] = 0
            img_b.pixels[pos + 1] = 0;
            img_b.pixels[pos + 2] = img.pixels[pos + 2];
            img_b.pixels[pos + 3] = 255;
        }
    img_r.updatePixels();
    img_g.updatePixels();
    img_b.updatePixels();
}