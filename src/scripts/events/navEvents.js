import { getTerms, getCommunityTerms } from '../data/termsData';
import addTermForm from '../domComponents/addTermForm';
import showTerms from '../components/terms';
import sortBy from '../components/sortFunction';

const navEvents = (uid) => {
  document.querySelector('#addTerm').addEventListener('click', () => {
    addTermForm(uid);
    if (document.getElementById('communitytechFilter')) document.getElementById('communitytechFilter').setAttribute('id', 'techFilter');
    if (document.getElementById('communitysortDropdown'))document.getElementById('communitysortDropdown').setAttribute('id', 'sortDropdown');
  });

  document.querySelector('#homeLink').addEventListener('click', async () => {
    await getTerms(uid).then((terms) => sortBy(terms)).then((arr) => showTerms(arr, uid));
    if (document.getElementById('communitytechFilter')) document.getElementById('communitytechFilter').setAttribute('id', 'techFilter');
    if (document.getElementById('communitysortDropdown')) document.getElementById('communitysortDropdown').setAttribute('id', 'sortDropdown');
  });

  document.querySelector('#community').addEventListener('click', async () => {
    await getCommunityTerms().then((arr) => showTerms(arr, uid));
    if (document.getElementById('techFilter')) document.getElementById('techFilter').setAttribute('id', 'communityTechFilter');
    if (document.getElementById('sortDropdown')) document.getElementById('sortDropdown').setAttribute('id', 'communitySortDropdown');
  });
};

export default navEvents;
