import loginButton from '../components/loginButton';
import renderNavbar from '../domComponents/navbar';
import buildDom from './buildDom';

const loginPage = () => {
  buildDom();
  renderNavbar();
  loginButton();
};

export default loginPage;
