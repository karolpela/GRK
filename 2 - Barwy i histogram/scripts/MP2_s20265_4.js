function draw() {
    //noprotect;
    background(0);
    for (let y = 0; y < height; y++)
        for (let x = 0; x < width; x++) {
            let dx = x - width / 2;
            let dy = y - height / 2;
            let d = sqrt(dx * dx + dy * dy);
            set(x, y, color(255 - d, d, ((x + y) / (width + height) * 256)));
        }
    updatePixels();
}