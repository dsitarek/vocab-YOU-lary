import renderNavbar from '../domComponents/navbar';
import buildDom from './buildDom';
import logoutButton from '../components/logoutButton';
import showTerms from '../components/terms';
import { getTerms } from '../data/termsData';
import navEvents from '../events/navEvents';
import { domClickEvents, domSubmitEvents } from '../events/domEvents';

const startApp = (user) => {
  buildDom();
  renderNavbar();
  logoutButton();
  navEvents();
  domClickEvents(user.uid);
  domSubmitEvents(user.uid);
  getTerms().then((terms) => showTerms(terms));
};

export default startApp;
