// двигает слайдер
const videoInput = function videoInput(element) {
  const { value } = element;
  const width = element.parentElement.clientWidth - 20;
  const min = element.attributes.min.value;
  const max = element.attributes.max.value;
  element.previousElementSibling.style.width = width / (max - min) * (value - min) + 1 + 'px';
};

const play = function play(element) {
  element.parentElement.parentElement.getElementsByTagName('video')[0].play();
  element.parentElement.parentElement.getElementsByClassName('video__title')[0].classList.toggle('video__title-hide');
  element.classList.toggle('video__button-pause');
};

const pause = function pause(element) {
  element.parentElement.parentElement.getElementsByTagName('video')[0].pause();
  element.parentElement.parentElement.getElementsByClassName('video__title')[0].classList.toggle('video__title-hide');
  element.classList.toggle('video__button-pause');
};

const full = function full(element) {
  element.parentElement.parentElement.classList.toggle('video_full');
  videoInput(element.previousElementSibling.children[2]);
};

const videoClick = function videoClick({ target }) {
  if (target.classList.contains('video__button')) {
    if (!target.classList.contains('video__button-pause')) play(target);
    else pause(target);
  }
  if (target.classList.contains('video__button-full')) full(target);
  if (target.classList.contains('js-video__slider-input')) {
    target.parentElement.parentElement.parentElement.getElementsByTagName('video')[0].currentTime = target.value;
  }
};

const videoUpdate = function videoUpdate({ target }) {
  const input = target.parentElement.getElementsByClassName('js-video__slider-input')[0];
  input.attributes.max.value = target.duration;
  input.value = target.currentTime;
  videoInput(input);
};

(function initVideos() {
  const blocks = document.querySelectorAll('.js-video');
  blocks.forEach((element) => {
    element.children[1].ontimeupdate = videoUpdate;
    element.children[2].onclick = videoClick;
  });
}());
