const sortBy = (arr) => {
  const sortMethod = document.querySelector('#sortDropdown').value;
  let sortedTerms = null;
  if (sortMethod === 'A-Z') {
    sortedTerms = (arr).sort((a, b) => ((a.title > b.title) && 1) || -1);
  } if (sortMethod === 'newest') {
    sortedTerms = (arr).sort((a, b) => a.timestamp.localeCompare(b.timestamp));
  } if (sortMethod === 'oldest') {
    sortedTerms = (arr).sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  }
  return sortedTerms;
};

export default sortBy;
