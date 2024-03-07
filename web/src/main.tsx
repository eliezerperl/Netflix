import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { axios } from '@/utils/imports.ts';

axios.defaults.baseURL = import.meta.env.DEV
  ? 'http://localhost:8080'
  : import.meta.env.PLATFORM === 'vercel'
  ? 'https://netflix-6857.vercel.app'
  : 'https://elisnetflixapi.netlify.app/.netlify/functions';
console.log('dev ' + import.meta.env.DEV);
console.log('prod ' + import.meta.env.PROD);
console.log('platform ' + import.meta.env.VITE_PLATFORM);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
