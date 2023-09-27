import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const html =

    <React.StrictMode>
        <App />
    </React.StrictMode>

root.render(html);