import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTerms = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary.json?orderBy="user_id"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((err) => reject(err));
});

const createTerm = (termObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocabulary.json`, termObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocabulary/${response.data.name}.json`, body)
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
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

export {
  getTerms, createTerm, deleteTerm, editTerm, getSingleTerm
};
