import axios from 'axios';
import CONFIG from './config';

const API = axios.create({
  baseURL: CONFIG.baseUrl,
});

export default API;
