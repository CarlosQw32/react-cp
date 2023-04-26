import axios from 'axios';

const apiRick_v2 = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character/"
}
);

export default apiRick_v2;