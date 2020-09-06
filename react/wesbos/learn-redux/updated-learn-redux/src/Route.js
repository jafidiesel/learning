import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';


const Router = props => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default Router;