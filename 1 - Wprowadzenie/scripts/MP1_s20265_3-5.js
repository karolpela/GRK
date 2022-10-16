function draw() {
    //noprotect;
    background(0);
    for (let y = 0; y < height; y++)
        for (let x = 0; x < width; x++) {
            set(x, y, color((x / width) * 256));
        }
    updatePixels();
}