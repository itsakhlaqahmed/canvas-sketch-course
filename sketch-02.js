const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');


const settings = {
  dimensions: [ 1080, 1080 ]
};


// const colors = ['#1c1b1c', '#b042f5', '#42ddf5', '#626906', '#4287f5', '#d742f5', '#f54842', '#f58442', '#f5cb42', '#bcf542', '#42f554', '#42f5b3']

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    const cx = width * .5;
    const cy = width * .5;

    const w = width * .01;
    const h = width * .1;
    let x,y;

    const  num = 12;
    const radius = width * .3;

    for (let i = 0; i<12; i++){
      const slice = math.degToRad(360/num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x,y);
      context.rotate(-angle);  
      context.scale(random.range(1, 3), 1);

      context.beginPath();
      context.rect(-w * .5, -h * .5, w, h);
      context.fill();
      context.restore();
    }

  }
  };

canvasSketch(sketch, settings);
