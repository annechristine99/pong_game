class Vec
{
    constructor(x = 0, y = 0)
    {
      this.x = x;
      this.y = y;
    }
}

class Rect
{
    constructor(w, h)
    {
      this.pos = new Vec;
      this.size = new Vec(w, h);
    }
}

//class Ball extends Rect





const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);

context.fillStyle = 'orange';
context.fillRect(0, 0, 10, 10);
