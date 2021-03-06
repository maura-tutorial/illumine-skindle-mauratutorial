var c = document.getElementById('canv'),
  $ = c.getContext('2d'),
  w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  t = 0, num = 850, 
  s, a, b, u=0,
  x, y, _x, _y,
  _t = 1 / 60; 

var anim = function() {
  $.globalCompositeOperation = 'source-over';
  $.fillStyle = 'hsla(0, 0%, 0%, .5)';
  $.fillRect(0, 0, w, h);
    $.globalCompositeOperation = 'lighter';
  for (var i = 0; i < 1; i++) {
    x = 0; _u = (u/4)+i, col = u +(_u/8); 
    $.beginPath();
    for (var j = 0; j < num; j++) {
      x -= .312 * Math.sin(15);
      y = x * Math.sin(i + 2.5 * t + x /15)/9;
      _x = x * Math.cos(b) - y * Math.sin(b);
      _y = x * Math.sin(b) + y * Math.cos(b);
      b = (j*22) * Math.PI /20.9;
      $.arc(w / 2- _x, h / 2 -_y, .5, 0, Math.PI*2);
      $.lineWidth = .1;
    }
    var g = $.createLinearGradient(w / 2 + _x, h / 2 + _y, 1, w / 2 + _x, h / 2 + _y);
    g.addColorStop(0.1, 'hsla('+col+',90%,50%,1)');
    g.addColorStop(0.5, 'hsla('+_u+',95%,50%,1)');
    g.addColorStop(1, 'hsla(0,0%,0%,1)'); 
    $.strokeStyle = g;
    $.stroke();
  }
  t += _t;
  u-=.2;
  window.requestAnimationFrame(anim);
};
anim();

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);
