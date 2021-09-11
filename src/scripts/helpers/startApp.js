import renderNavbar from '../components/navbar';
import buildDom from '../components/buildDom';
import logoutButton from '../components/logoutButton';
import showTerms from '../components/terms';
import { getTerms } from '../data/termsData';
import navEvents from '../events/navEvents';
import {
  domClickEvents, domSubmitEvents, filterEvent, searchEvent
} from '../events/domEvents';
import filterDropdown from '../components/filterDropdown';
import sortDropdown from '../components/sortDropdown';
import sortBy from './sortFunction';

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
  getTerms(user.uid).then((terms) => sortBy(terms)).then((arr) => showTerms(arr, user.uid));
  console.warn(user ? user.uid : null);
};

export default startApp;
