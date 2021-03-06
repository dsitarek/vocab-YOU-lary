import clearDom from '../helpers/clearDom';

const showTerms = (arr, uid) => {
  clearDom();
  let domString = '';
  arr.forEach((term) => {
    domString += `<div class="card term-card">
  <div class="card-body">
    <h5 class="card-title">${term.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${term.tech}</h6>
    <p class="card-text">${term.definition}</p>
    ${term.user_id === uid ? `<i class="btn btn-danger fa fa-trash-alt" id="delete-term--${term.firebaseKey}"></i>
    <i class="btn btn-success far fa-edit" id="edit-term--${term.firebaseKey}"></i>` : `<i class="btn btn-success far fa-copy" id="copy-term--${term.firebaseKey}"></i>`}
  </div>
</div>`;
  });
  document.querySelector('#cardContainer').innerHTML = domString;
  document.querySelector('#titleContainer').style.display = 'flex';
};

export default showTerms;
