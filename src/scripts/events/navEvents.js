import { getTerms } from '../data/termsData';
import addTermForm from '../domComponents/addTermForm';
import showTerms from '../components/terms';

const navEvents = (uid) => {
  document.querySelector('#addTerm').addEventListener('click', () => addTermForm(uid));

  document.querySelector('#homeLink').addEventListener('click', () => getTerms(uid).then(showTerms));
};

export default navEvents;
