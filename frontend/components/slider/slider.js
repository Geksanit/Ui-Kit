/* global $ */
import convertRemToPixels from '../../scripts/convertRemToPixels';

class Slider {
  constructor(block) {
    this.$block = $(block);
    this.$element = this.$block.find('.js-slider__input');
    this.$view = this.$block.find('.js-slider__view');
    this.$line = this.$block.find('.js-slider__line');
    this.sliderChange.call(this);
    this.$element.on('input.slider', this.sliderChange.bind(this));
    $(window).resize(this.sliderChange.bind(this));
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
$('.js-slider').each((index, element) => sliders.push(new Slider(element)));
