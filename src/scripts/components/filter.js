import { getFilters } from '../data/filterData';

const filterDropdown = async () => {
  const arrOfFilters = await getFilters();
  let domString = '<select id="techFilter" class="form-select" aria-label="Default select example"><option value="all">All</option>';
  arrOfFilters.forEach((tech) => { domString += `<option value="${tech}">${tech}</option>`; });

  domString += '</select>';

  document.querySelector('#dropdownContainer').innerHTML = domString;
};

export default filterDropdown;
