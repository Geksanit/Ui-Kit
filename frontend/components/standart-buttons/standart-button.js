// ripple effect
const buttonClick = function buttonClick(event) {
  const div = document.createElement('div');
  div.id = 'ripple';
  div.style.top = event.pageY - 25 + 'px';
  div.style.left = event.pageX - 25 + 'px';

  document.body.appendChild(div);
  setTimeout(() => { document.body.removeChild(div); }, 550);
};

(function initButtons() {
  const elements = document.querySelectorAll('.standart-button');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].onclick = buttonClick;
  }
}());
