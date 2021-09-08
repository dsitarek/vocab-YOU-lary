import clearDom from '../helpers/clearDom';

const showTerms = (arr) => {
  clearDom();
  let domString = '';
  arr.forEach((term) => {
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${term.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${term.tech}</h6>
    <p class="card-text">${term.definition}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`;
    document.querySelector('#cardContainer').innerHTML = domString;
  });
};

export default showTerms;
