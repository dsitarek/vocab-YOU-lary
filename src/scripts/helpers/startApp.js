import renderNavbar from '../domComponents/navbar';
import buildDom from './buildDom';
import logoutButton from '../components/logoutButton';
import showTerms from '../components/terms';
import { getTerms } from '../data/termsData';
import navEvents from '../events/navEvents';
import {
  domClickEvents, domSubmitEvents, filterEvent, searchEvent
} from '../events/domEvents';
import filterDropdown from '../components/filter';
import sortDropdown from './sortDropdown';
import sortBy from '../components/sortFunction';

const startApp = (user) => {
  buildDom();
  renderNavbar();
  logoutButton(user.displayName);
  navEvents(user.uid);
  domClickEvents(user.uid);
  domSubmitEvents(user.uid);
  filterDropdown();
  filterEvent(user.uid);
  sortDropdown();
  searchEvent(user.uid);
  getTerms(user.uid).then((terms) => sortBy(terms)).then(showTerms);
};

export default startApp;
