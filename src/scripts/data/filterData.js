import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getFilters = async () => {
  const terms = await axios.get(`${dbUrl}/vocabulary.json?orderby="tech"`);
  const filters = (Object.values(terms.data)).map((obj) => obj.tech);
  const arrayOfFilters = [...new Set(filters)];
  return arrayOfFilters;
};

export default getFilters;
