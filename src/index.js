import 'normalize.css/normalize.css';
import './App.css';
import './styles/css/simple-sidebar.css';
import './styles/css/bootstrap.css';

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';


import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js';


const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root'));