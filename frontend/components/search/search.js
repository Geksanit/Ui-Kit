// search
const modNotFoundRemove = function modNotFoundRemove({ target }) {
  target.className = 'search__input';
  target.attributes.placeholder.value = 'Search';
};

(function initSearch() {
  const elements = document.querySelectorAll('.js-search');
  elements.forEach((element) => {
    element.children[0].onfocus = modNotFoundRemove;
  });
}());
