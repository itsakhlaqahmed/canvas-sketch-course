const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * .01;

    const w = width * .10;
    const h = height * .10;
    const gap = width * .03;
    const ix = width * .17;
    const iy = width *  .17;

    const off = width * .02;

    let x,y;

    for (var i = 0; i < 5; i++){
        for (var j = 0; j < 5; j++){
            x = ix + (w + gap) * i
            y = iy + (h + gap) * j

            context.strokeStyle = 'white';
            context.beginPath();
            context.rect(x, y, w, h);
            context.stroke();

            if (Math.random() > .5){
                context.beginPath();
                context.rect(x + off / 2, y + off / 2 , w - off , h - off );
                context.stroke();
            }
        }
    }
  };
};

canvasSketch(sketch, settings);
