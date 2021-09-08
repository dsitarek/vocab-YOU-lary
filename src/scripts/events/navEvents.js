import addTermForm from '../domComponents/addTermForm';

const navEvents = (uid) => {
  document.querySelector('#addTerm').addEventListener('click', () => addTermForm(uid));
};

export default navEvents;
