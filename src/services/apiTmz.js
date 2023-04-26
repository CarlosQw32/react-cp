import axios from 'axios';

const apiTmz = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q='
});
 
export default apiTmz;