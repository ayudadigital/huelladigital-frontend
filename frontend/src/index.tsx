import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bulma/css/bulma.min.css';
import './styles/scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './redux/Store';

ReactDOM.render(
  <StoreProvider>
    <App/>
  </StoreProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
