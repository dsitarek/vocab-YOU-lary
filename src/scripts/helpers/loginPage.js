import loginButton from '../components/loginButton';
import renderNavbar from '../components/navbar';
import buildDom from '../components/buildDom';

const loginPage = () => {
  buildDom();
  renderNavbar();
  loginButton();
  document.getElementById('titleContainer').style.display = 'none';
};

export default loginPage;
