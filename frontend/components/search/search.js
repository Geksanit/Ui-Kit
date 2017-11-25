// search
const searchClick = function searchClick({ target }) {
  target.className = '';
  target.attributes.placeholder.value = 'Search';
};

(function initSearch() {
  const elements = document.querySelectorAll('.js-search');
  elements.forEach((element) => {
    element.children[0].onfocus = searchClick;
  });
}());
