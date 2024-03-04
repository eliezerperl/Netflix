import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { axios } from '@/utils/imports.ts';

axios.defaults.baseURL = import.meta.env.DEV
  ? 'http://localhost:8080'
  : 'https://elisnetflixapi.netlify.app/.netlify/functions';
console.log(axios.defaults.baseURL);
console.log(import.meta.env.DEV);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
