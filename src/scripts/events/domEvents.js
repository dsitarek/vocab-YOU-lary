import {
  createTerm, deleteTerm, editTerm, getSingleTerm, getSearchedTerm
} from '../data/termsData';
import showTerms from '../components/terms';
import addTermForm from '../domComponents/addTermForm';
import { getFilteredTerms } from '../data/filterData';
import sortBy from '../components/sortFunction';

const domClickEvents = (uid) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-term')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteTerm(firebaseKey, uid).then((arr) => showTerms(arr, uid));
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
      createTerm(termObj).then((arr) => showTerms(arr, uid));
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
      editTerm(termObj).then((arr) => showTerms(arr, uid));
    }
  });
};

const filterEvent = (uid) => {
  document.querySelector('#app').addEventListener('change', (e) => {
    if (e.target.id.includes('techFilter') || e.target.id.includes('sortDropdown')) {
      const techSelected = document.querySelector('#techFilter').value;
      getFilteredTerms(uid, techSelected).then((arr) => sortBy(arr)).then((arr) => showTerms(arr, uid));
    }
  });
};

const searchEvent = (uid) => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    if (e.target.id.includes('searchForm')) {
      const searchValue = document.querySelector('#searchBar').value;
      e.preventDefault();
      getSearchedTerm(uid, searchValue).then((arr) => sortBy(arr)).then((arr) => showTerms(arr, uid));
      document.querySelector('#searchForm').reset();
    }
  });
};

export {
  domClickEvents, domSubmitEvents, filterEvent, searchEvent
};
