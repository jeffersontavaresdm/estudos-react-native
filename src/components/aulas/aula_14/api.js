import axios from 'axios';
import CONFIG from './config';

const API = axios.create({baseURL: CONFIG.BaseURL});

export default API;
