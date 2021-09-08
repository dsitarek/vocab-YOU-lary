import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTerms = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary.json`)
    .then((response) => {
      resolve(Object.values(response.data));
      console.log(Object.values(response.data));
    })
    .catch((err) => reject(err));
});

const createTerm = (newTerm) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocabulary.json`, newTerm)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocabulary/${response.data.name}.json`, body)
        .then(() => {
          getTerms().then((terms) => resolve(terms));
        });
    }).catch((err) => reject(err));
});

export { getTerms, createTerm };
