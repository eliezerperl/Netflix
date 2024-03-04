import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { axios } from '@/utils/imports.ts';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://elisnetflixapi.netlify.app/.netlify/functions';
console.log(axios.defaults.baseURL);
console.log(process.env.NODE_ENV);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
