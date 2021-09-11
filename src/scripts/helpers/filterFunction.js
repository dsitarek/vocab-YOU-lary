const filterBy = async (arr) => {
  const techSelected = document.querySelector('#techFilter') ? document.querySelector('#techFilter').value : document.querySelector('#communityTechFilter').value;
  let filteredTerms = null;
  if (techSelected !== 'all') {
    filteredTerms = arr.filter((term) => term.tech === techSelected);
    return (filteredTerms);
  } filteredTerms = arr;
  return filteredTerms;
};

export default filterBy;
