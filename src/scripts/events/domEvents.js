import {
  createTerm, deleteTerm, editTerm, getSingleTerm
} from '../data/termsData';
import showTerms from '../components/terms';
import addTermForm from '../domComponents/addTermForm';
import { getFilteredTerms } from '../data/filterData';

const domClickEvents = (uid) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-term')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteTerm(firebaseKey, uid).then(showTerms);
    }
    if (e.target.id.includes('edit-term')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleTerm(firebaseKey).then(addTermForm);
    }
  });
};

const domSubmitEvents = (uid) => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    if (e.target.id.includes('newTermForm')) {
      const termObj = {
        title: document.querySelector('#title').value,
        tech: document.querySelector('#tech').value,
        definition: document.querySelector('#definition').value,
        public: document.querySelector('#public').checked,
        timestamp: new Date(),
        user_id: uid
      };
      createTerm(termObj).then(showTerms);
    }

    if (e.target.id.includes('updateTermForm')) {
      const [, firebaseKey] = e.target.id.split('--');
      const termObj = {
        title: document.querySelector('#title').value,
        tech: document.querySelector('#tech').value,
        definition: document.querySelector('#definition').value,
        public: document.querySelector('#public').checked,
        user_id: uid,
        firebaseKey
      };
      editTerm(termObj).then(showTerms);
    }
  });
};

const filterEvent = () => {
  document.querySelector('#techFilter').addEventListener('change', () => {
    const techSelected = document.querySelector('#techFilter').value;
    getFilteredTerms(techSelected).then(showTerms);
  });
};

// const filterEvent = () => {
//   document.querySelector('#techFilter').addEventListener('change', () => {
//     const techSelected = document.querySelector('#techFilter').value;
//     getFilteredTerms(techSelected).then(showTerms);
//   });
// };

export { domClickEvents, domSubmitEvents, filterEvent };
