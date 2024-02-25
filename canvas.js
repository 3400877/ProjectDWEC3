const canvas = document.getElementById("my-canvas");
const context = canvas.getContext('2d');

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

const signButton = document.getElementById("sign");


import { setItemPromise } from "./utils/local-storage.js";

signButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const dataURL = canvas.toDataURL();
  await setItemPromise('signature', dataURL);
})

const downloadButton = document.getElementById("down");

downloadButton.addEventListener("click", (event) => {
  event.preventDefault();
  const downloadLink = document.createElement("a");
  downloadLink.href = canvas.toDataURL();
  downloadLink.download = "canvas-signature.png";
  downloadLink.click();

  // Revoke the object URL
  URL.revokeObjectURL(downloadLink.href);
})