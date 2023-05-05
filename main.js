function setup() {
    canvas = createCanvas(720, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(720,350);
    video.hide();
  }