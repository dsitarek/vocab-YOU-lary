const buildDom = () => {
  document.querySelector('#app').innerHTML = `
        <div id="navContainer"></div>
        <div id="pageContainer">
          <div id="titleContainer">
            <div id="dropdownContainer">
            </div>
          </div>
          <div id="formContainer"></div>
          <div id="cardContainer"></div>
        </div>`;
};

export default buildDom;
