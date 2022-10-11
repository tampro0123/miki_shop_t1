import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/'

const request = axios.create({
    baseURL: 'http://localhost:3000/api/',
})

export default request;