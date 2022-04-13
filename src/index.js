import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
