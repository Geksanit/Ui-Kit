/* global $ */
import convertRemToPixels from '../../scripts/convertRemToPixels';

class Button {
  constructor(element) {
    this.$element = $(element).on('click.standart-button', this.rippleEffect.bind(this));
    this.size = convertRemToPixels(2);
  }
  rippleEffect(event) {
    const $div = $('<div/>').attr('id', 'button__ripple');
    $div.css({ top: `${event.offsetY - this.size}px`, left: `${event.offsetX - this.size}px` });
    this.$element.append($div);
    setTimeout(() => $div.remove(), 550);
  }
}
let buttons = [];
$('.js-standart-button').each((index, element) => buttons.push(new Button(element)));
