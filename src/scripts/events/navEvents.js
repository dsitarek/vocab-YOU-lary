import { getTerms, getCommunityTerms } from '../data/termsData';
import addTermForm from '../domComponents/addTermForm';
import showTerms from '../components/terms';

const navEvents = (uid) => {
  document.querySelector('#addTerm').addEventListener('click', () => addTermForm(uid));

  document.querySelector('#homeLink').addEventListener('click', () => getTerms(uid).then((arr) => showTerms(arr, uid)));

  document.querySelector('#community').addEventListener('click', async () => {
    await getCommunityTerms().then((arr) => showTerms(arr, uid));
    document.getElementById('dropdownContainer').style.display = 'none';
    document.getElementById('sortContainer').style.display = 'none';
  });
};

export default navEvents;
