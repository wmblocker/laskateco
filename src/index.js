import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './scripts/App';
import registerServiceWorker from './scripts/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
