import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { applyBrowserSupportClasses } from './utils';

// Apply browser support classes for CSS fallbacks
applyBrowserSupportClasses();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
