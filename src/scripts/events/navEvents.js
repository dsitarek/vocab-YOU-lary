import { getTerms, getCommunityTerms, getFlashCard } from '../data/termsData';
import addTermForm from '../domComponents/addTermForm';
import showTerms from '../components/terms';
import sortBy from '../components/sortFunction';
import flashCard from '../components/flashCard';

const navEvents = (uid) => {
  document.querySelector('#addTerm').addEventListener('click', () => {
    addTermForm(uid);
    if (document.getElementById('communityTechFilter')) document.getElementById('communityTechFilter').setAttribute('id', 'techFilter');
    if (document.getElementById('communitySortDropdown'))document.getElementById('communitySortDropdown').setAttribute('id', 'sortDropdown');
  });

  document.querySelector('#homeLink').addEventListener('click', async () => {
    await getTerms(uid).then((terms) => sortBy(terms)).then((arr) => showTerms(arr, uid));
    if (document.getElementById('communityTechFilter')) document.getElementById('communityTechFilter').setAttribute('id', 'techFilter');
    if (document.getElementById('communitySortDropdown')) document.getElementById('communitySortDropdown').setAttribute('id', 'sortDropdown');
  });

  document.querySelector('#community').addEventListener('click', async () => {
    await getCommunityTerms().then((arr) => showTerms(arr, uid));
    if (document.getElementById('techFilter')) document.getElementById('techFilter').setAttribute('id', 'communityTechFilter');
    if (document.getElementById('sortDropdown')) document.getElementById('sortDropdown').setAttribute('id', 'communitySortDropdown');
  });

  document.querySelector('#flashCards').addEventListener('click', async () => {
    await getFlashCard(uid).then((card) => flashCard(card));
    document.getElementById('titleContainer').style.display = 'none';
  });
};

export default navEvents;
