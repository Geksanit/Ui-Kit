// slider
const sliderChange = function sliderChange(element) {
  const { value } = element;
  const width = element.parentElement.clientWidth - 20;
  const min = element.attributes.min.value;
  const max = element.attributes.max.value;
  element.previousElementSibling.innerText = value;
  element.previousElementSibling.style.left = (((width / (max - min)) * (value - min)) - 8.75) + 'px';
};

const sliderInput = function sliderInput(event) {
  sliderChange(event.target);
};

(function initSliders() {
  const elements = document.querySelectorAll('.js-slider__input');
  for (let i = 0; i < elements.length; i += 1) {
    sliderChange(elements[i]);
    elements[i].oninput = sliderInput;
  }
}());
