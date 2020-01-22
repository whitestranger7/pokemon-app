import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './../node_modules/@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers/reducer';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
