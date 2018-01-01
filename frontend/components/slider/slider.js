// slider
function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const sliderChange = function sliderChange(element) {
  const { value } = element;
  const parent = element.parentElement;
  const width = element.clientWidth - convertRemToPixels(1.25);
  const min = element.attributes.min.value;
  const max = element.attributes.max.value;
  const view = parent.querySelector('.slider__view');
  if (view) {
    view.innerText = value;
    view.style.left = `${((width / (max - min)) * (value - min)) - convertRemToPixels(0.55)}px`;
  }
  const line = parent.querySelector('.slider__line');
  if (line) {
    line.style.width = `${((width / (max - min)) * (value - min)) + convertRemToPixels(0.2)}px`;
  }
};

const sliderInput = function sliderInput(event) {
  sliderChange(event.target);
};

(function initSliders() {
  const elements = document.querySelectorAll('.js-slider__input');
  elements.forEach((element) => {
    sliderChange(element);
    element.oninput = sliderInput;
  });
}());
