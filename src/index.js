import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import App from './Container/App.jsx';
import './Container/style.scss';
import { store } from './redux/store/index';

render( < Provider store = { store } > < App / > < /Provider> , document.getElementById('root'))