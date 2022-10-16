function draw() {
    //noprotect;

    let x1 = 300; let y1 = 100;
    let x2 = 100; let y2 = 500;
    let x3 = 500; let y3 = 500;

    background(0);

    stroke(255);

    point(x1, y1);
    point(x2, y2);
    point(x3, y3);

    let cx = x1;
    let cy = y1;

    for (let i = 0; i < 30000; i++) {
        let r = floor(random(0, 3));
        switch (r) {
            case 0:
                cx = (cx + x1) / 2;
                cy = (cy + y1) / 2;
                point(cx, cy);
                break;
            case 1:
                cx = (cx + x2) / 2;
                cy = (cy + y2) / 2;
                point(cx, cy);
                break;
            case 2:
                cx = (cx + x3) / 2;
                cy = (cy + y3) / 2;
                point(cx, cy);
                break;
        }
    }
    updatePixels();
}