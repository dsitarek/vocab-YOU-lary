import {
  createTerm, deleteTerm, editTerm, getSingleTerm, getSearchedTerm, getTerms, getCommunityTerms
} from '../data/termsData';
import showTerms from '../components/terms';
import addTermForm from '../components/addTermForm';
import sortBy from '../helpers/sortFunction';
import filterBy from '../helpers/filterFunction';
import filterDropdown from '../components/filterDropdown';

const domClickEvents = (uid) => {
  document.querySelector('#pageContainer').addEventListener('click', async (e) => {
    if (e.target.id.includes('delete-term')) {
      const [, firebaseKey] = e.target.id.split('--');
      await deleteTerm(firebaseKey, uid).then((arr) => filterBy(arr)).then((arr) => sortBy(arr)).then((arr) => showTerms(arr, uid));
      if (document.getElementById('communityTechFilter')) document.getElementById('communityTechFilter').setAttribute('id', 'techFilter');
      if (document.getElementById('communitySortDropdown')) document.getElementById('communitySortDropdown').setAttribute('id', 'sortDropdown');
      filterDropdown();
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
      await copyTerm().then(createTerm).then((arr) => showTerms(arr, uid));
      if (document.getElementById('communityTechFilter')) document.getElementById('communityTechFilter').setAttribute('id', 'techFilter');
      if (document.getElementById('communitySortDropdown')) document.getElementById('communitySortDropdown').setAttribute('id', 'sortDropdown');
    }
    if (e.target.id.includes('new-card-btn')) {
      document.querySelector('#flashCards').click();
    }
  });
};

const domSubmitEvents = (uid) => {
  document.querySelector('#pageContainer').addEventListener('submit', async (e) => {
    if (e.target.id.includes('newTermForm')) {
      e.preventDefault();
      const termObj = {
        title: document.querySelector('#title').value,
        tech: document.querySelector('#tech').value,
        definition: document.querySelector('#definition').value,
        public: document.querySelector('#public').checked,
        timestamp: new Date(),
        user_id: uid
      };
      await createTerm(termObj).then((arr) => filterBy(arr)).then((arr) => sortBy(arr)).then((arr) => showTerms(arr, uid));
      filterDropdown();
    }

    if (e.target.id.includes('updateTermForm')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const termObj = {
        title: document.querySelector('#title').value,
        tech: document.querySelector('#tech').value,
        definition: document.querySelector('#definition').value,
        public: document.querySelector('#public').checked,
        user_id: uid,
        firebaseKey
      };
      editTerm(termObj).then((arr) => filterBy(arr)).then((arr) => sortBy(arr)).then((arr) => showTerms(arr, uid));
    }
  });
};

const filterEvent = (uid) => {
  document.querySelector('#pageContainer').addEventListener('change', (e) => {
    if (e.target.id.includes('techFilter') || e.target.id.includes('sortDropdown')) {
      getTerms(uid).then((arr) => filterBy(arr)).then((arr) => sortBy(arr)).then((arr) => showTerms(arr, uid));
    }
    if (e.target.id.includes('communityTechFilter') || e.target.id.includes('communitySortDropdown')) {
      getCommunityTerms().then((arr) => filterBy(arr)).then((arr) => sortBy(arr)).then((arr) => showTerms(arr, uid));
    }
  });
};

const searchEvent = (uid) => {
  document.querySelector('#pageContainer').addEventListener('submit', (e) => {
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
