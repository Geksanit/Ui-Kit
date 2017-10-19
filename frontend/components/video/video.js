
var play = function (element) {
    element.parentElement.parentElement.getElementsByTagName('video')[0].play();
    element.parentElement.parentElement.getElementsByClassName('video__title')[0].classList.toggle('video__title-hide');
    element.classList.toggle('video__button-pause');
};
var pause = function (element) {
    element.parentElement.parentElement.getElementsByTagName('video')[0].pause();
    element.parentElement.parentElement.getElementsByClassName('video__title')[0].classList.toggle('video__title-hide');
    element.classList.toggle('video__button-pause');
};
var full = function (element) {
    element.parentElement.parentElement.parentElement.classList.toggle('video__frame-full');
    element.parentElement.parentElement.classList.toggle('video-full');
    videoInput(element.previousElementSibling.children[2]);
};
window.videoClick = function (event){
    //console.log(event);
    var target = event.target;
    if(target.classList[0]=='video__button'){
        if(target.classList[2]!='video__button-pause'){play(target)}
        else{pause(target)};
    };
    if(target.classList[0]=='video__button-full'){full(target)};
    if(target.classList[0]=='video__input'){
        target.parentElement.parentElement.parentElement.getElementsByTagName('video')[0].currentTime = target.value;
        };

};
window.videoUpdate = function (event) {
    var target = event.target;
    var input = target.parentElement.getElementsByClassName('video__input')[0];
    input.attributes.max.value = target.duration;
    input.value = target.currentTime;
    videoInput(input);
};
//slider
window.videoInput = function(element){
    var value = element.value;

    var width = element.parentElement.clientWidth-20;
    var min = element.attributes.min.value;
    var max = element.attributes.max.value;
    element.previousElementSibling.style.width = width/(max-min)*(value-min)+1+'px';
};
/*window.sliderPercentageInput = function (event) {
    sliderPercentageChange(event.target);
};*/
/*
 https://16-lvl3-pdl.vimeocdn.com/01/2596/2/62980495/156181927.mp4?expires=1508065708&token=051659edd81b941ae3418
 https://16-lvl3-pdl.vimeocdn.com/01/2596/2/62980495/156181927.mp4?expires=1508072035&token=0fc8c817e5244efb39fab
 https://16-lvl3-pdl.vimeocdn.com/01/2596/2/62980495/156181927.mp4?expires=1508072164&token=01df9ab46b3f2cf2e6f4f
 https://16-lvl3-pdl.vimeocdn.com/01/2596/2/62980495/156181927.mp4?expires=1508072298&token=0494e9e1b1aa5024dddae
 */