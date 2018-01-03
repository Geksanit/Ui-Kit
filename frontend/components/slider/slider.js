/* global $ */
import convertRemToPixels from '../../scripts/convertRemToPixels';

class Slider {
  constructor(element) {
    this.$element = $(element);
    this.$parent = this.$element.parent();
    this.$view = this.$parent.find('.slider__view');
    this.$line = this.$parent.find('.slider__line');
    this.sliderChange.call(this);
    this.$element.on('input.slider', this.sliderChange.bind(this));
  }
  sliderChange() {
    const { $element } = this;
    const width = $element.width() - convertRemToPixels(1.25);
    const value = $element.val();
    const min = this.$element.prop('min');
    const max = this.$element.prop('max');
    const newLeft = ((width / (max - min)) * (value - min)) - convertRemToPixels(0.625);
    this.$view.text(value).css({ left: newLeft });
    const newWidth = ((width / (max - min)) * (value - min)) + convertRemToPixels(0.625);
    this.$line.width(newWidth);
  }
}

let sliders = [];
$('.js-slider__input').each((index, element) => sliders.push(new Slider(element)));
