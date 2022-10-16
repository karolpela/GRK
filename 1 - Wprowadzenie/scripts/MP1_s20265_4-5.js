function draw() {
    //noprotect;
    background(200, 200, 255);
    for (let y = 0; y < height; y++)
        for (let x = 0; x < width; x++) {
            if (y > height - 180) {
                grassAndFlowers(x, y);
            }
            // fasada
            else if (y > height - 380 && (x > width / 2 - 200 && x < width / 2 + 200)) {
                set(x, y, color(100, 50, 30));
            }
        }
    roof();
    updatePixels();
}

function roof() {
    for (let y = 30, w = 0; y < 181; y++, w += 2) {
        for (let x = 0; x < width; x++) {
            if (x > width / 2 - w && x < width / 2 + w) {
                set(x, y, color(255, 100, 100));
            }
        }
    }
}

function grassAndFlowers(x, y) {
    let r = floor(random(0, 200));
    if (r <= 1) {
        set(x, y, color(floor(random(0, 255)), floor(random(0, 255)), floor(random(0, 255))));
    } else {
        set(x, y, color(0, 100, 0));
    }
}