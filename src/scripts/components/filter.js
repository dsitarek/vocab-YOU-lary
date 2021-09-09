import { getFilters } from '../data/filterData';

const filterDropdown = async () => {
  const arrOfFilters = await getFilters();
  let domString = '<select id="techFilter" class="form-select" aria-label="Default select example">';
  arrOfFilters.forEach((tech) => { domString += `<option value="${tech}">${tech}</option>`; });

  domString += '</ul>';

  document.querySelector('#dropdownContainer').innerHTML = domString;
};

export default filterDropdown;
