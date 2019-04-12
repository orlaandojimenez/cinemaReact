// Depencendies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/assets/css/index.css';
// Components
// import App from './components/App';
// Routes
import AppRoutes from './routes/'

// Service Worker
import * as serviceWorker from './serviceWorker';
// Render app 
ReactDOM.render(
  <BrowserRouter>
    <AppRoutes/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
