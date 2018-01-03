/* global $ */
import autobind from '../../scripts/autobind';

class Video {
  constructor(element) {
    this.$element = $(element);
    autobind(this);
    this.$video = this.$element.find('video').on('timeupdate.video', this.handleUpdateVideo);
    this.$text = this.$element.find('.video__text');
    this.$button = this.$element.find('.video__button').on('click.video', this.handleButton);
    this.$buttonFull = this.$element.find('.video__button-full').on('click.video', this.handleButtonFull);
    this.$slider = this.$element.find('.video__slider-mix input').on('input.video', this.handleSlider);
  }
  changeSlider() {
    this.$slider.triggerHandler('input.slider');
  }
  setPlay() {
    this.$video[0].play();
    this.$text.toggleClass('video__text_hide');
    this.$button.toggleClass('video__button_play');
  }
  setPause() {
    this.$video[0].pause();
    this.$text.toggleClass('video__text_hide');
    this.$button.toggleClass('video__button_play');
  }
  setFull() {
    this.$element.toggleClass('video_full');
  }
  handleButton({ target }) {
    const $target = $(target);
    if ($target.hasClass('video__button_play')) this.setPause();
    else this.setPlay();
  }
  handleButtonFull() {
    this.setFull();
    this.changeSlider();
  }
  handleSlider({ target }) {
    this.$video[0].currentTime = target.value;
  }
  handleUpdateVideo({ target }) {
    this.$slider.prop('max', target.duration);
    this.$slider.prop('value', target.currentTime);
    this.changeSlider();
  }
}

let elements = [];
$('.js-video').each((index, element) => elements.push(new Video(element)));
