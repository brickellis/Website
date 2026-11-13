// Drives <canvas id="wave"> in essay.md.
(function () {
  var canvas = document.getElementById("wave");
  if (!canvas) return;

  var ctx = canvas.getContext("2d");
  var w = canvas.width;
  var h = canvas.height;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function waveY(x, t) {
    return h / 2 + Math.sin((x / w) * Math.PI * 4 - t) * h * 0.3;
  }

  function draw(t) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, w, h);

    // axis
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    // wave
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (var x = 0; x <= w; x++) {
      if (x === 0) ctx.moveTo(x, waveY(x, t));
      else ctx.lineTo(x, waveY(x, t));
    }
    ctx.stroke();

    // dot riding the middle of the wave
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(w / 2, waveY(w / 2, t), 5, 0, Math.PI * 2);
    ctx.fill();
  }

  function loop(ms) {
    draw(ms / 1000);
    requestAnimationFrame(loop);
  }

  if (reduceMotion) draw(0);
  else requestAnimationFrame(loop);
})();
