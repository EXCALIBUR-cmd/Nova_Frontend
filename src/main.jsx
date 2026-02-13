import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import App from './App.jsx'
import './index.css'

// Configure axios defaults for all API calls
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;

console.log('API URL configured:', API_URL);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
