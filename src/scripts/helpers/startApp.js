import renderNavbar from '../domComponents/navbar';
import buildDom from './buildDom';
import logoutButton from '../components/logoutButton';
import showTerms from '../components/terms';
import { getTerms } from '../data/termsData';
import navEvents from '../events/navEvents';
import { domClickEvents, domSubmitEvents, filterEvent } from '../events/domEvents';
import filterDropdown from '../components/filter';

const startApp = (user) => {
  buildDom();
  renderNavbar();
  logoutButton(user.displayName);
  navEvents(user.uid);
  domClickEvents(user.uid);
  domSubmitEvents(user.uid);
  filterDropdown();
  filterEvent(user.uid);
  getTerms(user.uid).then((terms) => showTerms(terms));
};

export default startApp;
