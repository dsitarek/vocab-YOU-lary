import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTerms = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary.json?orderBy="user_id"&equalTo="${uid}"`)
    .then((terms) => resolve(Object.values(terms.data)))
    .catch((err) => reject(err));
});

const createTerm = (termObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocabulary.json`, termObj)
    .then((term) => {
      const body = { firebaseKey: term.data.name };
      axios.patch(`${dbUrl}/vocabulary/${term.data.name}.json`, body)
        .then(() => {
          getTerms(termObj.user_id).then((terms) => resolve(terms));
        });
    }).catch((err) => reject(err));
});

const deleteTerm = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocabulary/${firebaseKey}.json`)
    .then(() => getTerms(uid).then((terms) => resolve(terms)))
    .catch((err) => reject(err));
});

const editTerm = (editObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocabulary/${editObj.firebaseKey}.json`, editObj)
    .then(() => getTerms(editObj.user_id).then((terms) => resolve(terms)))
    .catch((err) => reject(err));
});

const getSingleTerm = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary/${firebaseKey}.json`)
    .then((term) => resolve(term.data))
    .catch((err) => reject(err));
});

const getSortedTerms = (uid, sortMethod) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary.json?orderBy="user_id"&equalTo="${uid}"`)
    .then((terms) => {
      if (sortMethod === 'A-Z') {
        resolve(Object.values(terms.data).sort((a, b) => ((a.title > b.title) && 1) || -1));
      } if (sortMethod === 'newest') {
        resolve(Object.values(terms.data).sort((a, b) => a.timestamp.localeCompare(b.timestamp)));
      } if (sortMethod === 'oldest') {
        resolve(Object.values(terms.data).sort((a, b) => b.timestamp.localeCompare(a.timestamp)));
      }
    }).catch((err) => reject(err));
});

const getSearchedTerm = async (uid, search) => {
  const terms = await axios.get(`${dbUrl}/vocabulary.json?orderBy="user_id"&equalTo="${uid}"`);
  const searchReturn = (Object.values(terms.data)).filter((obj) => (obj.title.toLowerCase().includes(search)) || (obj.definition.toLowerCase().includes(search)));
  return searchReturn;
};

export {
  getTerms, createTerm, deleteTerm, editTerm, getSingleTerm, getSortedTerms, getSearchedTerm
};
