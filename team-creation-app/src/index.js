import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Resource from './Resource';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Resource />, document.getElementById('root'));
registerServiceWorker();