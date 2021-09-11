import clearDom from '../helpers/clearDom';

const addTermForm = (obj = {}) => {
  clearDom();
  const domString = `<form id="${obj.firebaseKey ? `updateTermForm--${obj.firebaseKey}` : 'newTermForm'}" class="term-form">
  <div class="mb-3">
    <label for="term" class="form-label">Term</label>
    <input type="text" required class="form-control" id="title" aria-describedby="term" value="${obj.title || ''}" placeholder="Enter term name">
  </div>
  <div class="mb-3">
    <label for="tech" class="form-label">Tech/Language</label>
    <input type="text" required class="form-control" id="tech" aria-describedby="tech" placeholder="Enter tech/language" value="${obj.tech || ''}">
  </div>
  <div class="mb-3">
    <label for="definition" class="form-label">Definition</label>
    <textarea cols="80" rows="3" required class="form-control" id="definition" aria-describedby="definition" placeholder="Enter definition">${obj.definition || ''}</textarea>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="public" ${obj.public ? 'checked' : ''}>
    <label id="formCheck" class="form-check-label" for="public">Public</label>
  </div>
  <button type="submit" class="btn btn-primary" id="submit-term--${obj.firebaseKey}">Submit</button>
</form>`;

  document.querySelector('#formContainer').innerHTML = domString;
  document.getElementById('dropdownContainer').style.display = 'none';
  document.getElementById('sortContainer').style.display = 'none';
};

export default addTermForm;
