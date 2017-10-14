
import './index.styl';
import './components/slider/slider'
import './components/search/search'
import './components/video/video'
import './components/map/map'
import './components/calendar/calendar'
import './components/standart-button/standart-button'

window.Test = function () {
    var elem = document.getElementsByClassName('slider-percentage')[0]
    console.log(elem.shadowRoot);
    //var root = elem.createShadowRoot();
    //root.innerHTML = "<p>Привет из подполья!</p>";
}


