//ripple effect
document.buttonClick = function (event) {
  var div = document.createElement('div');
  div.id = 'ripple';
  div.style.top = event.y-25+'px';
  div.style.left = event.x-25+'px';

  document.body.appendChild(div);
  setTimeout(function(){document.body.removeChild(div)}, 550);
};