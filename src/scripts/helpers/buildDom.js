const buildDom = () => {
  document.querySelector('#app').innerHTML = `
        <div id="navContainer"></div>
        <div id="formContainer"></div>
        <div id="cardContainer"></div>`;
};

export default buildDom;
