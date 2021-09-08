import { createTerm } from '../data/termsData';
import showTerms from '../components/terms';

const domClickEvents = (uid) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    console.log(uid);
    console.log(e.target.id);
  });
};

const domSubmitEvents = (uid) => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    if (e.target.id.includes('termForm')) {
      const termObj = {
        title: document.querySelector('#title').value,
        tech: document.querySelector('#tech').value,
        definition: document.querySelector('#definition').value,
        public: document.querySelector('#public').value,
        timestamp: '',
        user_id: uid
      };
      createTerm(termObj).then(showTerms);
    }
  });
};

export { domClickEvents, domSubmitEvents };
