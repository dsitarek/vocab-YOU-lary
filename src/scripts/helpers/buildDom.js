const buildDom = () => {
  document.querySelector('#app').innerHTML = `
        <div id="navContainer"></div>
        <div id="pageContainer">
          <div id="titleContainer">
            <div class="dropdown-label">Language:</div>
            <div id="dropdownContainer"></div>
            <div class="dropdown-label">Sort:</div>
            <div id="sortContainer"></div>
          </div>
          <div id="formContainer"></div>
          <div id="cardContainer"></div>
          <div id="flashContainer"></div>
        </div>`;
};

export default buildDom;
