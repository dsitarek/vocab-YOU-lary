import {
  createTerm, deleteTerm, editTerm, getSingleTerm, getSearchedTerm, getTerms, getCommunityTerms
} from '../data/termsData';
import showTerms from '../components/terms';
import addTermForm from '../domComponents/addTermForm';
import sortBy from '../components/sortFunction';
import filterBy from '../helpers/filterFunction';

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

    if (e.target.id.includes('copy-term')) {
      const [, firebaseKey] = e.target.id.split('--');
      const copyTerm = async () => {
        const getTermToCopy = await getSingleTerm(firebaseKey);
        const termObj = {
          title: getTermToCopy.title,
          tech: getTermToCopy.tech,
          definition: getTermToCopy.definition,
          public: false,
          timestamp: new Date(),
          user_id: uid
        };
        return termObj;
      };
      copyTerm().then(createTerm).then((arr) => showTerms(arr, uid));
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
      getTerms(uid).then((arr) => filterBy(arr)).then((arr) => sortBy(arr)).then((arr) => showTerms(arr, uid));
    }
    if (e.target.id.includes('communityTechFilter') || e.target.id.includes('communitySortDropdown')) {
      getCommunityTerms().then((arr) => filterBy(arr)).then((arr) => sortBy(arr)).then((arr) => showTerms(arr, uid));
    }
  });
};

const searchEvent = (uid) => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    if (e.target.id.includes('searchForm')) {
      const searchValue = document.querySelector('#searchBar').value;
      e.preventDefault();
      getSearchedTerm(uid, searchValue).then((arr) => filterBy(arr)).then((arr) => sortBy(arr)).then((arr) => showTerms(arr, uid));
      document.querySelector('#searchForm').reset();
    }
  });
};

export {
  domClickEvents, domSubmitEvents, filterEvent, searchEvent
};
