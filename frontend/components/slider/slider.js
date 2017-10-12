//slider

var sliderChange = function(element){
    var value = element.value;
    element.previousSibling.innerText = value;

    var width = element.parentElement.clientWidth-20;
    var min = element.attributes.min.value;
    var max = element.attributes.max.value;
    element.previousSibling.style.left = width/(max-min)*(value-min)-8.75+'px';
};
window.sliderInput = function (event) {
    sliderChange(event.target);
};
var sliderInit = function () {
    var elements = document.querySelectorAll('input.slider');
    for(var i=0; i<elements.length; i++){
        sliderChange(elements[i]);
    }
}();

//slider-percentage
var sliderPercentageChange = function(element){
    var value = element.value;

    var width = element.parentElement.clientWidth-20;
    var min = element.attributes.min.value;
    var max = element.attributes.max.value;
    element.previousSibling.style.width = width/(max-min)*(value-min)+1+'px';
};
window.sliderPercentageInput = function (event) {
    sliderPercentageChange(event.target);
};
var sliderPercentageInit = function(){
    var elements = document.querySelectorAll('input.slider-percentage');
    for(var i=0; i<elements.length; i++){
        sliderPercentageChange(elements[i]);
    }
}();