

var mapLoad = function(element) {
    var point = {//координаты
        lat : Number(element.getAttribute('data-lat')),
        lng : Number(element.getAttribute('data-lng'))
    };
    var map = new google.maps.Map(element, {
        zoom: 14,
        center: point,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var image = 'img/marker.png';
    var marker = new google.maps.Marker({
        position: point,
        map: map,
        icon: image,
    });
};
var mapChange = function(element) {
    var point = {
        lat : Number(element.getAttribute('data-lat')),
        lng : Number(element.getAttribute('data-lng'))
    };
    var xhr = new XMLHttpRequest();
    var src = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+point.lat+','+point.lng+'&key=AIzaSyBaRq2hOoLSW3DaHWf2aBP_xFlXdtYH0Oo';
    xhr.open('GET', src, true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;

        if (this.status != 200) {
            // обработать ошибку
            element.nextElementSibling.children[1].innerHTML = 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался');
            return;
        }
        result = JSON.parse(this.response);
        address = result.results[0].address_components[0].short_name+' '+result.results[0].address_components[1].short_name;
        address+=', '+result.results[0].address_components[3].short_name+', '+result.results[0].address_components[4].short_name;
        //address = result.results[0].formatted_address;
        //console.log(result.results[0]);
        //console.log(address);
        element.nextElementSibling.children[1].innerHTML = address.toUpperCase();
    }
};
window.initMap = function () {
    var elements = document.querySelectorAll('.map__element');
    for(var i=0; i<elements.length; i++){
        mapLoad(elements[i]);
        mapChange(elements[i]);
    }
};
