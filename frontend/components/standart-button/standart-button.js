// ripple effect
const rippleEffect = function rippleEffect(event) {
  const div = document.createElement('div');
  div.id = 'ripple';
  div.style.top = `${event.pageY - 25}px`;
  div.style.left = `${event.pageX - 25}px`;

  document.body.appendChild(div);
  setTimeout(() => { document.body.removeChild(div); }, 550);
};

(function initButtons() {
  const elements = document.querySelectorAll('.standart-button');
  elements.forEach((element) => {
    element.onclick = rippleEffect;
  });
}());
