import axios from 'axios';

const apiRick_v3 = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character/"
}
);

export default apiRick_v3;