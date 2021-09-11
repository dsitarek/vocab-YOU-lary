const sortDropdown = async () => {
  const domString = `<select id="sortDropdown" class="form-select sort-dropdown" aria-label="Default select example">
    <option value="A-Z">A-Z</option>
    <option value="newest">newest</option>
    <option value="oldest">oldest</option></select>`;

  document.querySelector('#sortContainer').innerHTML = domString;
};

export default sortDropdown;
