import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ms-tinder-backend.herokuapp.com'
})

export default instance;