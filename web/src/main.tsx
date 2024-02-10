import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App.tsx';
import './index.css';

axios.defaults.baseURL = 'http://localhost:8080';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
