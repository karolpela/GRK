let img;
let img_h;
let img_s;
let img_v;

function preload() {
    img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
    img_h = createImage(256, 256);
    img_s = createImage(256, 256);
    img_v = createImage(256, 256);
}

function setup() {
    createCanvas(512, 512);
    img.resize(256, 256);
    imgToHsv(img, img_h, img_s, img_v);

    image(img_h, 0, 0);
    image(img_s, 256, 0);
    image(img_v, 0, 256);

    image(img, 256, 256);

    noLoop();
}

function imgToHsv(img, img_h, img_s, img_v) {
    img.loadPixels();
    img_v.loadPixels()
    for (let x = 0; x < img.width; x++)
        for (let y = 0; y < img.height; y++) {
            let pos = 4 * (y * img.width + x);
            let r = img.pixels[pos] / 255 //to jest wartość dla R
            let g = img.pixels[pos + 1] / 255;//to jest wartość dla G
            let b = img.pixels[pos + 2] / 255;//to jest wartość dla B
            //img.pixels[pos + 3] = 255;//to jest wartość dla A

            let cmax = Math.max(r, g, b);
            let cmin = Math.min(r, g, b);

            // let v = cmax;

            // let px = (pos / 4) % 256;//indeks kolumny wewnątrz wiersza
            // let py = (pos / 4) / 256;//indeks wiersza

            // img_v.set(px, py, 255 * v);

            let l = (cmax + cmin) / 2;

            img_v.set(x, y, 255 * l);
        }
    img_v.updatePixels();
}