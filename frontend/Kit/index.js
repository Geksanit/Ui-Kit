
import './index.styl';
import '../all_included'

window.Test = function () {
    var elem = document.getElementsByClassName('slider-percentage')[0]
    console.log(elem.shadowRoot);
    //var root = elem.createShadowRoot();
    //root.innerHTML = "<p>Привет из подполья!</p>";
}


