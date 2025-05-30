// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://edu-learning-hub.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
