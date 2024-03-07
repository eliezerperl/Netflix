import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { axios } from '@/utils/imports.ts';

axios.defaults.baseURL = import.meta.env.DEV
  ? 'http://localhost:8080'
  : // : 'https://elisnetflixapi.netlify.app/.netlify/functions';
    'https://netflix-6857.vercel.app';
console.log('dev ' + import.meta.env.DEV);
console.log('prod ' + import.meta.env.PROD);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
