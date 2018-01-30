/* global google, marker, $ */

class Map {
  constructor(block) {
    this.$block = $(block);
    this.$element = this.$block.find('.js-map__element');
    this.$address = this.$block.find('.js-map__address');
    this.loadMap();
    this.loadData();
  }
  loadMap() {
    const point = { // координаты
      lat: Number(this.$element.attr('data-lat')),
      lng: Number(this.$element.attr('data-lng')),
    };
    const map = new google.maps.Map(this.$element[0], {
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
  }
  loadData() {
    const { $element } = this;
    const point = {
      lat: Number($element.attr('data-lat')),
      lng: Number($element.attr('data-lng')),
    };
    const xhr = new XMLHttpRequest();
    const src = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${point.lat},${point.lng}&key=AIzaSyBaRq2hOoLSW3DaHWf2aBP_xFlXdtYH0Oo`;
    xhr.open('GET', src, true);
    xhr.send();
    xhr.onreadystatechange = () => {
      if (this.readyState !== 4) return;
      if (this.status !== 200) {
        // обработать ошибку
        this.$address.text(`ошибка: ${this.status ? this.statusText : 'запрос не удался'}`);
        return;
      }
      const result = JSON.parse(this.response);
      let address = `${result.results[0].address_components[0].short_name} ${result.results[0].address_components[1].short_name}`;
      address = `${address}, ${result.results[0].address_components[3].short_name}, ${result.results[0].address_components[4].short_name}`;
      this.$address.text(address);
    };
  }
}

window.initMap = function init() {
  const maps = [];
  $('.js-map').each((index, element) => maps.push(new Map(element)));
};
