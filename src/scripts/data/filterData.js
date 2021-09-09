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
  axios.get(`${dbUrl}/vocabulary.json?orderby="user_id"&equalTo="${uid}"`)
    .then((terms) => {
      const filteredTerms = terms.filter((term) => term.tech === techSelected);
      resolve(filteredTerms);
    }).catch((err) => reject(err));
});

export { getFilters, getFilteredTerms };
