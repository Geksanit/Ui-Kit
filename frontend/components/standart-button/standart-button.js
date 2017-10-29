//ripple effect
document.buttonClick = function (event) {
  //console.log(event.screenY,event.pageY,event.y,event);
  var div = document.createElement('div');
  div.id = 'ripple';
  div.style.top = event.pageY-25+'px';
  div.style.left = event.pageX-25+'px';

  document.body.appendChild(div);
  setTimeout(function(){document.body.removeChild(div)}, 550);
};