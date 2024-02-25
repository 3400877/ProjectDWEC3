const canvas = document.getElementById("my-canvas");
const context = canvas.getContext('2d');

const pixelData = context.createImageData(canvas.width, canvas.height);

const drawPixel = (x, y) => {
  context.beginPath();
  context.fillStyle = "black";
  context.arc(x, y, 2, 0, 2 * Math.PI);
  context.fill();
};
let lastX, lastY;

canvas.addEventListener("mousemove", (event) => {
  if (event.buttons === 1) {
    const x = Math.floor(event.offsetX);
    const y = Math.floor(event.offsetY);
    if (lastX && lastY) {
      // Interpolate between last and current position
      const steps = Math.max(Math.abs(x - lastX), Math.abs(y - lastY));
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const interpolatedX = Math.floor(lastX + t * (x - lastX));
        const interpolatedY = Math.floor(lastY + t * (y - lastY));
        drawPixel(interpolatedX, interpolatedY);
      }
    }
    lastX = x;
    lastY = y;
  }
});