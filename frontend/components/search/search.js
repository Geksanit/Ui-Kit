/* global $ */

class Search {
  constructor(element) {
    this.$element = $(element).one('focus', this.removeNotFoundMod);
  }
  removeNotFoundMod({ target }) {
    $(target).removeClass('search__input_notfound').attr({ placeholder: 'Search' });
  }
}
let elements = [];
$('.js-search__input').each((index, element) => elements.push(new Search(element)));
