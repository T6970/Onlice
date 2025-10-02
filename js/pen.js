const canvas = document.getElementById('mainCanvas');
const ctx    = canvas  .getContext('2d')            ;

export let penX = 0;
export let penY = 0;
export const pen = {
  
  penDown() {
    ctx.beginPath();
    ctx.moveTo(penX, penY);
  },
  
  penUp() {
    ctx.stroke();
    ctx.beginPath();
  },
  
  goTo(x, y) {
    penX = x;
    penY = y;
    ctx.lineTo(penX, penY)
  },
  
  setPen(size,color) {
    ctx.strokeStyle = color;
    ctx.lineWidth   = size ;
  },

  resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
};
