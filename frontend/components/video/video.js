
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