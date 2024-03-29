import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './i18n';
import { Provider } from 'react-redux';

import { store } from "./store";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faCircle, faExclamationTriangle, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faCircle, faExclamationTriangle, faSpinner);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
