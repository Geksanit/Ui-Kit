
const mapLoad = function mapLoad(element) {
  const point = { // координаты
    lat: Number(element.getAttribute('data-lat')),
    lng: Number(element.getAttribute('data-lng')),
  };
  const map = new google.maps.Map(element, {
    zoom: 14,
    center: point,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
  const image = 'img/marker.png';
  const marker = new google.maps.Marker({
    position: point,
    map: map,
    icon: image,
  });
};

const mapChange = function mapChange(element) {
  const point = {
    lat: Number(element.getAttribute('data-lat')),
    lng: Number(element.getAttribute('data-lng')),
  };
  const xhr = new XMLHttpRequest();
  const src = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + point.lat + ',' + point.lng + '&key=AIzaSyBaRq2hOoLSW3DaHWf2aBP_xFlXdtYH0Oo';
  xhr.open('GET', src, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) {
      // обработать ошибку
      element.nextElementSibling.children[1].innerHTML = 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался');
      return;
    }
    const result = JSON.parse(this.response);
    let address = result.results[0].address_components[0].short_name + ' ' + result.results[0].address_components[1].short_name;
    address += ', ' + result.results[0].address_components[3].short_name + ', ' + result.results[0].address_components[4].short_name;
    element.nextElementSibling.children[1].innerHTML = address.toUpperCase();
  };
};

window.initMap = function initMap() {
  const elements = document.querySelectorAll('.map__element');
  elements.forEach((element) => {
    mapLoad(element);
    mapChange(element);
  });
};
