import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ConditionalSection from './sections/conditional';
import froms from './sections/forms';

ReactDOM.render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const element = <h1>holaa</h1>;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
