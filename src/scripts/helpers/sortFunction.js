const sortBy = (arr) => {
  const sortMethod = document.querySelector('#sortDropdown') ? document.querySelector('#sortDropdown').value : document.querySelector('#communitySortDropdown').value;
  let sortedTerms = null;
  if (sortMethod === 'A-Z') {
    sortedTerms = (arr).sort((a, b) => ((a.title.toLowerCase() > b.title.toLowerCase()) && 1) || -1);
  } if (sortMethod === 'newest') {
    sortedTerms = (arr).sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  } if (sortMethod === 'oldest') {
    sortedTerms = (arr).sort((a, b) => a.timestamp.localeCompare(b.timestamp));
  }
  return sortedTerms;
};

export default sortBy;
