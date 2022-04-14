import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
// import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement,
);
