const canvas = document.getElementById('mainCanvas');
const ctx    = canvas  .getContext('2d')            ;

export let penX    = 0;
export let penY    = 0;
export let penDown = false;
export const pen = {

  // pen down
  // start drawing
  down() {
    ctx.beginPath();
    ctx.moveTo(penX, penY);
  },

  // pen up
  // end drawing
  up() {
    ctx.stroke();
    ctx.closePath();
  },

  // go to
  // draws only when pen down
  goTo(x, y) {
    penX = x;
    penY = y;
    if (penDown) ctx.lineTo(penX, penY)
    else         ctx.moveTo(penX, penY)
  },

  // sets pen size and color
  set(size,color) {
    ctx.strokeStyle = color;
    ctx.lineWidth   = size ;
  },

  // resize canvas to fit browser
  resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },

  // draws rounded rectangle
  rectangle(width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(penX + radius, penY);
      ctx.lineTo(penX + width - radius, penY);
      ctx.arcTo (penX + width, penY, penX + width, penY + radius);
      ctx.lineTo(penX + width, penY + height - radius);
      ctx.arcTo (penX + width, penY + height, penX + width - radius, penY + height);
      ctx.lineTo(penX + radius, penY + height);
      ctx.arcTo (penX, penY + height, penX, penY + height - radius);
      ctx.lineTo(penX, penY + radius);
      ctx.arcTo (penX, penY, penX + radius, penY);
      ctx.closePath();
  }
};
