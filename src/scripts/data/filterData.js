import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getFilters = async () => {
  const terms = await axios.get(`${dbUrl}/vocabulary.json?orderby="tech"`);
  const filters = (Object.values(terms.data)).map((obj) => obj.tech);
  const arrayOfFilters = [...new Set(filters)];
  return arrayOfFilters;
};

const getFilteredTerms = (uid, techSelected) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary.json?orderBy="user_id"&equalTo="${uid}"`)
    .then((terms) => {
      if (techSelected !== 'all') {
        const filteredTerms = (Object.values(terms.data)).filter((term) => term.tech === techSelected);
        resolve(filteredTerms);
      } else {
        resolve(Object.values(terms.data));
      }
    }).catch((err) => reject(err));
});

export { getFilters, getFilteredTerms };
