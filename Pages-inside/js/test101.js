var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var dino = {
  x: 50,
  y: 150,
  width: 50,
  height: 50,
  draw: function() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

var cactus = {
  x: 500,
  y: 150,
  width: 20,
  height: 50,
  draw: function() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dino.draw();
  cactus.draw();
  requestAnimationFrame(draw);
}

draw();