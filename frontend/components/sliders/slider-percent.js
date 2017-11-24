// slider-percentage
const sliderPercentageChange = function sliderPercentageChange(element) {
  const { value } = element;
  const width = element.parentElement.clientWidth - 20;
  const min = element.attributes.min.value;
  const max = element.attributes.max.value;
  element.previousElementSibling.style.width = (((width / (max - min)) * (value - min)) + 1) + 'px';
};

const sliderPercentageInput = function sliderPercentageInput(event) {
  sliderPercentageChange(event.target);
};

(function initSliders() {
  const elements = document.querySelectorAll('input.js-slider-percent__input');
  for (let i = 0; i < elements.length; i += 1) {
    sliderPercentageChange(elements[i]);
    elements[i].oninput = sliderPercentageInput;
  }
}());

