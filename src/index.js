import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// var cors = require('cors')

// App.use(cors()) // Use this after the variable declaration

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
