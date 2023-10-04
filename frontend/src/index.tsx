import './index.css';

import React, { ReactElement } from 'react';
import ReactDOM, { Root } from 'react-dom/client';

import App from './App';


const root: Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const Html: ReactElement =

    <React.StrictMode>
        <App />
    </React.StrictMode>

root.render(Html);
