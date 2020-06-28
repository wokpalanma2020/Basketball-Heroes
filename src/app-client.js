// This component initializes the entire web app in the browser serving as the entry point

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};